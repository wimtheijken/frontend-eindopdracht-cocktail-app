import React, {useContext, useEffect} from 'react';
import {SearchContext} from "../../context/SearchContext";
import {useParams} from "react-router-dom";
import SingleView from "../../components/singleView/SingleView";
import './Cocktail.css';

function Cocktail(props) {
    const { singleView, handleCheck, handleSingleView, check, error, loading } = useContext(SearchContext)
    const {cocktail} = useParams();

    useEffect(()=>{
        handleCheck()
    }, [check])

    useEffect(() => {
        handleSingleView(cocktail)
    },[])

    return (
        <div className="cocktail-container">
            {singleView && <SingleView
                cocktailobject={singleView[0]}
                id={singleView[0].idDrink}
                image={singleView[0].strDrinkThumb}
                name={singleView[0].strDrink}
                category={singleView[0].strCategory}
                alcoholic={singleView[0].strAlcoholic}
                glass={singleView[0].strGlass}
                description={singleView[0].strInstructions}
                strIngredient1={singleView[0].strIngredient1}
                strIngredient2={singleView[0].strIngredient2}
                strIngredient3={singleView[0].strIngredient3}
                strIngredient4={singleView[0].strIngredient4}
                strIngredient5={singleView[0].strIngredient5}
                strIngredient6={singleView[0].strIngredient6}
                strIngredient7={singleView[0].strIngredient7}
                strIngredient8={singleView[0].strIngredient8}
                strIngredient9={singleView[0].strIngredient9}
                strIngredient10={singleView[0].strIngredient10}
                strIngredient11={singleView[0].strIngredient11}
                strIngredient12={singleView[0].strIngredient12}
                strIngredient13={singleView[0].strIngredient13}
                strIngredient14={singleView[0].strIngredient14}
                strIngredient15={singleView[0].strIngredient15}
                strMeasure1={singleView[0].strMeasure1}
                strMeasure2={singleView[0].strMeasure2}
                strMeasure3={singleView[0].strMeasure3}
                strMeasure4={singleView[0].strMeasure4}
                strMeasure5={singleView[0].strMeasure5}
                strMeasure6={singleView[0].strMeasure6}
                strMeasure7={singleView[0].strMeasure7}
                strMeasure8={singleView[0].strMeasure8}
                strMeasure9={singleView[0].strMeasure9}
                strMeasure10={singleView[0].strMeasure10}
                strMeasure11={singleView[0].strMeasure11}
                strMeasure12={singleView[0].strMeasure12}
                strMeasure13={singleView[0].strMeasure13}
                strMeasure14={singleView[0].strMeasure14}
                strMeasure15={singleView[0].strMeasure15}
            />}
            {loading && <p>Loading...</p>}
            {error && <p>Oops... Er is iets mis gegaan.</p>}
        </div>
    );
}

export default Cocktail;