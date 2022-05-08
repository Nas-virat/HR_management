
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Logo from '../assets/img/employee1.jpg';

import './EmployeeRow.css';

import configData from '../config/config.json';

const EmployeeRow = ({info}) =>{
    let navigate = useNavigate();
    return(
      <div className = "employee-content">
        <div className = "employeerow-image"><img src = {info.Image === null ? Logo :configData.SERVER_URL+`/image/${info.Image}` } alt = "Employee-img"/>{info.EmployeeID}</div>
        <div className = "employeerow-name">{info.fname} {info.lname}</div>
        <div className = "employeerow-role">{info.RoleName}</div>
        <div className = "employeerow-dptname">{info.DprtName}</div>
        <Button variant="success" onClick={() => navigate(`/viewemployee/${info.EmployeeID}`)}>Go</Button>
      </div>
      )
  }

export default EmployeeRow