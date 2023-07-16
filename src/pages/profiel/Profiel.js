import React, {useContext, useEffect} from 'react';
import {SearchContext} from "../../context/SearchContext";
import {AuthContext} from "../../context/AuthContext";
import {Link, useNavigate, useParams} from "react-router-dom";
import './Profiel.css';

function Profiel(props) {
    const { logout, user: { username, email }} = useContext(AuthContext);
    const { favoritesArray, handleCheck, handleSingleCheck, error, loading } = useContext(SearchContext)

    useEffect(()=>{
        handleCheck()
        handleSingleCheck()
    },[])

    return (
        <div className="menu-container">
            <h1>Profiel</h1>
            <div className="menu-text-container">
                <h2>Welkom {username}</h2>
                <h3>Gebruikersnaam: {username}</h3>
                <h3>Email: {email}</h3>
                { favoritesArray.length !== 0 &&  <h3>Favorieten:</h3>}
                <ul className="menu-favorietenlijst">
                    { favoritesArray &&  favoritesArray.map((item) => {
                        return <Link to={"../cocktail/"+item.idDrink} key={item.idDrink}><li key={item.idDrink.toString()}
                                                                          id={item.idDrink}
                                                                          value={item.strDrink}>{item.strDrink}</li></Link>
                    })}
                </ul>
                <Link to={'/'} onClick={logout}><h2 className="menu-uitloggen">Uitloggen</h2></Link>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Oops... Er is iets mis gegaan.</p>}
        </div>
    );
}

export default Profiel;