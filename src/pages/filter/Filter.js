import React, {useContext, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import {getFilterType} from "../../helper/getFilterType";
import './Filter.css';

function Filter(props) {

    const { handleFilterChoice, check, filterResult, loading, error, handleFilterList, setFilterType, filterItems, setObjectType, filterType } = useContext(SearchContext)
    const { filter } = useParams();
    const navigate = useNavigate();
    console.log(filter)

    useEffect(()=>{
        setFilterType(getFilterType(filter)) // titel: categorie, glas, ingredieneten  of alcohol
        handleFilterList(filter)
    }, [filter])

    async function handleFormSubmit(e) {
        e.preventDefault()
        setObjectType(e.target.value) // titel voor de lijstweergave
        handleFilterChoice(filterType, e.target.value)
    }

    useEffect(()=>{
        if (check) {
            filterResult && navigate('/listview')
        }
    },[filterResult])

    return (
        <div className="filter-container">
            {filter && <h1>{filterType}</h1>}
            <form className="filter-inner-container" onChange={handleFormSubmit}>
                <select className="filter-select" multiple size="7">
                    { filterItems && filterType === 'Categorie' && filterItems.map((filterItem) => {
                        return <option className="scroll-page" id={filterItem.strCategory} key={filterItem.strCategory} value={filterItem.strCategory} >{filterItem.strCategory}</option>
                    }) }
                    { filterItems && filterType === 'Type glas' && filterItems.map((filterItem) => {
                        return <option className="scroll-page" id={filterItem.strGlass} key={filterItem.strGlass} value={filterItem.strGlass}>{filterItem.strGlass}</option>
                    }) }
                    { filterItems && filterType === 'Ingrediënt' && filterItems.map((filterItem) => {
                        return <option className="scroll-page" id={filterItem.strIngredient1} key={filterItem.strIngredient1} value={filterItem.strIngredient1}>{filterItem.strIngredient1}</option>
                    }) }
                    { filterItems && filterType === 'Alcohol' && filterItems.map((filterItem) => {
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