import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import {checkSearchResult} from "../../helper/checkSearchResult";
import './Search.css';

function Search() {
    const { handleSearch, search, setSearch, handleError, endpoint, setEndpoint, searchResult, check, toggleCheck, toggleFilterCheck, loading, error } = useContext(SearchContext)
    const navigate = useNavigate();
    async function handleFormSubmit(e) {
        e.preventDefault()
        handleSearch(search)
    }

    useEffect(()=>{
        if (check) {
            checkSearchResult(searchResult) ? navigate(`/cocktail/${searchResult}`) : navigate('/listview')
        }
    },[searchResult])

    return (
        <div className="search-container">
            <h1>Zoek uw cocktail</h1>
            <form onSubmit={handleFormSubmit} className="search-form">
                <Input
                    className="input-field"
                    id="search-field"
                    name="search-field"
                    type="text"
                    value={search}
                    placeholder="Type hier de naam of eerste letter van de cocktail die u zoekt"
                    onChange={e => setSearch(e.target.value)}/>
                <Button
                    type="submit"
                    className="button-search"
                >
                    Zoek
                </Button>
            </form>
            {loading && <p className="search-error">Loading...</p>}
            {/*{error && <p className="search-error">Oops... Er is iets mis gegaan. Probeer het opnieuw.</p>}*/}
        </div>
    );
}

export default Search;