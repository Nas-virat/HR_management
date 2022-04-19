
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


const EmployeeRow = ({info}) =>{
    let navigate = useNavigate();
    return(
      <div className = "employee-content">
        <div>{info.EmployeeID}</div>
        <div>{info.fname}</div>
        <div>{info.lname}</div>
        <div>{info.Institution}</div>
        <Button variant="success" onClick={() => navigate(`/viewemployee/${info.Id}`)}>Go</Button>
      </div>
      )
  }

export default EmployeeRow