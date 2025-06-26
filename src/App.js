// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './components/Gallery';
import ContactPage from './pages/Contact';
import MediaPage from './pages/Media';

function App() {
  console.log('App render');
  return (
    <div className="app-wrapper">
      <Navbar />

      {/* Everything that changes per‐page lives here */}
      <div className="page-content">
        <Routes>
          <Route path="/"        element={<Home />}      />
          <Route path="/about"   element={<About />}     />
          <Route path="/products"element={<Products />}  />
          <Route path="/gallery" element={<Gallery />}    />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/media"   element={<MediaPage />}   />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>

      {/* Pinned to bottom */}
      <Footer />
    </div>
  );
}

export default App;
