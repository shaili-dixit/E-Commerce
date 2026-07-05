import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../tempcontext/AuthContext";

function Login() {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    function handleLogin() {

        login();

        navigate("/checkout");

    }

    return (

        <div className="container">

            <div className="empty-cart">

                <h1>Guest Login</h1>

                <p>

                    Continue as a Guest to access checkout.

                </p>

                <button
                    className="btn"
                    onClick={handleLogin}
                >

                    Login as Guest

                </button>

            </div>

        </div>

    );

}

export default Login;