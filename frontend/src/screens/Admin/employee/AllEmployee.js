import React from 'react';

import './AllEmployee.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import EmployeeRow from '../../../components/EmployeeRow';

import axios from 'axios';




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

  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8080/employee')
      .catch(err => {
      console.log(err);
      });
      console.log("All Employee",res.data);
      setInfo(res.data);
      console.log("info",info);
    }
    fetchData();
  },[]);

  return (
      <div>
          <Navbar/>
          <Sidebar/>
          <div className='allemployee-form-container'>
            <div className='allemployee-title'>
              <h5>All Employee </h5>
              <Button variant="success" onClick ={() => navigate('/employee/add')}>Add</Button>{' '}
            </div>
            <div className='allemployee-form'>
              <Header/>
              {
                info && info.map( (info, index) => {
                  return(
                    <EmployeeRow info={info} key = {index} />
                  )
                })
              }
            </div>
          </div>
      </div>
      )
  }

export default AllEmployee