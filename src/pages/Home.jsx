import { Link } from "react-router-dom";

function Home() {

    return (

        <>

            <section className="hero">

                <div className="hero-content">

                    <h1>

                        Welcome to ShopEase

                    </h1>

                    <p>

                        Discover thousands of quality products at unbeatable prices.

                        Shop smarter with secure payments and fast delivery.

                    </p>

                    <div className="hero-buttons">

                        <Link to="/shop">

                            <button className="btn">

                                Shop Now

                            </button>

                        </Link>

                        <Link to="/cart">

                            <button className="btn">

                                View Cart

                            </button>

                        </Link>

                    </div>

                </div>

            </section>

            <section className="features">

                <h2>Why Choose ShopEase?</h2>

                <div className="feature-grid">

                    <div className="feature-card">

                        🚚

                        <h3>Fast Delivery</h3>

                        <p>

                            Quick shipping to your doorstep.

                        </p>

                    </div>

                    <div className="feature-card">

                        🔒

                        <h3>Secure Payments</h3>

                        <p>

                            Safe and trusted payment gateway.

                        </p>

                    </div>

                    <div className="feature-card">

                        ⭐

                        <h3>Premium Quality</h3>

                        <p>

                            Carefully selected products.

                        </p>

                    </div>

                    <div className="feature-card">

                        💰

                        <h3>Best Prices</h3>

                        <p>

                            Amazing deals every day.

                        </p>

                    </div>

                </div>

            </section>

            <section className="stats">

                <div className="stat">

                    <h2>500+</h2>

                    <p>Products</p>

                </div>

                <div className="stat">

                    <h2>1200+</h2>

                    <p>Customers</p>

                </div>

                <div className="stat">

                    <h2>98%</h2>

                    <p>Happy Customers</p>

                </div>

                <div className="stat">

                    <h2>24/7</h2>

                    <p>Support</p>

                </div>

            </section>

        </>

    );

}

export default Home;