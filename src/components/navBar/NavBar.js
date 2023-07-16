import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {SearchContext} from "../../context/SearchContext";
import {AuthContext} from "../../context/AuthContext";
import Button from "../button/Button";
import './NavBar.css';

function NavBar({className, labelA, labelB, labelC, labelD, pathA, pathB, pathC, pathD}) {
    const { randomCocktail, viewport, setViewport, viewPort,} = useContext(SearchContext)
    const {isAuth} = useContext(AuthContext);

    function handleResize() {
        setViewport(viewPort())
    }

    useEffect(() => {
        handleResize()
    }, [])

    window.addEventListener('resize', handleResize)

    return (
        <div className={className}>
            {isAuth &&
            <NavLink to={pathA}>
                <Button
                    type="button"
                    className={viewport < 567 ? "material-symbols-outlined" : "button-default"}
                    onClick={
                        () => pathA === "/" ? randomCocktail() : pathA === "/filter/categorie"
                    }
                >
                    {labelA}
                </Button>
            </NavLink>
            }
            {pathA === "/" && !isAuth &&
            <NavLink to={pathA}>
                <Button
                    type="button"
                    className={viewport < 567 ? "material-symbols-outlined" : "button-default"}
                    onClick={
                        () => pathA === "/" ? randomCocktail() : pathA === "/filter/categorie"
                    }
                >
                    {labelA}
                </Button>
            </NavLink>
            }
            {isAuth &&
                <NavLink to={pathB}>
                    <Button
                        type="button"
                        className={viewport < 567 ? "material-symbols-outlined" : "button-default"}
                        onClick={
                            () => pathB === "/filter/glas"
                        }
                    >
                        {labelB}
                    </Button>
                </NavLink>
            }
            {isAuth &&
                <NavLink to={pathC}>
                    <Button
                        type="button"
                        className={viewport < 567 ? "material-symbols-outlined" : "button-default"}
                        onClick={

                            () => pathC === "/filter/ingredient"
                        }
                    >
                        {labelC}
                    </Button>
                </NavLink>
            }
            { isAuth &&
            <NavLink to={pathD}>
                <Button
                    type="button"
                    className={viewport < 567 ? "material-symbols-outlined" : "button-default"}
                    onClick={
                        () =>
                            pathD === "/filter/alcohol"
                    }
                >
                    {labelD}
                </Button>
            </NavLink>
            }
            { pathD === "/signin" &&
                <NavLink to={pathD}>
                    <Button
                        type="button"
                        className={viewport < 567 ? "material-symbols-outlined" : "button-default"}
                        onClick={
                            () =>
                                pathD === "/filter/alcohol"
                        }
                    >
                        {labelD}
                    </Button>
                </NavLink>
            }
        </div>
    );
}

export default NavBar;