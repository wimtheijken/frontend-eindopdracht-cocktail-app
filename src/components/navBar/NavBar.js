import React, {useContext} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import Button from "../button/Button";
import fetchData from "../../pages/home/Home";
import './NavBar.css';
import {SearchContext} from "../../context/SearchContext";

function NavBar({ className, labelA, labelB, labelC, labelD, pathA, pathB, pathC, pathD }) {
    const { randomCocktail, handleFilterList, filterType } = useContext(SearchContext)
    const { filter } = useParams();
    // console.log(filterType)
    // console.log(pathB)
    return (
        <div className={className}>
            <NavLink to={pathA}>
                <Button
                    type="button"
                    className="button-default"
                    onClick={
                        ()=> pathA === "/" ? randomCocktail() : pathA === "/filter/categorie"
                    }
                >
                    {labelA}
                </Button>
            </NavLink>
            <NavLink to={pathB}>
                <Button
                    type="button"
                    className="button-default"
                    onClick={
                        ()=>pathB === "/filter/glas"
                    }
                >
                    {labelB}
                </Button>
            </NavLink>
            <NavLink to={pathC}>
                <Button
                    type="button"
                    className="button-default"
                    onClick={

                            () => pathC === "/filter/ingredient"
                    }
                >
                    {labelC}
                </Button>
            </NavLink>
            <NavLink to={pathD}>
                <Button
                    type="button"
                    className="button-default"
                    onClick={
                        ()=>
                            pathD === "/filter/alcohol"

                    }
                >
                    {labelD}
                </Button>
            </NavLink>
        </div>
    );
}

export default NavBar;