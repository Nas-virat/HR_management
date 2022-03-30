import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './screens/Admin/Home';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/*' element={<Home />} />
        <Route path='/login' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
