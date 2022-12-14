import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function FormThree() {
  const [locAdd, setLocAdd] = useState("");
  const [perAdd, setPerAdd] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const formThreeDispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    formThreeDispatch({
      type: "FORM_THREE_DATA",
      payload: { locAdd, perAdd, city, state },
    });
    navigate("/summary");
  };
  return (
    <Form style={{backgroundColor:"gray"}}>
      <Form.Label>Local Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Local Address"
        onChange={(e) => setLocAdd(e.target.value)}
      />
      <Form.Label>Permanent Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Permanent Address"
        onChange={(e) => setPerAdd(e.target.value)}
      />
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      />
      <Form.Label>State</Form.Label>
      <Form.Control
        type="text"
        placeholder="State"
        onChange={(e) => setState(e.target.value)}
      />

      <Button variant="primary" type="submit" onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}

export default FormThree;