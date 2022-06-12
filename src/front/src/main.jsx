import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import Home from './pages/Home/Index'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Indexes from './pages/Indexes/Index';
import Contact from './pages/Contact/Index';

import ReactGA from 'react-ga'
import BlogPage from './pages/Blog/Index';
import VerArtigo from './pages/VerArtigo/Index';
const TRACKING_ID = "G-8BBVJ2Z0RF"
ReactGA.initialize(TRACKING_ID);


function RouterDom(){

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ativos" element={<Indexes/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/blog/:idArtigo" element={<VerArtigo/>} />
        <Route path="/contato" element={<Contact/>} />
        <Route path="/sobre/:ticker" element={<About/>} />
        </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <RouterDom/>
  </React.StrictMode>,
  document.getElementById('root')
)
