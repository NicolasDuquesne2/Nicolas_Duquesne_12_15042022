import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './index.scss'
import UserDashboard from './pages/UserDashboard'
import Home from './pages/Home';
import Header from './componants/Header';


/**
 * @file index.js is the router for this application
 * @author Nicolas Duquesne
 */

/**
 * Root
 * @type {object}
 */
const root = createRoot(document.getElementById('root')) 

root.render(
  <Router >
    <Header />
    <Routes >
      <Route exact path="/" element={ <Home />} />
      <Route path="/user/:id" element={ <UserDashboard />} />
    </Routes>
  </Router>
);

