import React from 'react';
import Navbar from './components/Navbar';
import Newscontent from './components/Newscontent';
import { useState } from 'react';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import './App.css'
const App=()=>{
  const [category,setcategory]=useState([]);
  return (
    <>
    <Routes>
      <Route path='/NEWSGLANCE/' element={
        <>
        <Navbar setcategory={setcategory}/>
        <Newscontent category={category}/>
        <Footer/>
        </>
      } />
    </Routes>
    </>
  );
}
export default App;
