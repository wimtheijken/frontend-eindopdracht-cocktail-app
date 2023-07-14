import React, {useContext} from 'react';
import Cocktail from "../cocktail/Cocktail";
import './Profile.css';
import {AuthContext} from "../../context/AuthContext";

function Profile(props) {
    const {user: { username, email, info, id }} = useContext(AuthContext);
    return (
        <div className="profile-container">
            <h1>Profiel pagina</h1>
            <div className="profile-text-container">
                <h2>Naam: {username}</h2>
                <h2>Email: {email}</h2>
                <h2>info: {info}</h2>
                <h2>id: {id}</h2>
            </div>
        </div>
    );
}

export default Profile;