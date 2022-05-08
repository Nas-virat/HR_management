
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import axios from 'axios';

import authHeader from "../../auth-header";

import './AllRoles.css';

import configData from '../../config/config.json';

const Header = () => {
    return(
     <>
       <div className = "Role-header-content">
         <div className="Role-Head-ID">RoleID</div>
         <div className="Role-Head-Name">Role Name</div>
         <div className="Role-Head-Name">Role Description</div>
         <div className="Role-Head-Member">Total Member</div>
       </div>
       <hr className="solid"></hr>
     </>
 
    )
 }

const RoleRow = ({info}) => {
    //let navigate = useNavigate();
    return(
      <div className = "Role-content">
        <div className="Role-ID">{info.RoleID}</div>
        <div className="Role-Name" >{info.RoleName}</div>
        <div className="Role-Desc">{info.RoleDesc}</div>
        <div className="Role-Member">{info.TotalMembers}</div>
      </div>
      )
  }

const AllRole = () => {

  
  const [roleinfo, setRoleInfo] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(configData.SERVER_URL+'/role', { headers: authHeader() })
      .catch(err => {
      console.log(err);
      });
      try{
      console.log("All Role :",res.data);
      setRoleInfo(res.data);
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
          <div className='role-form-container'>
            <div className='role-title'>
                <h5>All Role</h5>
                <Button variant="success" onClick ={() => navigate('/role/add')}>Add</Button>{' '}
            </div>
            <div className="role-form">
              <Header/>
              {
                roleinfo && roleinfo.map( (info, index) => {
                  return(
                    <RoleRow info={info} key = {index} />
                  )
                })
              }
            </div>
          </div>
      </div>
      )
  }


export default AllRole;