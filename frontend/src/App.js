import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//screens
import Home from './screens/Admin/Home';
import Bonus from './screens/Admin/Bonus';
import AddEmployeeToTask from './screens/Admin/task/AddEmployeeToTask';
import AddEmployeeToDepartment from './screens/Admin/employee/AddEmployeeToDepartment';
import AddRoles from './screens/Admin/AddRoles';
import Viewtask from './screens/Admin/task/Viewtask';
import AllDepartment from './screens/Admin/department/AllDepartment';

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

        {/* Task*/}
        <Route exact path='/task' element={<Home />} />


        {/* Employee*/}
        <Route exact path='/employee' element={<Home />} />
        {/* Maybe don't have to use  */}
        <Route exact path='/addemployeetask' element={<AddEmployeeToTask />} />
        <Route exact path='/addemployeedepartment' element={<AddEmployeeToDepartment />} />
        {/* Maybe don't have to use  */}

        <Route exact path='/attendance' element={<Home />} />
        <Route exact path='/bonus' element={<Bonus />} />
        <Route exact path='/addroles' element={<AddRoles />} />
        <Route exact path='/viewtask/:id' element={<Viewtask />} />
      </Routes>
    </Router>
  )
}

export default App;
