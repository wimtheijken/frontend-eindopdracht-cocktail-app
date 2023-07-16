import React, {useContext, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import {getObjectKey} from "../../helper/getObjectKey";
import './Filter.css';

function Filter(props) {

    const { handleFilterChoice, check, filterResult, loading, error, handleFilterList, setFilterType, filterItems, objectKey, setObjectKey, objectType, setObjectType } = useContext(SearchContext)
    const { filter } = useParams();
    const navigate = useNavigate();
    console.log(filter)

    useEffect(()=>{
        setFilterType(filter)
        setObjectKey(getObjectKey(filter))
        handleFilterList(filter)
    }, [filter])

    async function handleFormSubmit(e) {
        e.preventDefault()
        handleFilterChoice(objectKey, e.target.value)
        setObjectType(e.target.value)
        console.log(e.target.value)
        console.log(objectType)
    }

    useEffect(()=>{
        if (check) {
            filterResult && navigate('/listview')
        }
    },[filterResult])

    return (
        <div className="filter-container">
            {filter && <h1>{objectKey}</h1>}
            <form className="filter-inner-container" onChange={handleFormSubmit}>
                <select className="filter-select" multiple size="7">
                    { filterItems && objectKey === 'Categorie' && filterItems.map((filterItem) => {
                        return <option className="scroll-page" id={filterItem.strCategory} key={filterItem.strCategory} value={filterItem.strCategory} /*onChange={()=>{handleChange(e)}}*/>{filterItem.strCategory}</option>
                    }) }
                    { filterItems && objectKey === 'Type glas' && filterItems.map((filterItem) => {
                        return <option className="scroll-page" id={filterItem.strGlass} key={filterItem.strGlass} value={filterItem.strGlass}>{filterItem.strGlass}</option>
                    }) }
                    { filterItems && objectKey === 'Ingrediënt' && filterItems.map((filterItem) => {
                        return <option className="scroll-page" id={filterItem.strIngredient1} key={filterItem.strIngredient1} value={filterItem.strIngredient1}>{filterItem.strIngredient1}</option>
                    }) }
                    { filterItems && objectKey === 'Alcohol' && filterItems.map((filterItem) => {
                        return <option className="scroll-page" id={filterItem.strAlcoholic} key={filterItem.strAlcoholic} value={filterItem.strAlcoholic}>{filterItem.strAlcoholic}</option>
                    }) }
                </select>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Oops... Er is iets mis gegaan.</p>}
        </div>
    );
}

export default Filter;