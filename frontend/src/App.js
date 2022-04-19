import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//screens
import Home from './screens/Admin/Home';
import Bonus from './screens/Admin/Bonus';
import AddRoles from './screens/Admin/AddRoles';
import AddPromotion from './screens/Admin/AddPromotion';
import AddDepartment from './screens/Admin/department/AddDepartment';
import Viewtask from './screens/Admin/task/Viewtask';
import ViewDepartment from './screens/Admin/department/ViewDepartment';
import AllDepartment from './screens/Admin/department/AllDepartment';
import AllEmployee from './screens/Admin/employee/AllEmployee';
import Alltask from './screens/Admin/task/Alltask';
import AddNewTask from './screens/Admin/task/AddNewTask';
import ViewEmployee from './screens/Admin/employee/ViewEmployee';
import AddNewEmployee from './screens/Admin/employee/AddNewEmployee';
import Attendance from './screens/Admin/Attendance';
import Deduction from './screens/Admin/Deduction';
import EmployeeMore from './screens/Admin/employee/EmployeeMore';
import EmployeeEdit from './screens/Admin/employee/EmployeeEdit';

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
        <Route exact path='/department/add' element={<AddDepartment />} />

        {/* Task*/}
        <Route exact path='/task' element={<Alltask />} />
        <Route exact path='/viewtask/:id' element={<Viewtask />} />
        <Route exact path='/task/add' element={<AddNewTask/>} />

        {/* Employee*/}
        <Route exact path='/employee' element={<AllEmployee />} />
        <Route exact path='/viewemployee/:id' element={<ViewEmployee />} />
        <Route exact path='/employee/add' element={<AddNewEmployee/>} />
        <Route exact path='/viewemployee/:id/moreinfo' element={<EmployeeMore/>} />
        <Route exact path='/employee/:id/edit' element={<EmployeeEdit/>} />

        

        {/* Role */}
        <Route exact path='/addroles' element={<AddRoles />} />

        <Route exact path='/attendance' element={<Attendance />} />
        <Route exact path='/bonus' element={<Bonus />} /> 
        <Route exact path='/deduction' element={<Deduction />} /> 
        <Route exact path='/promotion' element={<AddPromotion />} /> 

      </Routes>
    </Router>
  )
}

export default App;
