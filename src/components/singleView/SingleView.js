import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import './SingleView.css';
import Button from "../button/Button";


function SingleView({
                        cocktailobject,
                        id,
                        image,
                        name,
                        glass,
                        description,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                        strIngredient11,
                        strIngredient12,
                        strIngredient13,
                        strIngredient14,
                        strIngredient15,
                        strMeasure1,
                        strMeasure2,
                        strMeasure3,
                        strMeasure4,
                        strMeasure5,
                        strMeasure6,
                        strMeasure7,
                        strMeasure8,
                        strMeasure9,
                        strMeasure10,
                        strMeasure11,
                        strMeasure12,
                        strMeasure13,
                        strMeasure14,
                        strMeasure15
                    }) {

    const { favorites, favoCheck } = useContext(SearchContext);

    const navigate = useNavigate()

    function handleFavo() {
        favoCheck(cocktailobject, id)
        navigate(`/cocktail/${name}`) // om gelijk het hartje actief te maken
    }

    return (
        <div className="singleview-container">
            <h1>{name}</h1>
            <div className="singleview-inner-container">
                <div className="singleview-image-container">
                    <div className="singleview-shadow">
                        <img className="singleview-image"
                             src={image}
                             alt={name}/>
                    </div>
                </div>
                <div className="singleview-description">
                    <div className="singleview-favo-container">
                        <h3>Ingredients</h3><span className={favorites.includes(id) ? "singleview-fill" : "singleview-outline"} onClick={handleFavo}><span
                        className="material-symbols-outlined">
favorite
            </span></span>
                    </div>
                    <div className="singleview-ingredients">
                        {strIngredient1 !== null && <p>• {strIngredient1} {strMeasure1}</p>}
                        {strIngredient2 !== null && <p>• {strIngredient2} {strMeasure2}</p>}
                        {strIngredient3 !== null && <p>• {strIngredient3} {strMeasure3}</p>}
                        {strIngredient4 !== null && <p>• {strIngredient4} {strMeasure4}</p>}
                        {strIngredient5 !== null && <p>• {strIngredient5} {strMeasure5}</p>}
                        {strIngredient6 !== null && <p>• {strIngredient6} - {strMeasure6}</p>}
                        {strIngredient7 !== null && <p>• {strIngredient7} - {strMeasure7}</p>}
                        {strIngredient8 !== null && <p>• {strIngredient8} - {strMeasure8}</p>}
                        {strIngredient9 !== null && <p>• {strIngredient9} - {strMeasure9}</p>}
                        {strIngredient10 !== null && <p>• {strIngredient10} - {strMeasure10}</p>}
                        {strIngredient11 !== null && <p>• {strIngredient11} - {strMeasure11}</p>}
                        {strIngredient12 !== null && <p>• {strIngredient12} - {strMeasure12}</p>}
                        {strIngredient13 !== null && <p>• {strIngredient13} - {strMeasure13}</p>}
                        {strIngredient14 !== null && <p>• {strIngredient14} - {strMeasure14}</p>}
                        {strIngredient15 !== null && <p>• {strIngredient15} - {strMeasure15}</p>}
                        <p><i>{glass}</i></p>
                    </div>
                    {description !== null && <h3>Instructions</h3>}
                    <p>{description}</p>
                    <Button className="button-reset" onClick={() => navigate(-1)}>&larr; Terug</Button>
                </div>
            </div>
        </div>
    );
}

export default SingleView;