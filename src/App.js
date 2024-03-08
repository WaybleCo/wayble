import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/*<Navbar/>*/}
        <Hero/>
        <Routes>
          <Route path='/'>element={Hero}</Route>

        </Routes>
        
        <Footer/>

      </div>
    </Router>
    
  );
}

export default App;

