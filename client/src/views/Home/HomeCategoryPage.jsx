import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";
import { ProductByCategoryContext } from "../../contexts/ProductByCategoryContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./homePage.module.scss";
import blocklist from './FeaturedProduct/featured.module.scss';
import ProductCard from "../../components/product/ProductCard";

const HomeCategoryPage = () => {
    const { id_category } = useParams();
    //Contexts
    const {
        productByCategoryState: {
            productsByCategory,
            productsByCategoryLoading,
        },
        getProductsByCategory,
    } = useContext(ProductByCategoryContext);
    //Start: Get all products

    useEffect(() => {
        getProductsByCategory(id_category);
    }, [getProductsByCategory, id_category]);

    let body = null;

    if (productsByCategoryLoading) {
        body = (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (productsByCategory.length === 0) {
        body = (
            <>
                <div>Nodata.</div>
            </>
        );
    } else {
        body = (
            <div className={styles.homePage}>
                <div className={styles.container}>
                    <div className={blocklist.blocklist}>
                        {productsByCategory.map((product) => (
                            <ProductCard product={product} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return <>{body}</>;
};

export default HomeCategoryPage;
