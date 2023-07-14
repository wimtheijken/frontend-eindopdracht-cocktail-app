import React, {useContext, useEffect} from 'react';
import {SearchContext} from "../../context/SearchContext";
import {useParams} from "react-router-dom";
import SingleView from "../../components/singleView/SingleView";
import './Cocktail.css';

function Cocktail(props) {
    const { searchResult, resultItem, handleCheck, handleSingleView, filterCheck, check, singleCheck } = useContext(SearchContext)
    const {cocktail} = useParams();

    useEffect(()=>{
        handleCheck()
    }, [check])

    useEffect(() => {
        singleCheck && handleSingleView(cocktail)
    }, [singleCheck])

    return (
        <div className="cocktail-container">
            {searchResult && <SingleView
                cocktailobject={searchResult[0]}
                id={searchResult[0].idDrink}
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
                strIngredient6={searchResult[0].strIngredient6}
                strIngredient7={searchResult[0].strIngredient7}
                strIngredient8={searchResult[0].strIngredient8}
                strIngredient9={searchResult[0].strIngredient9}
                strIngredient10={searchResult[0].strIngredient10}
                strMeasure1={searchResult[0].strMeasure1}
                strMeasure2={searchResult[0].strMeasure2}
                strMeasure3={searchResult[0].strMeasure3}
                strMeasure4={searchResult[0].strMeasure4}
                strMeasure5={searchResult[0].strMeasure5}
                strMeasure6={searchResult[0].strMeasure6}
                strMeasure7={searchResult[0].strMeasure7}
                strMeasure8={searchResult[0].strMeasure8}
                strMeasure9={searchResult[0].strMeasure9}
                strMeasure10={searchResult[0].strMeasure10}
            />}
            {resultItem && <SingleView
                cocktailobject={resultItem}
                id={resultItem.idDrink}
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
                strIngredient6={resultItem.strIngredient6}
                strIngredient7={resultItem.strIngredient7}
                strIngredient8={resultItem.strIngredient8}
                strIngredient9={resultItem.strIngredient9}
                strIngredient10={resultItem.strIngredient10}
                strMeasure1={resultItem.strMeasure1}
                strMeasure2={resultItem.strMeasure2}
                strMeasure3={resultItem.strMeasure3}
                strMeasure4={resultItem.strMeasure4}
                strMeasure5={resultItem.strMeasure5}
                strMeasure6={resultItem.strMeasure6}
                strMeasure7={resultItem.strMeasure7}
                strMeasure8={resultItem.strMeasure8}
                strMeasure9={resultItem.strMeasure9}
                strMeasure10={resultItem.strMeasure10}
            />}
        </div>
    );
}

export default Cocktail;