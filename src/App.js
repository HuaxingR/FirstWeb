import React from "react";
//import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Huaxing from "./components/Huaxing";

import {Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";

function App() { 
  return ( 
  <>
  <Navbar/>
  <Routes> 
      <Route exact path="/" element={<Home/>} />
      <Route exact path='/rooms/' element={<Rooms/>} />
      <Route exact path='/rooms/:slug' element={<SingleRoom/>} />
      <Route component={Error} />
  </Routes>
  </>

  );
}

export default App;
