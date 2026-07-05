import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {

    const { cart, clearCart } = useContext(CartContext);

    const navigate = useNavigate();

    const total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    function handleOrder() {

        if (cart.length === 0) return;

        alert("🎉 Order Placed Successfully!");

        clearCart();

        navigate("/shop");

    }

    return (

        <div className="container">

            <h1 className="cart-title">

                Checkout

            </h1>

            <div className="cart-layout">

                {/* LEFT */}

                <div className="cart-items">

                    {cart.length === 0 ? (

                        <div className="empty-cart">

                            <h2>Your Cart is Empty 🛒</h2>

                            <p>

                                Please add products before checkout.

                            </p>

                        </div>

                    ) : (

                        cart.map((product) => (

                            <div
                                className="cart-card"
                                key={product.id}
                            >

                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                />

                                <div className="cart-info">

                                    <h3>{product.title}</h3>

                                    <p>

                                        <strong>Brand:</strong>

                                        {" "}

                                        {product.brand}

                                    </p>

                                    <p>

                                        <strong>Category:</strong>

                                        {" "}

                                        {product.category}

                                    </p>

                                    <p>

                                        ⭐ {product.rating}

                                    </p>

                                </div>

                                <div className="cart-price">

                                    <h2>

                                        ₹{product.price}

                                    </h2>

                                </div>

                            </div>

                        ))

                    )}

                </div>

                {/* RIGHT */}

                <div className="summary-card">

                    <h2>

                        Order Summary

                    </h2>

                    <hr />

                    <p>

                        Items

                        <span>

                            {cart.length}

                        </span>

                    </p>

                    <p>

                        Shipping

                        <span>

                            Free

                        </span>

                    </p>

                    <p className="total">

                        Total

                        <span>

                            ₹{total.toFixed(2)}

                        </span>

                    </p>

                    <button
                        className="btn"
                        disabled={cart.length === 0}
                        onClick={handleOrder}
                    >

                        Place Order

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Checkout;