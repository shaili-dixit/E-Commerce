import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import { CartContext } from "../tempcontext/CartContext";
import Loader from "../components/Loader";

function Product() {

    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchProduct() {

            try {

                const data = await getProduct(id);

                setProduct(data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        }

        fetchProduct();

    }, [id]);

    if (loading) {

        return <Loader />;

    }

    if (!product) {

        return <h2>Product not found</h2>;

    }

    return (

        <div className="page">

            <div className="container">

                <div className="product-details">

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <div className="product-info">

                        <h1>{product.title}</h1>

                        <h2>₹{product.price}</h2>

                        <p>
                            <strong>Brand:</strong> {product.brand}
                        </p>

                        <p>
                            <strong>Category:</strong> {product.category}
                        </p>

                        <p>
                            <strong>Rating:</strong> ⭐ {product.rating}
                        </p>

                        <p>
                            <strong>Stock:</strong> {product.stock}
                        </p>

                        <p>{product.description}</p>

                        <button
    className="btn"
    onClick={() => addToCart(product)}
>
    Add To Cart
</button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Product;