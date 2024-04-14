import './App.css';
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Toaster from 'react-hot-toast';
import Navbar from './components/Navbar';
import  HeroSection  from './components/HeroSection';
import  About  from './components/About';
import  Footer  from './components/Footer';
import  Contact  from './components/Contact';
import  Services  from './components/Services';


const App = () => {
 

  return (
  <Router>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </Router>
  );
  
};

export default App
