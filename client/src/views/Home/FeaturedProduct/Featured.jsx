import styles from "./featured.module.scss";
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import ProductCard from "../../../components/product/ProductCard";

const Featured = () => {
    const {
        productState: { products, productsLoading },
        getProducts,
    } = useContext(ProductContext);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (
        <div className={styles.featured}>
            <div className={styles.container}>
                <h2 className={styles.title}>Featured Product</h2>
                <div className="">
                    {products.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Featured;
