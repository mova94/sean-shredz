import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Programs from './components/pages/Programs';
import RedirectPage from './components/RedirectPage';
import Footer from './components/Footer';


function App() {
  return (
    <> 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/programs' element={<Programs/>} />
          <Route path='/external-link' element={<RedirectPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
 