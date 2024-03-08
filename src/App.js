import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<HomePage/>} />

        </Routes>
        
        <Footer/>

      </div>
    </Router>
    
  );
}

export default App;

