import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import {AuthContext} from "../../context/AuthContext";
import './Home.css';

function Home(props) {
    const { randomCocktail, cocktailName, cocktailImage, loading, error, handleCheck, handleSingleCheck, cocktailId } = useContext(SearchContext)
    const { isAuth } = useContext(AuthContext);

    useEffect(() => {
        randomCocktail()
    }, [])

    useEffect(()=>{
        handleCheck()
        handleSingleCheck()
    },[])

    return (
        <div className="home-container">
            <h1>Cocktail Bar</h1>
            {isAuth
                ?
                <div className="home-inner-container">
                    <Link to={"../cocktail/" + cocktailId} key={cocktailId}>
                        <div className="home-image-container">
                            {cocktailName && <div className="home-shadow">
                                <img className="home-image"
                                     src={cocktailImage}
                                     alt={cocktailName}/>
                            </div>}
                            <div className="home-cocktail-name">{cocktailName}</div>
                        </div>
                    </Link>
                    <p className="home-text"><i>Klik op home</i> en laat u verrassen door een willekeurig geselecteerde cocktail.</p>
                </div>
                :
                <div className="home-inner-container">
                    <div className="home-image-container">
                        {cocktailName &&
                            <div>
                                <div className="home-shadow">

                                    <img className="home-image"
                                         src={cocktailImage}
                                         alt={cocktailName}/>
                                </div>
                                <div className="home-cocktail-name">{cocktailName}</div>
                            </div>
                        }
                    </div>
                    <p className="home-text">Deze applicatie biedt een keur aan cocktails met hun
                        bereidingswijze.
                        Registreer en/of login om toegang te krijgen tot heel veel cocktails en hun
                        bereidingswijze.</p>
                    <p className="home-text"><i>Klik op home</i> en laat u verrassen door een willekeurig geselecteerde cocktail.</p>
                </div>
            }
            {loading && <p>Loading...</p>}
            {error && <p>Oops... Er is iets mis gegaan.</p>}
        </div>
    );
}
export default Home;