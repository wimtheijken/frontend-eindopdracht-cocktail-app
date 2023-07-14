import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import {AuthContext} from "../../context/AuthContext";
import './Home.css';

function Home(props) {
    const { randomCocktail, cocktailName, cocktailImage, loading, error } = useContext(SearchContext)
    const {isAuth, auth} = useContext(AuthContext);
    // console.log(auth)

    useEffect(() => {
        randomCocktail()
    }, [])
    console.log(isAuth)
    return (
        <div className="home-container">
            <h1>Cocktail Assistant</h1>
            {isAuth
                ?
                <Link to={"../cocktail/"+cocktailName} key={cocktailName}>
                    <div className="home-image-container">
                    {cocktailName && <div className="home-shadow">
                        <img className="home-image"
                             src={cocktailImage}
                             alt={cocktailName}/>
                    </div>}
                    <div className="home-cocktail-name">{cocktailName}</div>
                </div></Link>
                :
                <div className="home-image-container">
                    {cocktailName && <div className="home-shadow">
                        <img className="home-image"
                             src={cocktailImage}
                             alt={cocktailName}/>
                    </div>}
                    <div className="home-cocktail-name">{cocktailName}</div>
                </div>
            }

            {loading && <p>Loading...</p>}
            {error && <p>Oops... Er is iets mis gegaan.</p>}
        </div>
    );
}

export default Home;