import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function FormOne() {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [fullname, setFullname] = useState("");
    const formOneDispatch = useDispatch();
    const navigate = useNavigate();
    const handleDisparchAndRoute = (e) => {
        e.preventDefault();
        formOneDispatch({
            type: "FORM_ONE_DATA",
            payload: { fname, mname, lname, fullname },
        });
        navigate("/formtwo");
    };
    return (
        <div>
            <Form style={{backgroundColor:"gray"}}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFname(e.target.value)}
                />
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    onChange={(e) => setMname(e.target.value)}
                />
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLname(e.target.value)}
                />
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setFullname(e.target.value)}
                />

                <Button variant="primary" onClick={handleDisparchAndRoute}>
                    Next
                </Button>
            </Form>
        </div>
    )
}
export default FormOne;