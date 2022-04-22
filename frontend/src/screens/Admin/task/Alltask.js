import React, { useState , useEffect } from 'react';

import './Alltask.css';

import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import axios from 'axios';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import TaskRow from '../../../components/TaskRow';



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

    const [taskinfo, setTaskInfo] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:8080/task')
            .catch(err => {
            console.log(err);
            });
            console.log(res.data);
            setTaskInfo(res.data);
        }
        fetchData();
    },[]);

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
                    {
                        taskinfo && taskinfo.map( (taskinfo, index) => {
                            return(
                                <TaskRow info = {taskinfo} key = {index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
        )
    }

export default Alltask