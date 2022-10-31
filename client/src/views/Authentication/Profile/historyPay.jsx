import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./profile.module.scss";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";
import { FormControl } from "react-bootstrap";
const Profile = () => {
    
    return (
        <div className={styles.profile}>
            <div className={styles.container}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom01"
                        >
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                Value={name}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                Value={address}
                            ></Form.Control>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default Profile;
