import React from 'react';

import './AllEmployee.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import EmployeeRow from '../../../components/EmployeeRow';
import Search from '../../../components/Search';

import axios from 'axios';
import authHeader from "../../../auth-header";

import configData from "../../../config/config.json";



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
      const res = await axios.get(configData.SERVER_URL + '/employee', { headers: authHeader() })
      .catch(err => {
      console.log(err);
      });
      try{
      console.log("All Employee",res.data);
      setInfo(res.data);
      }catch(err){
      console.log(err);
      navigate('/login');
      }
    }
    if(localStorage.getItem('token')){
    fetchData();
    }
    else{
      navigate('/login');
    }
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
            <Search placeholder="Search Employee"
                options= {info.map(info => 
                            ({
                            label:info.EmployeeID + ' ' + info.fname + ' '+ info.lname,
                            value: info.EmployeeID
                            }))} 
                link='/viewemployee/'
              />

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