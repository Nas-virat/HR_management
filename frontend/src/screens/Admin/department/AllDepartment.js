
import React from 'react';

import './AllDepartment.css';

import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';


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
        <div>D001</div>
        <div>Department 1</div>
        <div>10</div>
        <Button variant="success" onClick={() => navigate(`/viewdepartment/D001`)}>Go</Button>
      </div>
      )
  }

const AllDepartment = () => {

  let navigate = useNavigate();
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
              <DepartmentRow/>
              <DepartmentRow/>
              <DepartmentRow/>
            </div>
          </div>
      </div>
      )
  }


export default AllDepartment