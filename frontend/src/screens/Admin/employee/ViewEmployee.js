import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar'; 

import './ViewEmployee.css';

import Logo from '../../../assets/img/employee1.jpg';


const data = {
    taskid: 'T000001',
    description: 'Collect the data from the user',
    startdate: '17/04/2022',
    deadline: '09/05/2022'
}

const Header = () => {
    return(
     <>
       <div className = "alltask-header-content">
         <div>TaskID</div>
         <div>Task Description</div>
         <div>Start Date</div>
         <div>Deadline</div>
       </div>
       <hr className="solid"></hr>
     </>
 
    )
 }

 const TaskRow = ({info}) => {
    let navigate = useNavigate();
    return(
      <div className = "alltask-task-content">
        <div className="task-ID">{info.taskid}</div>
        <div className="task-desc">{info.description}</div>
        <div className="task-supervisorID">{info.startdate}</div>
        <div className="task-status">{info.deadline}</div>
        <Button variant="success" onClick={() => navigate(`/viewtask/${info.taskid}`)}>Go</Button>
      </div>
      )
  }


const ViewEmployee = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className = "Viewemployee-all-container">
        <div className ="Viewemployee-top">
            <div className ="Viewemployee-top-left">
                <div className = "viewemployye-img">
                <img src={Logo} alt='employee1'></img>
                </div>
                <div className ="Viewemployee-top-right-content">
                  <h1>Mr. Meow sean</h1>
                  <h2>HR Admin </h2>
                </div>
            </div>

            
            <div className ="Viewemployee-top-right">
            
            </div>
        </div>
        
        <div className = "Viewemployee-bottom">
            <div className='Viewemployee-bottom-left'>
                <div className = "Viewemployee-bottom-left-tasks">
                    <div>
                        <h5>TASKS</h5>
                        <div>
                            <Header />
                            <TaskRow info = {data}/>
                            <TaskRow info = {data}/>
                            <TaskRow info = {data}/>
                        </div>
                    </div>
                </div>
                <div className = "Viewemployee-bottom-left-attendance"> 
                    <div>
                    </div>
                </div>
            </div>
            <div className = "Viewemployee-bottom-right">

            </div>
        </div>
        </div>
    </div>
  )
}

export default ViewEmployee