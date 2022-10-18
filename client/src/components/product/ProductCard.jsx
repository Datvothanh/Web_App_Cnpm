import styles from "./productCard.module.scss";
const ProductCard = ({ product: { img, name, price, tinyDes, fullDes } }) => (

        <div className={styles.productCard}>
            <div className={styles.wrap}>
                <div className={styles.image}>
                    <img src={img} className={styles.img}></img>
                </div>
                <p className={styles.title}>{name}</p>
                <div>{tinyDes}</div>
                <div>{fullDes}</div>
                <div className={styles.price}>{price}</div>
            </div>
            
        </div>
   
    
);

export default ProductCard;
