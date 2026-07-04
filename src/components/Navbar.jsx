import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

    const { cart } = useContext(CartContext);

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#2563eb",
                padding: "18px 40px",
                color: "white",
                position: "sticky",
                top: 0,
                zIndex: 1000
            }}
        >

            <h2>E-Commerce</h2>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px"
                }}
            >

                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: "white",
                        textDecoration: "none",
                        fontWeight: isActive ? "bold" : "normal"
                    })}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/shop"
                    style={({ isActive }) => ({
                        color: "white",
                        textDecoration: "none",
                        fontWeight: isActive ? "bold" : "normal"
                    })}
                >
                    Shop
                </NavLink>

                <NavLink
                    to="/login"
                    style={({ isActive }) => ({
                        color: "white",
                        textDecoration: "none",
                        fontWeight: isActive ? "bold" : "normal"
                    })}
                >
                    Login
                </NavLink>

                <NavLink
                    to="/cart"
                    className="cart-link"
                    style={({ isActive }) => ({
                        color: "white",
                        textDecoration: "none",
                        fontWeight: isActive ? "bold" : "normal"
                    })}
                >
                    🛒 Cart

                    <span className="cart-badge">
                        {cart.length}
                    </span>

                </NavLink>

            </div>

        </nav>

    );

}

export default Navbar;