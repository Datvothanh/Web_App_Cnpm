import { useContext, useState, useEffect } from "react";
import { Form, useParams, Link } from "react-router-dom";
import { Container } from "@mui/system";
import { CartContext } from "../../contexts/CartContext";
import Spinner from "react-bootstrap/esm/Spinner";
import styles from "./homePage.module.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductContext } from "../../contexts/ProductContext";
import Button from 'react-bootstrap/Button';
import Success from "./success";
const  Cart = () => {

    const {authState: {authLoading, isAuthenticated , user}} = useContext(AuthContext)
  
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

    useEffect(() => {
        getProductsAll();
    }, [ ]);


    useEffect(() => {
        getCart(_id);
    }, [ _id]);

    const handleClick = (e) => {
        if (isAuthenticated) {
            e.preventDefault();
            const pay = {
                userId: `${user._id}`,
            };
            fetch("http://localhost:5000/api/addCart/pay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(pay),
            }).then(() => {
                console.log("Pay");
            });
            window.location.reload();
        }
    };

    const handleClickUp = (e) => {
            const cart = { userId : `${user._id}`, id_product : `${e}` };
            fetch("http://localhost:5000/api/addCart/Up", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(cart),
            }).then(() => {
              console.log("Up Quantity");
            });
            window.location.reload();
    };

    const handleClickDown = (e) => {
            const cart = { userId : `${user._id}`, id_product : `${e}`  };
            fetch("http://localhost:5000/api/addCart/Down ", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(cart),
            }).then(() => {
              console.log("Down Quantity");
            });
            window.location.reload();
    };


    const array = [];
    var Price = 0;

    for (var i=0; i < products.length; i++) {
        for (var j=0; j < cart.length; j++) {
            if(cart[j].id_product == products[i]._id && cart[j].quantity !== 0 && cart[j].pay == 0){
               products[i].tinydes = cart[j].quantity;
               array[j] = products[i];
               Price += products[i].price * cart[j].quantity; 
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
    } else if (Price === 0 ) {
        body = (
            <>
                <div>Nodata.</div>
            </>
        );
    } else {
        body = (
            <div className={styles.homePage}>
                <div className={styles.container}>
                      {array.map((product => (
                        <>
                          <h4>ProductName:{product.name}</h4>
                          <h4>ProductQuantity:{product.tinydes} <button onClick={() => handleClickUp(product._id)}>+</button> <button  onClick={() => handleClickDown(product._id)}>-</button></h4>
                          <h4>ProductPrice:{product.price}</h4>
                          <br/>
                        </>  
                        )))}
                        <>
                        <h4>Tổng số tiền phải trả: {Price}</h4>
                        </>
                        <Button variant="primary" onClick={handleClick}>
                            Xác nhận  
                        </Button>
                </div>
            </div>
        );
    }
    return <>{body}</>;
}

export default Cart;
