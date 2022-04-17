
import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';


const Header = () => {
    return(
     <>
       <div className = "header-content">
         <div>ID</div>
         <div>Name</div>
         <div>Total Member</div>
       </div>
       <hr className="solid"></hr>
     </>
 
    )
 }

 const DepartmentRow = ({info}) =>{
    let navigate = useNavigate();
    return(
      <div className = "employee-content">
        <div>D000001</div>
        <div>Department 1</div>
        <div>10</div>
        <Button variant="success" onClick={() => navigate("/home")}>Go</Button>
      </div>
      )
  }

const AllDepartment = () =>{

    const [add, setAdd] = useState(false);

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className='form-container'>
                <Header/>
                <DepartmentRow/>
                <DepartmentRow/>
                <DepartmentRow/>
                <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
                {add && <Button variant="success">Hello</Button>}
            </div>
        </div>
        )
    }


export default AllDepartment