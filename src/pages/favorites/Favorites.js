import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {SearchContext} from "../../context/SearchContext";
import ListItem from "../../components/listItem/ListItem";
import './Favorites.css';
import axios from "axios";

function Favorites(props) {

    const {  } = useContext(AuthContext);

    const { favoritesArray, handleCheck, handleSingleCheck } = useContext(SearchContext)

    console.log(favoritesArray)

    return (
        <div className="favorites-container">
            <div className="favorites-inner-container">
                <h1>Favorieten <span className="favorites-fill" ><span
                    className="material-symbols-outlined">
favorite
            </span></span></h1>
                <div className="favorites-wrap-container">
                    { favoritesArray.map((item) => {
                        return <Link key={item.idDrink} to={"../cocktail/"+item.idDrink}><ListItem
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
        </div>
    );
}

export default Favorites;