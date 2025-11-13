import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Policies from './pages/Policies';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app-wrapper">
      <AppNavbar />
      <main className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

