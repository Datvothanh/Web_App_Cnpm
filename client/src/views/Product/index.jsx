import { useContext, useEffect,useState } from "react";
import { ProductDetailContext } from "../../contexts/ProductDetailContext";
import { Form, useParams } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";
import styles from "./productCard.module.scss";
import { AuthContext } from "../../contexts/AuthContext";
const  Detail = () => {
    let {idProduct} = useParams();
    const {authState: {authLoading, isAuthenticated , user}} = useContext(AuthContext)
  
    //Contexts
    const {
        productDetailState: {
            productDetail,
            productDetailLoading,
        },
        getProductDetail,
    } = useContext(ProductDetailContext);
    //Start: Get all products

    useEffect(() => {
        getProductDetail(idProduct);
    }, [ idProduct]);


    const handleClick = (e) => {
        if(isAuthenticated){
            e.preventDefault();
            alert("Đã được thêm vào giỏ hang");
            const cart = { userId : `${user._id}`, id_product : `${idProduct}` , quantity : 1 };
            fetch("http://localhost:5000/api/addCart", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(cart),
            }).then(() => {
              console.log("New cart added");
            });
        }
    };

  
  
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
    } else if(isAuthenticated){
        body = (
        
        productDetail.map((product) => (

        <div  className={styles.productCard}>
            <div className={styles.wrap}>
                <div className={styles.image}>
                    <img src={product.img} className={styles.img}></img>
                </div>
                <p className={styles.title}>{product.name}</p>
                <div>{product.tinyDes}</div>
                <div>{product.fullDes}</div>
                <div className={styles.price}>{product.price}</div>
                <button  onClick={handleClick} >
                    Add to Cart
                </button>
            </div>
        </div>
         ))
        );
    } else {
        body = (
        productDetail.map((product) => (

        <div  className={styles.productCard}>
            <div className={styles.wrap}>
                <div className={styles.image}>
                    <img src={product.img} className={styles.img}></img>
                </div>
                <p className={styles.title}>{product.name}</p>
                <div>{product.tinyDes}</div>
                <div>{product.fullDes}</div>
                <div className={styles.price}>{product.price}</div>
                <h3>Để mua sản phẩm xin hãy đăng nhập !</h3>
            </div>
            <Button variant="outline-primary">Primary</Button>{' '}
        </div>
        
         ))
        );
    }
    return <>{body}</>;
};
export default Detail;
