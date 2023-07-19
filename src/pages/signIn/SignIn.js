import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import './SignIn.css';

function SignIn(props) {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleLoading(true)
        toggleError(false)
        try {
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username,
                password,
            });
            login(res.data.accessToken, '/profiel');
            console.log(res)
            console.log(res.data.accessToken)
        } catch (e) {
            toggleError(true)
            console.error("Inloggen is mislukt", e)
            console.log(e.response)
        }
        toggleLoading(false)
    }

    return (
        <div className="signup-container">
            <h1>Inloggen</h1>
            <h3 className="signin-message">Heeft u nog geen account kunt u hier <Link to={"/signup"}><strong>registreren</strong>.</Link></h3>
            <form className="signin-form" onSubmit={handleSubmit}>
                <Input id="username"
                       name="name"
                       className="input-field"
                       type="text"
                       value={username}
                       placeholder="Uw naam"
                       onChange={(e) => setUsername(e.target.value)}
                    // autoComplete="off"
                />
                <Input id="password"
                       name="password"
                       className="input-field"
                       type="password"
                       value={password}
                       placeholder="Wachtwoord"
                       onChange={(e) => setPassword(e.target.value)}
                    // autoComplete="off"
                />
                <Button className="button-search" type="submit">Inloggen</Button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Oops... Er is iets mis gegaan. Probeer het opnieuw.</p>}
            {error && <p>Als u nog geen account heeft, dient u zich eerst te registreren.</p>}
        </div>
    );
}

export default SignIn;
