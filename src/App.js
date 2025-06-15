// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home  from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';

export default function App() {
  return (
    <>
      <Navbar />

      <main style={{ marginTop: '4rem' }}>
        <Routes>
          <Route path="/"      element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
