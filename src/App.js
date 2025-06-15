import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Products from './pages/Products';
import Media    from './pages/Media';
import Contact  from './pages/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '4rem' }}>
        <Routes>
          <Route path="/"         element={<Home     />} />
          <Route path="/about"    element={<About    />} />
          <Route path="/products" element={<Products />} />
          <Route path="/media"    element={<Media    />} />
          <Route path="/contact"  element={<Contact  />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
