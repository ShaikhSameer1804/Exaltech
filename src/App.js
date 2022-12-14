import React,{useState} from 'react';
import './App.css';
// import Navigation from './Components/Navigation/Navigation';
// import { Carousell } from './Components/Carousel/Carousell';
// import Landing from './ReduxHome/Landing';
// import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';
// import {FirstReducer} from './Redux/FirstReducer'
// import FormOne from './AllForms/FormOne'
// import FormTwo from './AllForms/FormTwo';
// import FormThree from './AllForms/FormThree';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Summary from './AllForms/Summary';
import Navigation from './New/Navigation/Navigation'
import Dashboard from './New/Dashboard/Dashboard';
import CustomCarousel from './New/Carousel/CustomCarousel';
import Courses from './New/Couorse/Courses';
import Footer from './New/Footer/Footer';


function App() {
  const [show,setShow] = useState(false)
  // const [data, setData] = useState("");
  // const dispatch = useDispatch()
  // const selector = useSelector((state) => state.FirstReducer);
  //   // console.log(data);
  // const handleDispatch = () => {
  //   dispatch({ type: "ADD_USER", payload: data });
  //   setData("")
  // };
  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={() => setShow(!show)}>Dashboard</button>
      {show &&<Dashboard/>}
       {/* <Navigation/> */}
      {/* <Carousell/> */}
      {/* <Landing/> */}
      {/* <h1>Redux Dispatch</h1>
      <input
      type="text" onChange={(e) => setData(e.target.value)} id="input" value={data}/>
      <button onClick={handleDispatch}>Dispatch</button>
      {selector.map((item, index) => {
        return (
          <section key={index}>
          <h1>{item}</h1>
          </section>
          )
        })} */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormOne/>} />
          <Route path="/formtwo" element={<FormTwo/>} />
          <Route path="/formthree" element={<FormThree/>} />
          <Route path="/summary" element={<Summary/>} />
        </Routes>
      </BrowserRouter> */}
      {/* <Dashboard/> */}
      <hr/>
      <Navigation />
      <hr/>
      <CustomCarousel />
      <hr />
      <Courses />
      <hr />
      <Footer/>
    </div>
  );
};

export default App;
