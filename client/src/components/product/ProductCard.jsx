import styles from "./productCard.module.scss";
import { numberWithCommas } from '../../utils';
import { useState, useEffect } from "react";



const ProductCard = ({ product: { img, name, price,ram, rom, tinyDes, fullDes, discount } }) => (
        
        <div className={styles.productCard}>
            <div className={styles.wrap}>
                <div className={styles.image}>
                    <img src={img} className={styles.img}></img>
                </div>
                <p className={styles.title}>{name}</p>
                <div>RAM: {ram}</div>
                <div>ROM: {rom}</div>
                <div className={styles.price}>{numberWithCommas(price)}
                    <small className="ml-3">-{discount}%</small>
                </div>
                
            </div>
            
        </div>
   
    
);

export default ProductCard;
