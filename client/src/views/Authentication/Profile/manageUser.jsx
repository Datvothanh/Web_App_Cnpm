import React, { useState , useEffect} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./profile.module.scss";
import  {UsersContext}  from "../../../contexts/UsersContext";
import { useContext } from "react";
import { FormControl } from "react-bootstrap";
import {CartContext} from "../../../contexts/CartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "@mui/material";
import Table from 'react-bootstrap/Table';
const Admin = () => {

    const {
        usersState: {
            users,
            usersLoading,
        },
        getUsers,} = useContext(UsersContext);

    useEffect(() => {
            getUsers();
    }, [ ]);

    let i = 0 ;
    return (
       <div className={styles.container}>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {users.map((user => (
        <>
            <tr>
                <td>{++i}</td>
                <td>{user.name}</td>
            </tr>
        </>  
        )))}
       </tbody>
    </Table>
                      
    </div>
    );
};

export default Admin;
