import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import Policies from './pages/Policies';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <AppNavbar />
      <div className="container mt-4 main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

