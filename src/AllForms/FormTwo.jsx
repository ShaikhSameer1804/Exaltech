import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function FormTwo() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [chest, setChest] = useState("");
    const [age, setAge] = useState("");
    const formTwoDispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        formTwoDispatch({
            type: "FORM_TWO_DATA",
            payload: { height, weight, chest, age },
        });
        navigate("/formthree")
    };
  return (
    <Form style={{backgroundColor:"gray"}}>
    <Form.Label>Height: cm</Form.Label>
        <Form.Control
            type="number"
            placeholder="Height"
            onChange={(e) => setHeight(e.target.value)}
        />
    <Form.Label>Weight: kg</Form.Label>
        <Form.Control
            type="number"
            placeholder="Weight"
            onChange={(e) => setWeight(e.target.value)}
        />
    <Form.Label>Chest: cm</Form.Label>
        <Form.Control
            type="number"
            placeholder="Chest"
            onChange={(e) => setChest(e.target.value)}
        />
    <Form.Label>Age</Form.Label>
        <Form.Control
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
        />
    
        <Button variant="primary" type="submit"  onClick={handleClick}>
              Next
        </Button>
       
    </Form>
  );
}

export default FormTwo;