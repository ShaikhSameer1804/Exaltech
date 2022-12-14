import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Courses = () => {
    const selector = useSelector((state) => state.CourseReducer);
    console.log(selector);
    return (
        <div>
            {/* {selector.map((item, index) => {
                return (
                    <Card style={{ width: "18rem", display: "inline-block" }}>
                        <Card.Img src={item.cardImage} width="16rem" height="300rem" />
                        <Card.Title>{item.cardTitle}</Card.Title>
                    <Card.Text>{item.cardDesc}</Card.Text>
                    </Card>
                )
            })} */}
        </div>
    );
};

export default Courses;