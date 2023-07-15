import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {checkTokenValidity} from "../helper/checkTokenValidity";
import axios from "axios";
import {SearchContext} from "./SearchContext";

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {

    const { toggleError, toggleLoading, handleFavorites, removeFavo } = useContext(SearchContext)

    const navigate = useNavigate();

    // bijhouden van de favorieten
    // const [favoName, setFavoName] = useState('');
    // const [favorites, setFavorites] = useState([]);
    // const [isFavo, toggleIsFavo] = useState(false);

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedFavo = localStorage.getItem('favo');
        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken)
            if (storedFavo) {
                void handleFavorites(storedFavo)
            }
        } else {
            void logout()
        }
    }, [])

    async function login(jwt_token, redirect) {
        const decodedToken = jwt_decode(jwt_token);
        localStorage.setItem('token', jwt_token);
        console.log(decodedToken)
        try {
            const {
                data: {
                    email,
                    username,
                    id,
                    info,
                    roles
                }
            } = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt_token}`
                }
            })
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email,
                    id,
                    username,
                    info,
                    roles
                },
                status: "done"
            })
            console.log('De gebruiker is ingelogd!')
            if (redirect) navigate('/menu');
        } catch (e) {
            console.error(e)
        }
    }

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('favo');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        console.log('De gebruiker is niet ingelogd!')
        // navigate('/')
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        // favoName,
        // setFavoName,
        // favorites,
        // setFavorites,
        // isFavo,
        // toggleIsFavo,
        logout: logout,
        login: login,
        // favoCheck: favoCheck,
        // updateUserInfo: updateUserInfo,
    }

    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? children : <p>loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
