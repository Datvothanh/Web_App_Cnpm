import React, { useState , useEffect} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./profile.module.scss";

import AlertMessage from "../../../components/layout/AlertMessage";
import axios from "axios"
const Admin = () => {

   //Context



  //Local state
  const [id, setId] = useState("");
  



  const ChangeOnClick = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("", id);
    

    setId("");
    axios
        .post("http://localhost:5000/api/product/delete" , formData)
        .catch((err) => {
          console.log(err);
        });

  }


  return (
    <>
      <Form className="my-4" onSubmit={ChangeOnClick} encType='multipart/form-data'>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>
        
      
       

        
        <Button variant="success" type="submit">
          Xóa sản phẩm
        </Button>
      </Form>
    </>
  );
};

export default Admin;
