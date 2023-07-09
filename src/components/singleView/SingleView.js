import React, {useContext} from 'react';
import './SingleView.css';
import {SearchContext} from "../../context/SearchContext";

function SingleView({
                        image,
                        name,
                        category,
                        alcoholic,
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
                        strMeasure1,
                        strMeasure2,
                        strMeasure3,
                        strMeasure4,
                        strMeasure5,
                        strMeasure6,
                        strMeasure7,
                        strMeasure8,
                        strMeasure9,
                        strMeasure10
                    }) {

    const {searchResult} = useContext(SearchContext)

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
                    <h3>Ingredients</h3>
                    <div className="singleview-ingredients">
                        {strIngredient1 !== null && <p>• {strIngredient1}  {strMeasure1}</p>}
                        {strIngredient2 !== null && <p>• {strIngredient2}  {strMeasure2}</p>}
                        {strIngredient3 !== null && <p>• {strIngredient3}  {strMeasure3}</p>}
                        {strIngredient4 !== null && <p>• {strIngredient4}  {strMeasure4}</p>}
                        {strIngredient5 !== null && <p>• {strIngredient5}  {strMeasure5}</p>}
                        <p>• {glass}</p>
                        {/*{strIngredient6 !== null && <p>• {strIngredient6} - {strMeasure6}</p>}*/}
                        {/*{strIngredient7 !== null && <p>• {strIngredient7} - {strMeasure7}</p>}*/}
                        {/*{strIngredient8 !== null && <p>• {strIngredient8} - {strMeasure8}</p>}*/}
                        {/*{strIngredient9 !== null && <p>• {strIngredient9} - {strMeasure9}</p>}*/}
                        {/*{strIngredient10 !== null && <p>• {strIngredient10} - {strMeasure10}</p>}*/}
                    </div>
                    {description !== null && <h3>Instructions</h3>}
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleView;