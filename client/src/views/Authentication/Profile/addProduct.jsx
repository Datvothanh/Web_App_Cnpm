import React, { useState , useEffect} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./profile.module.scss";
import  {ProductContext}  from "../../../contexts/ProductContext";
import  {CategoryContext}  from "../../../contexts/CategoryContext";
import { useContext } from "react";
import { FormControl } from "react-bootstrap";
import {CartContext} from "../../../contexts/CartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import AlertMessage from "../../../components/layout/AlertMessage";
import axios from "axios"
const Admin = () => {

   //Context

  const {
    categoryState: {
      categories,
      categoriesLoading,
    },getCategories
  } = useContext(CategoryContext);

  //Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tinyDes, setTinyDes] = useState("");
  const [fullDes, setFullDes] = useState("");
  const [id_category, setIdCategory] = useState("");
  const [img, setImg] = useState("");

  const onChangeFile = e => {
    setImg(e.target.files[0]);
  }

  const ChangeOnClick = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("tinyDes", tinyDes);
    formData.append("fullDes", fullDes);
    formData.append("id_category", id_category);
    formData.append("img", img);

    setName("");
    setPrice("");
    setTinyDes("");
    setFullDes("");
    setIdCategory("");

    axios
        .post("http://localhost:5000/api/product" , formData)
        .catch((err) => {
          console.log(err);
        });

  }

  useEffect(() => {
    getCategories();
  }, [ ]);
  




  

  return (
    <>
      <Form className="my-4" onSubmit={ChangeOnClick} encType='multipart/form-data'>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="price"
            name="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="tinyDes"
            name="tinyDes"
            required
            value={tinyDes}
            onChange={(e) => setTinyDes(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="fullDes"
            name="fullDes"
            required
            value={fullDes}
            onChange={(e) => setFullDes(e.target.value)}
          />
        </Form.Group>
        {/* <Form.Group>
          <Form.Control
            type="text"
            placeholder="id_category"
            name="id_category"
            required
            value={id_category}
            onChange={(e) => setIdCategory(e.target.value)}
          />
        </Form.Group> */}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Chọn ảnh sản phẩm</Form.Label>
          <Form.Control type="file"  filename="img" onChange={onChangeFile}/>
        </Form.Group>
        <Form.Select aria-label="Default select example" 
            type="text"
            name="id_category" 
            // value={id_category}
            onChange={(e) => {
              const selectedOption = e.target.value;
              setIdCategory(selectedOption);
            }}>
              {categories.map((category => (
                <option  value={category._id}>{category.name}</option>
              )))}
        </Form.Select>
        {id_category}
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Admin;
