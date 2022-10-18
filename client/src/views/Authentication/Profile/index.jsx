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
    const {
        authState: {
            user: { username, name, city, district },
        },
    } = useContext(AuthContext);
    const [validated, setValidated] = useState(false);

    const cityData = [
        { id: 1, name: "An Giang" },
        { id: 2, name: "Bà Rịa - Vũng Tàu" },
        { id: 3, name: "Bắc Giang" },
        { id: 4, name: "Bắc Kạn" },
        { id: 5, name: "Bạc Liêu" },
        { id: 6, name: "Bắc Ninh" },
        { id: 7, name: "Bến Tre" },
        { id: 8, name: "Bình Định" },
        { id: 9, name: "Bình Dương" },
        { id: 10, name: "Bình Phước" },
        { id: 11, name: "Bình Thuận" },
        { id: 12, name: "Cà Mau" },
        { id: 13, name: "Cao Bằng" },
        { id: 14, name: "Đắk Lắk" },
        { id: 15, name: "Đắk Nông" },
        { id: 16, name: "Điện Biên" },
        { id: 17, name: "Đồng Nai" },
        { id: 18, name: "Đồng Tháp" },
        { id: 19, name: "Gia Lai" },
        { id: 20, name: "Hà Giang" },
        { id: 21, name: "Hà Nam" },
        { id: 22, name: "Hà Tĩnh" },
        { id: 23, name: "Hải Dương" },
        { id: 24, name: "Hậu Giang" },
        { id: 25, name: "Hòa Bình" },
        { id: 26, name: "Hưng Yên" },
        { id: 27, name: "Khánh Hòa" },
        { id: 28, name: "Kiên Giang" },
        { id: 29, name: "Kon Tum" },
        { id: 30, name: "Lai Châu" },
        { id: 31, name: "Lâm Đồng" },
        { id: 32, name: "Lạng Sơn" },
        { id: 33, name: "Lào Cai" },
        { id: 34, name: "Long An" },
        { id: 35, name: "Nam Định" },
        { id: 36, name: "Nghệ An" },
        { id: 37, name: "Ninh Bình" },
        { id: 38, name: "Ninh Thuận" },
        { id: 39, name: "Phú Thọ" },
        { id: 40, name: "Quảng Bình" },
        { id: 41, name: "Quảng Nam" },
        { id: 42, name: "Quảng Ngãi" },
        { id: 43, name: "Quảng Ninh" },
        { id: 44, name: "Quảng Trị" },
        { id: 45, name: "Sóc Trăng" },
        { id: 46, name: "Sơn La" },
        { id: 47, name: "Tây Ninh" },
        { id: 48, name: "Thái Bình" },
        { id: 49, name: "Thái Nguyên" },
        { id: 50, name: "Thanh Hóa" },
        { id: 51, name: "Thừa Thiên Huế" },
        { id: 52, name: "Tiền Giang" },
        { id: 53, name: "Trà Vinh" },
        { id: 54, name: "Tuyên Quang" },
        { id: 55, name: "Vĩnh Long" },
        { id: 56, name: "Vĩnh Phúc" },
        { id: 57, name: "Yên Bái" },
        { id: 58, name: "Phú Yên" },
        { id: 59, name: "Cần Thơ" },
        { id: 60, name: "Đà Nẵng" },
        { id: 61, name: "Hải Phòng" },
        { id: 62, name: "Hà Nội" },
        { id: 63, name: "TP HCM" },
    ];
    const [postName, setPostName] = useState(name);
    const [postCity, setPostCity] = useState(city);
    const [postDistrict, setPostDistrict] = useState(district);
    const [postData, setPostData] = useState();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className={styles.profile}>
            <div className={styles.container}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustomUsername"
                        >
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">
                                    @
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    defaultValue={username}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom01"
                        >
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue={name}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={city}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>District</Form.Label>
                            <Form.Control type="text"  defaultValue={district}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid district.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={city}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>District</Form.Label>
                            <Form.Control type="text"  defaultValue={district}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid district.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default Profile;
