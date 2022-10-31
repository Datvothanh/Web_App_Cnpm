import React, { useState , useEffect} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./profile.module.scss";
import  {AuthContext}  from "../../../contexts/AuthContext";
import { useContext } from "react";
import { FormControl } from "react-bootstrap";
import {ProductContext} from "../../../contexts/ProductContext";
import {CartContext} from "../../../contexts/CartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "@mui/material";
import Table from 'react-bootstrap/Table';

const Admin = () => {
    const {
        productState: {
            products,
            productsLoading,
        },
        getProductsAll,} = useContext(ProductContext);

    useEffect(() => {
            getProductsAll();
    }, [ ]);
    let i = 0 ;
    return (
       <div className={styles.container}>
        <Button variant="outline-primary">Thêm sản phẩm</Button>{' '}
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ProductName</th>
          <th>ProductPrice</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {products.map((product => (
        <>
            <tr>
                <td>{++i}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        </>  
        )))}
       </tbody>
    </Table>
                      
    </div>
    );
};

export default Admin;
