import { NavLink } from "react-router-dom";

function Navbar() {

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#2563eb",
                padding: "18px 40px",
                color: "white"
            }}
        >

            <h2>E-Commerce</h2>

            <div
                style={{
                    display: "flex",
                    gap: "25px"
                }}
            >

                <NavLink to="/">Home</NavLink>

                <NavLink to="/shop">Shop</NavLink>

                <NavLink to="/cart">Cart</NavLink>

            </div>

        </nav>

    );

}

export default Navbar;