import React, {createContext, useState} from 'react';
import axios from "axios";
import {checkListType} from "../helper/checkListType";
import {checkAmountLetters} from "../helper/checkAmountLetters";
import {checkFilterKey} from "../helper/checkFilterKey";
import {checkFilterChoice} from "../helper/checkFilterChoice";
import {checkAmountLetters2} from "../helper/checkAmountLetters2";

export const SearchContext = createContext(null)

function SearchContextProvider({children}) {

    // RANDOM Naam en image van de cocktail op de homepage
    const [cocktailName, setCocktailName] = useState('') // naam vd Cocktail gebruikt op home/random pagina
    const [cocktailImage, setCocktailImage] = useState('') // plaatje vd Cocktail gebruikt op home/random pagina
    const [cocktailId, setCocktailId] = useState('') // singleView cocktail id tbv de random cocktail op de homepage

    // ZOEKEN zoekterm en zoekresultaten
    const [search, setSearch] = useState('') // zoek-term op de zoekpagina ook gebruikt als titel bij een zoekresultaten lijst
    const [searchResult, setSearchResult] = useState(null) // ZOEK RESULTAAT van de zoek-term

    // FILTER states
    const [filterType, setFilterType] = useState('') // TITEL filtertype: categorie, glas, ingredient of alcohol
    const [objectType, setObjectType] = useState('') // TITEL filter weergavelijst categorie binnen sub categorie voor de lijstweergave
    const [filterItems, setFilterItems] = useState(null) // ARRAY filter sub categorie binnen catogorie, glas, ingredient of alcohol
    const [filterResult, setFilterResult] = useState(null) // FILTER RESULTAAT lijstweergave van items binnen de sub categorie

    // FAVORIETEN array's
    const [favorites, setFavorites] = useState([]); // ARRAY  met alleen de id van de cocktail
    const [favoritesArray, setFavoritesArray] = useState([]) // ARRAY met het volledige object

    // SINGLE VIEW
    const [singleView, setSingleView] = useState(null) //

    // VIEWPORT
    const [viewport, setViewport] = useState(0); // responsive helper

    //ERROR / LOADING HANDLING
    const [loading, toggleLoading] = useState(false); // Geeft de gebruiker een update bij langzame laadtijd
    const [error, toggleError] = useState(false); // Geeft de gebruiker informatie bij een error melding

    // CHECKS
    const [check, toggleCheck] = useState(false); // CHECK
    const [searchCheck, toggleSearchCheck] = useState(false); // ontroleert of het om een searchlijst gaat (zie listview)
    const [filterCheck, toggleFilterCheck] = useState(false); // controleert of het om een filterlijst gaat (zie listview)
    const [singleCheck, toggleSingleCheck] = useState(false); // controleert of er met 1 letter gezocht wordt


    // ----------------------- HANDLING RANDOM HOMEPAGE ----------------------- //
    async function randomCocktail() {
        toggleLoading(true)
        toggleError(false)
        try {
            const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            setCocktailName(data.drinks[0].strDrink)
            setCocktailImage(data.drinks[0].strDrinkThumb)
            setCocktailId(data.drinks[0].idDrink)
        } catch (e) {
            if (axios.isCancel(e)) {
                console.log('The axios request was cancelled')
            } else {
                console.error(e);
                toggleError(true)
            }
        }
        // toggleCheck(false)
        toggleLoading(false)
    }

    // ----------------------- HANDLING SEARCH ----------------------- //
    async function handleSearch(search) {
        toggleLoading(true)
        toggleError(false)
        try {
            const res = await axios.get(`${checkAmountLetters(search)}${search}`)
            setSearchResult(res.data.drinks)
            toggleFilterCheck(false)
            toggleSearchCheck(true)
            checkAmountLetters2(search) ? toggleSingleCheck(true) : toggleSingleCheck(false)
            toggleCheck(true)
        } catch (e) {
            if (axios.isCancel(e)) {
                console.log('The axios request was cancelled')
            } else {
                console.error(e);
                toggleError(true)
            }
        }
        toggleLoading(false);
    }

    // ----------------------- HANDLING FILTER ----------------------- //
    // filterlist
    async function handleFilterList(filter) {
        toggleLoading(true)
        toggleError(false)
        try {
            const res = await axios.get(checkListType(filter))
            setFilterItems(res.data.drinks)
        } catch (e) {
            console.error(e)
            toggleError(true);
        }
        toggleLoading(false);
    }

    // sub filterlist
    async function handleFilterChoice(key, choice) {
        toggleLoading(true)
        toggleError(false)
        toggleCheck(false)
        try {
            const res = await axios.get(`${checkFilterKey(key)}${checkFilterChoice(choice)}`)
            setFilterResult(res.data.drinks)
            toggleSearchCheck(false)
            toggleFilterCheck(true)
            toggleCheck(true)
        } catch (e) {
            console.error(e)
            toggleError(true);
        }
        toggleLoading(false);
    }

    // ----------------------- HANDLING SINGLEVIEW  ----------------------- //
    async function handleSingleView(cocktail) {
        toggleLoading(true)
        toggleError(false)
        console.log(cocktail)
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`)
            setSingleView(res.data.drinks)
            toggleCheck(true)
        } catch (e) {
            if (axios.isCancel(e)) {
                console.log('The axios request was cancelled')
            } else {
                console.error(e);
                toggleError(true)
            }
        }
        toggleLoading(false);
    }

    //  ----------------------- HANDLING FAVORITES ----------------------- //
    // haalt de favorieten uit de localStorage en zet ze in een array met alleen de "id"
    async function handleFavorites(storedFavo) {
        const favorites = storedFavo.split(",");
        setFavorites(favorites)
        favorites.map((favorite)=>{
            handleFavoritesInfo(favorite)
        })
    }

    // en haalt favorieten 1 voor 1 terug en zet ze weer in een array van objecten
    async function handleFavoritesInfo(favorite) {
        toggleLoading(true)
        toggleError(false)
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favorite}`)
            favoritesArray.push(res.data.drinks[0])
        } catch (e) {
            if (axios.isCancel(e)) {
                console.log('The axios request was cancelled')
            } else {
                console.error(e);
                toggleError(true)
            }
        }
        toggleLoading(false);
    }

    // zet favorieten in twee array's en in localStorage
    function favoCheck(cocktailobject, id) {
        favorites.includes(id) ? favorites.splice(favorites.indexOf(id), 1,) : favorites.push(id)
        favoritesArray.includes(cocktailobject) ? favoritesArray.splice(favoritesArray.indexOf(cocktailobject), 1,) : favoritesArray.push(cocktailobject)
        localStorage.setItem('favo', favorites);
    }

    //  ----------------------- HANDLING VIEWPORT WIDHT INFO ----------------------- //
    // controleerd de viewport breedte voor responsive weergave
    function viewPort() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    //  ----------------------- HANDLING CHECKS ----------------------- //
    function handleError() {
        toggleError(false)
    }

    function handleCheck() {
        toggleCheck(false)
    }

    function handleSingleCheck() {
        toggleSingleCheck(true)
    }

    const data = {
        // ** RANDOM ** homepage
        cocktailName: cocktailName,
        setCocktailName: setCocktailName,
        cocktailImage: cocktailImage,
        setCocktailImage: setCocktailImage,
        cocktailId: cocktailId,
        setCocktailId: setCocktailId,

        // ** SEARCH **
        search: search,
        setSearch: setSearch,
        searchResult: searchResult,
        setSearchResult: setSearchResult,

        // ** FILTER **
        filterType: filterType,
        setFilterType: setFilterType,
        filterItems: filterItems,
        setFilterItems: setFilterItems,
        objectType: objectType,
        setObjectType: setObjectType,
        filterResult: filterResult,
        setFilterResult: setFilterResult,

        // singleView
        singleView: singleView,
        setSingleView: setSingleView,

        // favorieten
        favoritesArray: favoritesArray,
        setFavoritesArray: setFavoritesArray,
        favorites: favorites,
        setFavorites: setFavorites,

        // viewport
        viewport: viewport,
        setViewport: setViewport,

        // true ore false checkers
        error: error,
        setError: toggleError,
        loading: loading,
        toggleLoading: toggleLoading,
        check: check,
        setCheck: toggleCheck,
        searchCheck: searchCheck,
        toggleSearchCheck: toggleSearchCheck,
        filterCheck: filterCheck,
        toggleFilterCheck: toggleFilterCheck,
        singleCheck: singleCheck,
        toggleSingleCheck: toggleSingleCheck,

        // Functies
        randomCocktail: randomCocktail,
        handleSearch: handleSearch,
        handleFilterList: handleFilterList,
        handleCheck: handleCheck,
        handleFilterChoice: handleFilterChoice,
        handleSingleView: handleSingleView,
        handleSingleCheck: handleSingleCheck,
        handleError: handleError,
        viewPort: viewPort,
        handleFavorites: handleFavorites,
        favoCheck: favoCheck,
    }

    return (
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;

