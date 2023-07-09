import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {checkListType} from "../helper/checkListType";
import {useParams} from "react-router-dom";
import {checkAmountLetters} from "../helper/checkAmountLetters";
import {checkFilterKey} from "../helper/checkFilterKey";
import {checkFilterChoice} from "../helper/checkFilterChoice";
import {checkAmountLetters2} from "../helper/checkAmountLetters2";

export const SearchContext = createContext(null)

function SearchContextProvider({children}) {
    const [cocktailName, setCocktailName] = useState('') // naam vd Cocktail gebruikt op home/random pagina
    const [cocktailImage, setCocktailImage] = useState('') // plaatje vd Cocktail gebruikt op home/random pagina

    const [search, setSearch] = useState('') // zoek-term op de zoekpagina
    const [searchResult, setSearchResult] = useState(null) // zoek resultaten van de zoek-term

    const [filterType, setFilterType] = useState('') // filtertype: categorie, glas, ingredient of alcohol
    const [filterItems, setFilterItems] = useState(null)
    const [objectKey, setObjectKey] = useState('')
    const [objectType, setObjectType] = useState('')
    const [filterResult, setFilterResult] = useState(null)
    const [resultItem, setResultItem] = useState(null)
    const [endpoint, setEndpoint] = useState('') // zoek endpoint (checken of deze wel word gebruikt) !!!!!!
    const [filterList, setFilterList] = useState('')
    const [singleView, setSingleView] = useState('') // singleView cocktail id
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [check, toggleCheck] = useState(false);
    const [searchCheck, toggleSearchCheck] = useState(false);
    const [filterCheck, toggleFilterCheck] = useState(false);
    const [singleCheck, toggleSingleCheck] = useState(false);

    const { filter } = useParams();

    async function randomCocktail() { // randomfunctie voor de home pagina
        toggleLoading(true)
        toggleError(false)
        try {
            const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            setCocktailName(data.drinks[0].strDrink)
            setCocktailImage(data.drinks[0].strDrinkThumb)
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
            // console.log(res.data.drinks)
            // res.data.drinks === null ? toggleError(true) : toggleError(false)
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
            // console.log(res.data.drinks)
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
            // console.log(res.data.drinks)
            toggleSearchCheck(false)
            toggleFilterCheck(true)
            toggleSingleCheck(true)
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
            toggleSingleCheck(false)
            toggleCheck(true)
            // console.log(res.value.drinks)
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

    const data = {
        cocktailName: cocktailName,
        setCocktailName: setCocktailName,
        cocktailImage: cocktailImage,
        setCocktailImage: setCocktailImage,

        search: search,
        setSearch: setSearch,
        searchResult: searchResult,
        setSearchResult: setSearchResult,
        endpoint: endpoint,
        setEndpoint: setEndpoint,

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

        randomCocktail: randomCocktail,
        handleSearch: handleSearch,
        handleFilterList: handleFilterList,
        handleCheck: handleCheck,
        handleFilterChoice: handleFilterChoice,
        handleSingleView: handleSingleView,
        handleSingleCheck: handleSingleCheck,
        handleError: handleError,

    }

    return (
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;

