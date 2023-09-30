import './App.css';
import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import "./components/home/Home" 

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;