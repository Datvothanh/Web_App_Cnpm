import { useContext, useEffect  } from 'react';
import Spinner from "react-bootstrap/esm/Spinner";
import { ProductContext } from "../../contexts/ProductContext";
import styles from "./homePage.module.scss";
import Featured from "./FeaturedProduct";
import BigBanner from './BigBanner';
import { useParams } from 'react-router-dom';

const HomePage = (props) => {

    
    let {keyword} = useParams();
    //Contexts
    const {productState: {products , productsLoading}, getProducts} = useContext(ProductContext)

    //useEffect(() => {getProducts(keyword)}, [keyword]);
    
    


    useEffect(() => {
        getProducts();
    }, []);

    let body = null;

    if (productsLoading) {
        body = (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (products.length === 0) {
        body = (
            <>
                <div>Nodata.</div>
            </>
        );
    } else {

        body = (
            <div className={styles.homePage}>
                <div className={styles.container}>
                    <BigBanner/>
                    <Featured />
                </div>
            </div>
        );
    }
    return <>{body}</>;
};

export default HomePage;
