// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // no BrowserRouter here
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './components/Gallery';  // stays in components as you prefer
import ContactPage from './pages/Contact';   // ensure Contact.js default-exports ContactPage or Contact
import MediaPage from './pages/Media';

function App() {
  console.log('App render'); // debug: should appear in console
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/media" element={<MediaPage />} />
        {/* Optionally: <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
