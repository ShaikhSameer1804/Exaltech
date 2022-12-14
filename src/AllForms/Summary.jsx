import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Summary = () => {
    const selector = useSelector((state) => state);
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(selector.FormOneReducer[0].fname);
        navigate("/");
    }
    return (
        <div>
            <h1><mark>Its Summary</mark></h1> 
            {selector.FormOneReducer.map((item) => {
                return (
                    <div style={{backgrounColor:"red"}}>
                        <p><b>First Name:</b>{item.fname}</p> <b></b>
                        <p><b>Middle Name:</b>{item.mname}</p>
                        <p><b>Last Name:</b>{item.lname}</p>
                        <p><b>Full Name:</b>{item.fullname}</p>
                    </div>
                )
            })} {selector.FormTwoReducer.map((item) => {
                return (
                    <div>
                        <p><b>Height:</b>{item.height}</p>
                        <p><b>Weight:</b>{item.weight}</p>
                        <p><b>Chest:</b>{item.chest}</p>
                        <p><b>Age:</b>{item.age}</p>
                    </div>
                );
            })}
            {selector.FormThreeReducer.map((item) => {
                return (
                    <div>
                        <p><b>Local Address:</b>{item.locAdd}</p>
                        <p><b>Permanent Address:</b>{item.perAdd}</p>
                        <p><b>City:</b>{item.city}</p>
                        <p><b>State:</b>{item.state}</p>
                    </div>
                );
            })}
           
            <button onClick={handleClick}>Go To First Page</button>
        </div>
    );
};

export default Summary;