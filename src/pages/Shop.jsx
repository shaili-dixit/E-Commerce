import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Shop() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchProducts() {

            try {

                const data = await getProducts();

                setProducts(data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        }

        fetchProducts();

    }, []);

    if (loading) {

        return <Loader />;

    }

    return (

        <div className="page">

            <div className="container">

                <h1>Shop</h1>

                <div className="grid">

                    {products.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                        />

                    ))}

                </div>

            </div>

        </div>

    );

}

export default Shop;