import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import ListItem from "../../components/listItem/ListItem";
import './Favorites.css';

function Favorites(props) {

    const { favoritesArray, handleCheck, handleSingleCheck, error, loading } = useContext(SearchContext)

    useEffect(()=>{
        handleCheck()
        handleSingleCheck()
    },[])

    return (
        <div className="favorites-container">
            <div className="favorites-inner-container">
                <h1>Favorieten <span className="favorites-fill" ><span
                    className="material-symbols-outlined">
favorite
            </span></span></h1>
                <div className="favorites-wrap-container">
                    { favoritesArray.map((item) => {
                        return <Link to={"../cocktail/"+item.idDrink}><ListItem
                            className="scroll-page"
                            id={item.idDrink}
                            key={item.idDrink}
                            value={item.strDrink}
                            name={item.strDrink}
                            image={item.strDrinkThumb}
                        /></Link>
                    })}
                </div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Oops... Er is iets mis gegaan.</p>}
        </div>
    );
}

export default Favorites;