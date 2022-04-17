import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//screens
import Home from './screens/Admin/Home';
import Bonus from './screens/Admin/Bonus';
import AddEmployeeToDepartment from './screens/Admin/employee/AddEmployeeToDepartment';
import AddRoles from './screens/Admin/AddRoles';
import Viewtask from './screens/Admin/task/Viewtask';
import ViewDepartment from './screens/Admin/department/ViewDepartment';
import AllDepartment from './screens/Admin/department/AllDepartment';
import AllEmployee from './screens/Admin/employee/AllEmployee';
import Alltask from './screens/Admin/task/Alltask';
import ViewEmployee from './screens/Admin/employee/ViewEmployee';

import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* Home = dashboard */}
        <Route exact path='/home' element={<Home />} /> 

        {/* Department*/}
        <Route exact path='/department' element={<AllDepartment />} />
        <Route exact path='/viewdepartment/:id' element={<ViewDepartment />} />

        {/* Task*/}
        <Route exact path='/task' element={<Alltask />} />
        <Route exact path='/viewtask/:id' element={<Viewtask />} />

        {/* Employee*/}
        <Route exact path='/employee' element={<AllEmployee />} />
        <Route exact path='/viewemployee/:id' element={<ViewEmployee />} />
        

        {/* Role */}
        <Route exact path='/addroles' element={<AddRoles />} />

        {/* Maybe don't have to use  */}
        <Route exact path='/addemployeedepartment' element={<AddEmployeeToDepartment />} />
        {/* Maybe don't have to use  */}

        <Route exact path='/attendance' element={<Home />} />
        <Route exact path='/bonus' element={<Bonus />} /> 
      </Routes>
    </Router>
  )
}

export default App;
