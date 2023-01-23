import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import {Route ,Routes} from "react-router-dom";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="service" element={<Service/>}/>
       <Route path="contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
