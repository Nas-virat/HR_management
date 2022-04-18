import React from 'react';

import './Alltask.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import TaskRow from '../../../components/TaskRow';

const data = {
    taskid: 'T000001',
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

    const [add, setAdd] = useState(false);

    const navigate = useNavigate();

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className='alltask-form-container'>
                <h5>ALL TASKS</h5>
                <div className = 'alltask-form'>
                    <Header/>
                    <TaskRow info = {data} />
                    <TaskRow info = {data} />
                    <TaskRow info = {data} />
                    <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
                    {add && navigate('/task/add')}
                </div>
            </div>
        </div>
        )
    }

export default Alltask