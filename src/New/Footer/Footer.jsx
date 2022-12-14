import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const Footer = () => {
    const selector = useSelector((state) => state.FooterReducer);
    console.log("footer", selector);
    return (
        <div style={{height:"300px", width:"100%", backgroundColor:"gray"}}>
            {/* {selector.map((item, index) => {
                return (
                    <Card style={{ width: "18rem", display: "inline-block" }}>
                        <Card.Img src={item.footerImage} width="16rem" height="300rem" />
                        <Card.Title>{item.footerTitle}</Card.Title>
                    <Card.Text>{item.footerDesc}</Card.Text>
                    </Card>
                )
            })} */}
        </div>
    );
};

export default Footer;