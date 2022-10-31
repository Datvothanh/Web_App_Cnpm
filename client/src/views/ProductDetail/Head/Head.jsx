import styles from './head.module.scss';
import { useContext, useEffect, useState } from "react";
import { ProductDetailContext } from "../../../contexts/ProductDetailContext";
import { Form, useParams } from "react-router-dom";

const Head = ({ product: { name } }) => {
    
    return (
        <div className={styles.head}>
            <div className={styles.container}>
                <div className={styles.productName}>
                    {name}
                </div>
            </div>
        </div>
    )
}
export default Head;