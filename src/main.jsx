import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './pages/Home/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Indexes from './pages/Indexes/Index';

function RouterDom() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ativos" element={<Indexes />} />
        <Route path="/sobre/:ticker" element={<About />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <RouterDom />
  </React.StrictMode>,
  document.getElementById('root')
);
