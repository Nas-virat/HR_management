import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './screens/Admin/Home';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/department' element={<Home />} />
        <Route exact path='/employee' element={<Home />} />
        <Route exact path='/task' element={<Home />} />
        <Route exact path='/attendance' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
