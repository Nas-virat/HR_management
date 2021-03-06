
import React, { useEffect, useState } from 'react';

import './AllDepartment.css';

import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';

import axios from 'axios';
import authHeader from "../../../auth-header";
import Search from '../../../components/Search';

import configData from "../../../config/config.json";

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
        <div className="departmentrow-ID">{info.DprtID}</div>
        <div className="departmentrow-Name">{info.DprtName}</div>
        <div className="departmentrow-Member">{info.TotalMembers}</div>
        <Button variant="success" onClick={() => navigate(`/viewdepartment/${info.DprtID}`)}>Go</Button>
      </div>
      )
  }

const AllDepartment = () => {

  
  const [departmentinfo, setDepartmentInfo] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(configData.SERVER_URL + '/department', { headers: authHeader() })
      .catch(err => {
      console.log(err);
      });
      try{
      console.log("All department :",res.data);
      setDepartmentInfo(res.data);
      }catch(err){
        navigate('/login');
        console.log(err);
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
          <div className='alldepartment-form-container'>
            <div className='allemployee-title'>
                <h5>All Department</h5>
                <Button variant="success" onClick ={() => navigate('/department/add')}>Add</Button>{' '}
            </div>
            <Search placeholder="Search Department"
                options= {departmentinfo.map(info => 
                            ({
                            label:info.DprtID + ' ' + info.DprtName ,
                            value: info.DprtID
                            }))} 
                link='/viewdepartment/'
              />
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