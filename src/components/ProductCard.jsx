import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (

        <div className="card">

            <img
                src={product.thumbnail}
                alt={product.title}
            />

            <h3>{product.title}</h3>

            <p>₹{product.price}</p>

            <Link
                className="btn"
                to={`/product/${product.id}`}
            >

                View Product

            </Link>

        </div>

    );

}

export default ProductCard;