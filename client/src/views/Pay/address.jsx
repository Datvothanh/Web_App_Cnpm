import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect,useState } from "react";
import { AuthContext } from '../../contexts/AuthContext';
function Address() {
  const {
    authState: {
        user: { city , district},
    },
  } = useContext(AuthContext);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Địa chỉ nhận hàng:</Form.Label>
        <Form.Control type="text" placeholder="Địa chỉ" value={`${city} - ${district}`} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Xác nhận  
      </Button>
    </Form>
  );
}

export default Address;