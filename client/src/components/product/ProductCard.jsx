import styles from "./productCard.module.scss";
import { numberWithCommas } from '../../utils';

const ProductCard = ({ product: { img, name, price, tinyDes, fullDes, discount } }) => (

        <div className={styles.productCard}>
            <div className={styles.wrap}>
                <div className={styles.image}>
                    <img src={img} className={styles.img}></img>
                </div>
                <p className={styles.title}>{name}</p>
                <div>{tinyDes}</div>
                <div>{fullDes}</div>
                <div className={styles.price}>{numberWithCommas(price)}
                    <small className="ml-3">-{discount}%</small>
                </div>
                
            </div>
            
        </div>
   
    
);

export default ProductCard;
