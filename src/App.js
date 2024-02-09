import React from 'react';
import Navbar from './components/Navbar';
import Newscontent from './components/Newscontent';
import { useState } from 'react';
import Footer from './components/Footer';
import './App.css'
const App=()=>{
  const [category,setcategory]=useState([]);
  return (
    <>
    <Navbar setcategory={setcategory}/>
    <Newscontent category={category}/>
    <Footer/>
    </>
  );
}
export default App;