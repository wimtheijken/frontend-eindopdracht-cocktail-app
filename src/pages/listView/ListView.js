import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import ListItem from "../../components/listItem/ListItem";
import './ListView.css';

function ListView(props) {

    const { searchResult, search, searchCheck, filterCheck, filterResult, handleCheck,handleSingleCheck, filterTitle, objectType } = useContext(SearchContext)

    handleCheck()
    handleSingleCheck()

    console.log("searchResult")
    console.log(searchResult)
    console.log("filterResult")
    console.log(filterResult)


    return (
        <div className="listview-container">
            <div className="listview-inner-container">
                { searchCheck && <h1>{search}</h1>}
                { filterCheck && <h1>{objectType}</h1>}
                    <div className="listview-wrap-container">
                    { searchCheck && searchResult.map((item) => {
                        return <Link to={"../cocktail/"+item.idDrink}><ListItem
                            className="scroll-page"
                            id={item.idDrink}
                            key={item.idDrink}
                            value={item.strDrink}
                            name={item.strDrink}
                            image={item.strDrinkThumb}
                            /></Link>
                    }) }
                    { filterCheck && filterResult.map((item) => {
                        return <Link to={"../cocktail/"+item.idDrink}><ListItem
                            className="scroll-page"
                            id={item.idDrink}
                            key={item.idDrink}
                            value={item.strDrink}
                            name={item.strDrink}
                            image={item.strDrinkThumb}
                            /></Link>
                    }) }
                </div>
            </div>
        </div>
    );
}

export default ListView;