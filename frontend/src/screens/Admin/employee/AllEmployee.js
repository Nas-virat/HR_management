import React from 'react';

import './AllEmployee.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import EmployeeRow from '../../../components/EmployeeRow';

import axios from 'axios';

const data = {
  Id: "E000312",
  Name: "Meaw sean",
  Position: "HR Admin",
  Department: "Human Resource"
}


const Header = () => {
    return(
     <>
       <div className = "allemployee-header-content">
         <div className="employee-ID">ID</div>
         <div className="employee-Name">Name</div>
         <div className="employee-Position">Position</div>
         <div className="employee-Department">Department</div>
       </div>
       <hr className="solid"></hr>
     </>
 
    )
}



const AllEmployee = () => {

  const [add, setAdd] = useState(false);
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  
  useEffect( async () => {
    const res = await axios.get('http://localhost:8080/employee')
    .catch(err => {
      console.log(err);
    });
    console.log("RES.DATA = " + res.data);
    setInfo(res.data);
    },[]);

  return (
      <div>
          <Navbar/>
          <Sidebar/>
          <div className='allemployee-form-container'>
            <h5>All Employee</h5>
            <div className='allemployee-form'>
              <Header/>
              <EmployeeRow info={data} />
              <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
              {add && navigate('/employee/add')}
            </div>
          </div>
      </div>
      )
  }

export default AllEmployee