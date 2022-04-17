
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


const EmployeeRow = ({info}) =>{
    let navigate = useNavigate();
    return(
      <div className = "employee-content">
        <div>{info.Id}</div>
        <div>{info.Name}</div>
        <div>{info.Position}</div>
        <div>{info.Department}</div>
        <Button variant="success" onClick={() => navigate(`/viewemployee/${info.Id}`)}>Go</Button>
      </div>
      )
  }

export default EmployeeRow