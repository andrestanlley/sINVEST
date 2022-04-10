import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import Home from './pages/Home/Index'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre/:ticker" element={<About/>} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
