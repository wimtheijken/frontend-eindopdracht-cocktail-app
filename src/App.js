import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
    return (
        <div className="app-container">
            <NavBar
                className="navbar-top"
                labelA="Home"
                labelB="Zoek"
                labelC="Favorieten"
                labelD="Menu"
                pathA="/"
                pathB="/search"
                pathC="/favorieten"
                pathD="/menu"
            />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/cocktail/:cocktail" element={<Cocktail/>}/>
                <Route path="/listview" element={<ListView/>}/>
                <Route path="/filter/:filter" element={<Filter/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
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
        </div>
    );
}

export default App;
