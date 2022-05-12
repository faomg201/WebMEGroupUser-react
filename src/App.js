
import React, { Component } from 'react';
import './App.css';
// import './components/AddStyle.css'
import Home from './components/Home'
//หน้าแอปส่วนหลักในการทำการ Route และrender หน้า
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Works from './components/Works';
import  Serve  from './components/Serve';
import Abouts from './components/Abouts';
import Contact from './components/Contact';

import { motion } from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import images from './assets/images';
import Workbyid from './components/Workbyid';
import { Trypage } from './components/Trypage';
class App extends Component {
  render() {
    // const carousel = useRef();

    // useEffect(() => {
    //     console.log(carousel);
    // }, []);
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/abouts' element={<Abouts/>}/>
          <Route path='/serve' element={<Serve/>}/>
          <Route path='/goals' element={<Works/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/goals/:id' element={<Workbyid/>}/>
          <Route path='/Trypage' element={<Trypage/>}/>
        </Routes>
      </Router>
      // <div className='App'>
      //   <motion.div className='carousel'>
      //       <motion.dev drag="x" dragConstraints={{right : 0}} className='inner-carousel'>
      //         {images.map(image => {
      //           return(
      //             <motion.div className='item'>
      //               <img src={image} alt=""/>
      //             </motion.div>
      //           );
      //         })}
      //       </motion.dev>
      //   </motion.div>
      // </div>
    )
  }
}
export default App