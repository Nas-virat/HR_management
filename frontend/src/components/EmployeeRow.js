
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


const EmployeeRow = ({info}) =>{
    let navigate = useNavigate();
    return(
      <div className = "employee-content">
        <div>{info.EmployeeID}</div>
        <div>{info.fname} {info.lname}</div>
        <div>{info.Email}</div>
        <div>{info.Institution}</div>
        <Button variant="success" onClick={() => navigate(`/viewemployee/${info.EmployeeID}`)}>Go</Button>
      </div>
      )
  }

export default EmployeeRow