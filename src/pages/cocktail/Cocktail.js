import React, {useContext, useEffect} from 'react';
import {SearchContext} from "../../context/SearchContext";
import {useParams} from "react-router-dom";
import SingleView from "../../components/singleView/SingleView";
import './Cocktail.css';

function Cocktail(props) {
    const { searchResult, resultItem, handleCheck, handleSingleView, filterCheck, singleCheck } = useContext(SearchContext)
    const {cocktail} = useParams();

    handleCheck()

    useEffect(() => {
        singleCheck && handleSingleView(cocktail)
    }, [singleCheck])

    return (
        <div className="cocktail-container">
            {searchResult && <SingleView
                image={searchResult[0].strDrinkThumb}
                name={searchResult[0].strDrink}
                category={searchResult[0].strCategory}
                alcoholic={searchResult[0].strAlcoholic}
                glass={searchResult[0].strGlass}
                description={searchResult[0].strInstructions}
                strIngredient1={searchResult[0].strIngredient1}
                strIngredient2={searchResult[0].strIngredient2}
                strIngredient3={searchResult[0].strIngredient3}
                strIngredient4={searchResult[0].strIngredient4}
                strIngredient5={searchResult[0].strIngredient5}
                strMeasure1={searchResult[0].strMeasure1}
                strMeasure2={searchResult[0].strMeasure2}
                strMeasure3={searchResult[0].strMeasure3}
                strMeasure4={searchResult[0].strMeasure4}
                strMeasure5={searchResult[0].strMeasure5}
            />}
            {resultItem && <SingleView
                image={resultItem.strDrinkThumb}
                name={resultItem.strDrink}
                category={resultItem.strCategory}
                alcoholic={resultItem.strAlcoholic}
                glass={resultItem.strGlass}
                description={resultItem.strInstructions}
                strIngredient1={resultItem.strIngredient1}
                strIngredient2={resultItem.strIngredient2}
                strIngredient3={resultItem.strIngredient3}
                strIngredient4={resultItem.strIngredient4}
                strIngredient5={resultItem.strIngredient5}
                strMeasure1={resultItem.strMeasure1}
                strMeasure2={resultItem.strMeasure2}
                strMeasure3={resultItem.strMeasure3}
                strMeasure4={resultItem.strMeasure4}
                strMeasure5={resultItem.strMeasure5}
            />}
        </div>
    );
}

export default Cocktail;