import React, { useContext } from 'react';
import {Link, useParams} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import ListItem from "../../components/listItem/ListItem";
import './Favorites.css';

function Favorites(props) {

    const { favoritesArray, handleCheck, handleSingleCheck } = useContext(SearchContext)

    handleCheck()
    handleSingleCheck()

    console.log("favoritesArray")
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
        </div>
    );
}

export default Favorites;