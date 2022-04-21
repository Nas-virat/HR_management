import React from 'react';

import './Alltask.css';

import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import TaskRow from '../../../components/TaskRow';

const data = {
    taskid: '4002',
    name: 'Task 1',
    description: 'Collect the data from the user',
    supervisorid: 'E000001',
    status: 'Active'
}

const Header = () => {
    return(
     <>
       <div className = "alltask-header-content">
         <div className="task-ID">TaskID</div>
         <div className="task-desc">Task Description</div>
         <div className="task-supervisorID">SupervisorID</div>
         <div className="task-status">Status</div>
       </div>
       <hr className="solid"></hr>
     </>
 
    )
 }

const Alltask = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className='alltask-form-container'>
                <div className='allemployee-title'>
                    <h5>ALL TASKS</h5>
                    <Button variant="success" onClick ={() => navigate('/task/add')}>Add</Button>{' '}
                </div>
                <div className = 'alltask-form'>
                    <Header/>
                    <TaskRow info = {data} />
                    <TaskRow info = {data} />
                    <TaskRow info = {data} />
                </div>
            </div>
        </div>
        )
    }

export default Alltask