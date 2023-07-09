import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import './Home.css';
import {SearchContext} from "../../context/SearchContext";

function Home(props) {
    const { randomCocktail, cocktailName, cocktailImage, loading, error } = useContext(SearchContext)

    useEffect(() => {
        randomCocktail()
    }, [])

    return (
        <div className="home-container">
            <h1>Cocktail Assistant</h1>
            <div className="home-image-container">
                {cocktailName && <div className="home-shadow">
                    <img className="home-image"
                         src={cocktailImage}
                         alt={cocktailName}/>
                </div>}
                <div className="home-cocktail-name">{cocktailName}</div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Oops... Er is iets mis gegaan.</p>}
        </div>
    );
}

export default Home;