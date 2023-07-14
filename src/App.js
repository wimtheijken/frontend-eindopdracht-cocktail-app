import React, {useContext, useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/Profile";
import Cocktail from "./pages/cocktail/Cocktail";
import ListView from "./pages/listView/ListView";
import Filter from "./pages/filter/Filter";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import './App.css';
import {AuthContext} from "./context/AuthContext";
import Menu from "./pages/menu/Menu";
import Favorites from "./pages/favorites/Favorites";
import {SearchContext} from "./context/SearchContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {

    const { isAuth } = useContext(AuthContext);
    const { viewport, setViewport, viewPort } = useContext(SearchContext)

    // let debouncedHandleResize
    function handleResize() {
        setViewport(viewPort())
    }

    useEffect(() => {
        handleResize()
    }, [])

    // console.log(viewport)
    window.addEventListener('resize', handleResize)

    return (
        <div className="app-container">
            {isAuth ?
                viewport < 567 ?
                    <NavBar
                        className="navbar-top"
                        labelA="home"
                        labelB="search"
                        labelC="favorite"
                        labelD="menu"
                        pathA="/"
                        pathB="/search"
                        pathC="/favorites"
                        pathD="/menu"
                    />
                    :
                    <NavBar
                        className="navbar-top"
                        labelA="Home"
                        labelB="Zoek"
                        labelC="Favorieten"
                        labelD="Menu"
                        pathA="/"
                        pathB="/search"
                        pathC="/favorites"
                        pathD="/menu"
                    />
                :
            viewport < 567 ?
                <NavBar
                className="navbar-top"
                labelA="home"
                labelB="search"
                labelC="favorite"
                labelD="login"
                pathA="/"
                pathB="/search"
                pathC="/favorites"
                pathD="/signin"
                />
                :
                <NavBar
                className="navbar-top"
                labelA="Home"
                labelB="Zoek"
                labelC="Favorieten"
                labelD="Login"
                pathA="/"
                pathB="/search"
                pathC="/favorites"
                pathD="/signin"
                />
            }
            <div className="outer-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route element={<PrivateRoute isAuth={isAuth}/>}>
                        {/*<Route path="/profile" exact element={<Profile/>}/>*/}
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/favorites/" element={<Favorites/>}/>
                        <Route path="/menu" element={<Menu/>}/>
                        <Route path="/filter/:filter" element={<Filter/>}/>
                        <Route path="/listview" element={<ListView/>}/>
                        <Route path="/cocktail/:cocktail" element={<Cocktail/>}/>
                    </Route>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </div>
            {viewport < 567 ?
                <NavBar
                    className="navbar-bottom"
                    labelA="signpost"
                    labelB="local_bar"
                    labelC="liquor"
                    labelD="eda"
                    pathA="/filter/categorie"
                    pathB="/filter/glas"
                    pathC="/filter/ingredient"
                    pathD="/filter/alcohol"
                />
                :
                <NavBar
                    className="navbar-bottom"
                    labelA="Categorie"
                    labelB="Type glas"
                    labelC="Ingredient"
                    labelD="Alcohol"
                    pathA="/filter/categorie"
                    pathB="/filter/glas"
                    pathC="/filter/ingredient"
                    pathD="/filter/alcohol"
                />
            }
        </div>
    );
}

export default App;
