import styles from "./productDetail.module.scss";
import { useContext, useEffect, useState } from "react";
import { ProductDetailContext } from "../../contexts/ProductDetailContext";
import { Form, useParams } from "react-router-dom";
import clsx from "clsx";
import Spinner from "react-bootstrap/esm/Spinner";

import Head from "./Head";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
const ProductDetail = () => {
    let { idProduct } = useParams();

    //Contexts
    const {
        productDetailState: { productDetail, productDetailLoading },
        getProductDetail,
    } = useContext(ProductDetailContext);

    useEffect(() => {
        getProductDetail(idProduct);
    }, [idProduct]);

    let body = null;

    if (productDetailLoading) {
        body = (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (productDetail.length === 0) {
        body = (
            <>
                <div>Nodata.</div>
            </>
        );
    } else {
        body = productDetail.map((product) => (
            <div className={styles.productDetail}>
                <div className={styles.head}>
                    <div className={styles.productName}>{product.name}</div>
                </div>
                <div className={styles.boxMain}>
                    <div className={clsx(styles.left, "w-3/5")}>
                        <LeftBox />
                    </div>
                    <div className={clsx(styles.right, "w-2/5")}>
                        <RightBox name={product.name} price={product.price} discount={product.discount} />
                    </div>
                </div>
            </div>
        ));
    }
    return <>{body}</>;
};
export default ProductDetail;
