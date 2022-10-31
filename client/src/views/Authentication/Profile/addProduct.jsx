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
import { Link } from "react-router-dom";
const Admin = () => {

    return (
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Các chức năng của Admin
            </ListGroup.Item>
            <Link to="/ManageProduct"  style={{textDecoration: 'none'}}>
            <ListGroup.Item as="li" >
                Quản lý sản phẩm
            </ListGroup.Item>
            </Link>
            <Link to="/ManageUser" style={{textDecoration: 'none'}}>
            <ListGroup.Item as="li">
                Quản lý người dùng
            </ListGroup.Item>
            </Link>
        </ListGroup>
    );
};

export default Admin;
