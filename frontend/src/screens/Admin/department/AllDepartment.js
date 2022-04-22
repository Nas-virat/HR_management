
import React, { useEffect, useState } from 'react';

import './AllDepartment.css';

import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';

import axios from 'axios';

const Header = () => {
    return(
     <>
       <div className = "alldepartment-header-content">
         <div className="department-ID">ID</div>
         <div className="department-Name">Name</div>
         <div className="department-Member">Total Member</div>
       </div>
       <hr className="solid"></hr>
     </>
 
    )
 }

const DepartmentRow = ({info}) => {
    let navigate = useNavigate();
    return(
      <div className = "allDepartment-department-content">
        <div>{info.DprtID}</div>
        <div>{info.DprtName}</div>
        <div>{info.TotalMembers}</div>
        <Button variant="success" onClick={() => navigate(`/viewdepartment/${info.DprtID}`)}>Go</Button>
      </div>
      )
  }

const AllDepartment = () => {

  
  const [departmentinfo, setDepartmentInfo] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8080/department')
      .catch(err => {
      console.log(err);
      });
      console.log("All department :",res.data);
      setDepartmentInfo(res.data);
      //console.log("DepartmentInfo",departmentinfo);
    }
    fetchData();
  },[]);

  return (
      <div>
          <Navbar/>
          <Sidebar/>
          <div className='alldepartment-form-container'>
            <div className='allemployee-title'>
                <h5>All Department</h5>
                <Button variant="success" onClick ={() => navigate('/department/add')}>Add</Button>{' '}
            </div>
            <div className="alldepartment-form">
              <Header/>
              {
                departmentinfo && departmentinfo.map( (departmentinfo, index) => {
                  return(
                    <DepartmentRow info={departmentinfo} key = {index} />
                  )
                })
              }
            </div>
          </div>
      </div>
      )
  }


export default AllDepartment