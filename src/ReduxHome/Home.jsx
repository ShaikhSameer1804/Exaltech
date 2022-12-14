import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
const Home = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const getAllProducts = async () => {
        const resp = await axios.get(`https://fakestoreapi.com/products`)
        console.log(resp.data);
        setProducts(resp.data);
        dispatch({ type: "ALL_PRODUCTS", data: resp.data });
    };
    useEffect(() => {
        getAllProducts()
    }, []);
    return (
        <div>
            <h1>Redux Home Component</h1>
        </div>
    )
};

export default Home;

