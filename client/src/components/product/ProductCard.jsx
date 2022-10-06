import Card from "react-bootstrap/Card";
import "./productCard.scss";

const ProductCard = ({ product: { img, name, price, tinyDes, fullDes } }) => (
    <div className='productCard'>
        <div>
            <img src={img} className=""></img>
        </div>
        <div>{name}</div>
        <div>{price}</div>
        <div>{tinyDes}</div>
        <div>{fullDes}</div>
    </div>
);

export default ProductCard;
