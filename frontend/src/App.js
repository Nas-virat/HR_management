
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/login';

//screen
import Employinfo from './screens/Admin/Employinfo';


function App() {

  return (
      <div>
          <Navbar />
          <Sidebar/>
          
      </div>
  );
}

export default App;
