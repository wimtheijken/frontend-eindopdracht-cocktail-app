import React, {useContext, useEffect, useState} from 'react';
import './SignUp.css';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function SignUp(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    const navigate = useNavigate();
    async function handleTest() {
        toggleLoading(true)
        toggleError(false)
        setRole(['user'])
        try {
            const res = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/all')
            console.log(res.data)
        } catch (e) {
            toggleError(true)
            console.error(e);
        }
        toggleLoading(false)
    }

    useEffect(() => {
        handleTest()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        toggleLoading(true)
        toggleError(false)
        try {
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email,
                password,
                username,
                role,
            });
            console.log(res)
            navigate('/signin')
        } catch (e) {
            toggleError(true)
            setErrorMessage(e.response.data.message)
            console.error("Registratie mislukt.", e)
            console.log(e.response.data.message)
        }
        toggleLoading(false)
    }

    return (
        <div className="signup-container">
            <h1>Registreren</h1>
            <h3 className="signin-message">Heeft u al een account kunt u hier <Link to={"/signin"}><strong>inloggen</strong>.</Link></h3>
            <form className="signup-form" onSubmit={handleSubmit}>
                <Input id="username"
                       name="name"
                       className="input-field"
                       type="text"
                       value={username}
                       placeholder="Uw naam"
                       onChange={(e) => setUsername(e.target.value)}
                />
                <Input id="email"
                       name="email"
                       className="input-field"
                       type="email"
                       value={email}
                       placeholder="Uw emailadres"
                       onChange={(e) => setEmail(e.target.value)}
                />
                <Input id="password"
                       name="password"
                       className="input-field"
                       type="password"
                       value={password}
                       placeholder="Wachtwoord"
                       onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="button-search" type="submit">Registreren</Button>
            </form>
            {loading && <p>Loading...</p>}
            {error && errorMessage === null && <p>Oops... Er is iets mis gegaan.</p>}
            {error && errorMessage === 'This username is already in use' && <p>Deze gebruikersnaam is al in gebruik.</p>}
            {error && errorMessage === 'This email is already in use' && <p>Deze email is al in gebruik.</p>}
        </div>
    );
}

export default SignUp;
