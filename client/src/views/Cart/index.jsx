import { useContext, useState, useEffect } from "react";
import { Form, useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { CartContext } from "../../contexts/CartContext";
import Spinner from "react-bootstrap/esm/Spinner";
import styles from "./homePage.module.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductContext } from "../../contexts/ProductContext";

const  Cart = () => {
    const {
        authState: {
            user: { _id },
        },
    } = useContext(AuthContext);


    const {
        productState: {
            products,
            productsLoading,
        },
        getProductsAll,} = useContext(ProductContext);

    const {
        cartState: {
            cart,
            cartLoading,
        },
        getCart,
    } = useContext(CartContext);
    //Start: Get all products

    const productCart = [];

    useEffect(() => {
        getProductsAll();
    }, [ ]);


    useEffect(() => {
        getCart(_id);
    }, [ _id]);

    for (var i=0; i < products.length; i++) {
        for (var j=0; j < cart.length; j++) {
            if(cart[j].id_product == products[i]._id){
                productCart[j] = products[i] ; 
            }
        } 
    } 
    let body = null;

    if (cartLoading) {
        body = (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (cart.length === 0) {
        body = (
            <>
                <div>Nodata.</div>
            </>
        );
    } else {
        body = (
            <div className={styles.homePage}>
                <div className={styles.container}>
                      {productCart.map((product) => (
                        <>
                          <h2>ProductName:{product.name}</h2>
                        </>  
                        ))}
                  </div>
            </div>
        );
    }
    return <>{body}</>;
}

export default Cart;
