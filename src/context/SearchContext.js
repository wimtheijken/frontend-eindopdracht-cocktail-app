import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {checkListType} from "../helper/checkListType";
import {useParams} from "react-router-dom";
import {checkAmountLetters} from "../helper/checkAmountLetters";
import {checkFilterKey} from "../helper/checkFilterKey";
import {checkFilterChoice} from "../helper/checkFilterChoice";
import {checkAmountLetters2} from "../helper/checkAmountLetters2";
import {AuthContext} from "./AuthContext";

export const SearchContext = createContext(null)

function SearchContextProvider({children}) {

    // Naam en image van de cocktail op de homepage
    const [cocktailName, setCocktailName] = useState('') // naam vd Cocktail gebruikt op home/random pagina
    const [cocktailImage, setCocktailImage] = useState('') // plaatje vd Cocktail gebruikt op home/random pagina

    // zoekterm en zoek resultaten
    const [search, setSearch] = useState('') // zoek-term op de zoekpagina ook gebruikt als titel bij een zoekresultaten lijst
    const [searchResult, setSearchResult] = useState(null) // zoek resultaten van de zoek-term

    const [filterType, setFilterType] = useState('') // filtertype: categorie, glas, ingredient of alcohol
    const [filterItems, setFilterItems] = useState(null)
    const [objectKey, setObjectKey] = useState('')
    const [objectType, setObjectType] = useState('')
    const [filterResult, setFilterResult] = useState(null)
    const [resultItem, setResultItem] = useState(null)

    const [filterList, setFilterList] = useState('')
    const [singleView, setSingleView] = useState('') // singleView cocktail id
    const [favoritesArray, setFavoritesArray] = useState([]) // favorieten array met alle gegevens van de cocktail
    // const [favoName, setFavoName] = useState(''); // wordt deze gebruikt? !!!!!!
    const [favorites, setFavorites] = useState([]); // favorieten array met alleen de naam van de cocktail
    // const [isFavo, toggleIsFavo] = useState(false); // wordt deze gebruikt? !!!!!!

    const [loading, toggleLoading] = useState(false); // Geeft de gebruiker een update bij langzame laadtijd
    const [error, toggleError] = useState(false); // Geeft de gebruiker informatie bij een error melding

    const [check, toggleCheck] = useState(false);
    const [searchCheck, toggleSearchCheck] = useState(false);
    const [filterCheck, toggleFilterCheck] = useState(false);
    const [singleCheck, toggleSingleCheck] = useState(false);

    const [viewport, setViewport] = useState(0); // responsive helper

    // randomfunctie voor de home pagina
    async function randomCocktail() {
        toggleLoading(true)
        toggleError(false)
        try {
            const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            setCocktailName(data.drinks[0].strDrink)
            setCocktailImage(data.drinks[0].strDrinkThumb)
            setSingleView(data.drinks[0].idDrink)
        } catch (e) {
            if (axios.isCancel(e)) {
                console.log('The axios request was cancelled')
            } else {
                console.error(e);
                toggleError(true)
            }
        }
        toggleCheck(false)
        toggleLoading(false)
    }

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
            console.log("singleCheck")
            console.log(singleCheck)
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

    async function handleError() {
        toggleError(false)
    }

    async function handleCheck() {
        toggleCheck(false)
    }

    async function handleSingleCheck() {
        toggleSingleCheck(true)
    }

    async function handleFilterList(filter) {
        toggleLoading(true)
        toggleError(false)
        toggleCheck(false)
        try {
            const res = await axios.get(checkListType(filter))
            setFilterItems(res.data.drinks)
            toggleSearchCheck(false)
            toggleFilterCheck(true)
            toggleCheck(true)
        } catch (e) {
            console.error(e)
            toggleError(true);
        }
        toggleLoading(false);
    }

    async function handleFilterChoice(key, choice) {
        toggleLoading(true)
        toggleError(false)
        toggleCheck(false)
        try {
            const res = await axios.get(`${checkFilterKey(key)}${checkFilterChoice(choice)}`)
            setFilterResult(res.data.drinks)
            toggleSearchCheck(false)
            toggleFilterCheck(true)
            // toggleSingleCheck(true)
            toggleCheck(true)
        } catch (e) {
            console.error(e)
            toggleError(true);
        }
        toggleLoading(false);
    }

    async function handleSingleView(cocktail) {
        toggleLoading(true)
        toggleError(false)
        console.log("handleSingleView")
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`)
            setSearchResult(res.data.drinks)
            toggleFilterCheck(false)
            toggleSearchCheck(true)
            // toggleSingleCheck(false)
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

    //  ----------------- FILTER HANDLING----------------------- //
    // haalt de favorieten uit de localStorage en zet ze in een namen array
    async function handleFavorites(storedFavo) {
        console.log("handleFavorites")
        const favorites = storedFavo.split(",");
        favorites.map((favorite)=>{
            handleFavoritesInfo(favorite)
        })
    }

    // en haalt ze 1 voor 1 terug en zet ze weer in een volledige array
    async function handleFavoritesInfo(favorite) {
        toggleLoading(true)
        toggleError(false)
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favorite}`)
            favoritesArray.push(res.data.drinks[0])
            // toggleSingleCheck(true)
        } catch (e) {
            if (axios.isCancel(e)) {
                console.log('The axios request was cancelled')
            } else {
                console.error(e);
                toggleError(true)
            }
        }
        // toggleIsFavo(true)
        toggleLoading(false);
    }
    // zet favorieten in een array en in localStorage
    function favoCheck(cocktailobject, id) {
        // favorites.length === 0 ? toggleIsFavo(true) : toggleIsFavo(false)
        favorites.includes(id) ? favorites.splice(favorites.indexOf(id), 1,) : favorites.push(id)
        // favoritesArray.includes(cocktailobject) ? favoritesArray.splice(favoritesArray.indexOf(cocktailobject), 1,) : favoritesArray.push(cocktailobject)
        localStorage.setItem('favo', favorites);
    }
    // haalt de favorieten uit de localStorage
    // function removeFavo() {
    //     localStorage.removeItem('favo');
    // }

    // controleerd de viewport breedte voor responsive weergave
    function viewPort() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    const data = {
        cocktailName: cocktailName,
        setCocktailName: setCocktailName,
        cocktailImage: cocktailImage,
        setCocktailImage: setCocktailImage,

        search: search,
        setSearch: setSearch,
        searchResult: searchResult,
        setSearchResult: setSearchResult,

        filterType: filterType,
        setFilterType: setFilterType,
        filterItems: filterItems,
        setFilterItems: setFilterItems,
        filterList: filterList,
        setFilterList: setFilterList,
        objectKey: objectKey,
        setObjectKey: setObjectKey,
        objectType: objectType,
        setObjectType: setObjectType,
        filterResult: filterResult,
        setFilterResult: setFilterResult,
        resultItem: resultItem,
        setResultItem: setResultItem,
        singleView: singleView,
        setSingleView: setSingleView,
        favoritesArray: favoritesArray,
        setFavoritesArray: setFavoritesArray,
        // favoName,
        // setFavoName,
        favorites: favorites,
        setFavorites: setFavorites,
        // isFavo,
        // toggleIsFavo,

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

        viewport: viewport,
        setViewport: setViewport,

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
        // removeFavo: removeFavo,
    }

    return (
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;

