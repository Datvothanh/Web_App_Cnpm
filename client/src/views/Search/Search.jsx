import styles from "./search.module.scss";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "../../components/product/ProductCard";
import { useParams } from "react-router-dom";
const Search = () => {
    let { keyword } = useParams();
    const {
        productState: { products, productsLoading },
        getProducts,
    } = useContext(ProductContext);

    useEffect(() => {
        getProducts(keyword);
    }, []);

    return (
        <div className={styles.search}>
            {products.map((product) => (
                <div className="w-full" key={product.title}>
                    <div className="mx-4">
                        <ProductCard product={product} />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Search;
