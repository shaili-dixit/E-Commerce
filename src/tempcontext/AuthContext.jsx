import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(() => {

        return JSON.parse(localStorage.getItem("login")) || false;

    });

    useEffect(() => {

        localStorage.setItem(
            "login",
            JSON.stringify(isLoggedIn)
        );

    }, [isLoggedIn]);

    function login() {

        setIsLoggedIn(true);

    }

    function logout() {

        setIsLoggedIn(false);

    }

    return (

        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;