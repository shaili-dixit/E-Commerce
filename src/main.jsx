import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import CartProvider from "./tempcontext/CartContext";
import AuthProvider from "./tempcontext/AuthContext";

createRoot(document.getElementById("root")).render(

    <StrictMode>

        <BrowserRouter>

            <AuthProvider>

                <CartProvider>

                    <App />

                </CartProvider>

            </AuthProvider>

        </BrowserRouter>

    </StrictMode>

);