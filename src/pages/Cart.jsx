import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="container">
                <div className="empty-cart">

                    <h1>🛒 Your Cart is Empty</h1>

                    <p>Add some amazing products!</p>

                    <Link to="/shop">
                        <button className="btn">
                            Continue Shopping
                        </button>
                    </Link>

                </div>
            </div>
        );
    }

    return (
        <div className="container">

            <h1 className="cart-title">
                Shopping Cart ({cart.length})
            </h1>

            <div className="cart-layout">

                <div className="cart-items">

                    {cart.map((product) => (

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
                                    <strong>Brand:</strong> {product.brand}
                                </p>

                                <p>
                                    <strong>Category:</strong> {product.category}
                                </p>

                                <p>
                                    ⭐ {product.rating}
                                </p>

                            </div>

                            <div className="cart-price">

                                <h2>${product.price}</h2>

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        removeFromCart(product.id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                <div className="summary-card">

                    <h2>Order Summary</h2>

                    <hr />

                    <p>
                        Items
                        <span>{cart.length}</span>
                    </p>

                    <p>
                        Shipping
                        <span>Free</span>
                    </p>

                    <p className="total">
                        Total
                        <span>${total.toFixed(2)}</span>
                    </p>

                    <button className="btn">
                        Checkout
                    </button>

                    <button
                        className="clear-btn"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Cart;