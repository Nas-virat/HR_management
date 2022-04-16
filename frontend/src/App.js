import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//screens
import Home from './screens/Admin/Home';
import Bonus from './screens/Admin/Bonus';


import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* Home = dashboard */}
        <Route exact path='/home' element={<Home />} /> 
        <Route exact path='/department' element={<Home />} />
        <Route exact path='/employee' element={<Home />} />
        <Route exact path='/task' element={<Home />} />
        <Route exact path='/attendance' element={<Home />} />
        <Route exact path='/bonus' element={<Bonus />} />
      </Routes>
    </Router>
  )
}

export default App;
