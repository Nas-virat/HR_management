import React from 'react';
import {useState} from 'react';

import { Button, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


import '../Forms.css';

//import components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';


import axios from 'axios';

const OTtask = () => {


    const [taskId, setTaskId] = useState('');
    const [sTime, setSTime] = useState();
    const [eTime, setETime] = useState();
    const [employeeId, setEmployeeId] = useState('');
    const [supervisorId, setSupervisorId] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            'TaskID':taskId,
            'StartTime':sTime,
            'EndTime':eTime,
            'EmployeeID':employeeId,
            'SupervisorID':supervisorId
        });
        axios.post(`http://localhost:8080/ottask`,{
            'TaskID':taskId,
            'StartTime':sTime,
            'EndTime':eTime,
            'EmployeeID':employeeId,
            'SupervisorID':supervisorId
        })
             .then(res => console.log ("res:",res))
             .catch(err => console.log("err", err))
        alert("Submit successful");
        navigate('/employee');
    }

    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>Over Time (OT)</h5>
            <div className='form'>
                <Form>
                    <Form.Group className="mb-3" controlId="formOTTaskID">
                        <Form.Label>Task ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Task ID"
                        onChange = {e => setTaskId(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formOTSTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control className = "inputform" type="time" placeholder="Enter Start Time" 
                        onChange = {e => setSTime(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formOTETime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control className = "inputform" type="time" placeholder="Enter End Time" 
                        onChange = {e => setETime(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formOTEmployeeID">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" 
                        onChange = {e => setEmployeeId(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formOTSupervisorID">
                        <Form.Label>Supervisor ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Supervisor ID" 
                        onChange = {e => setSupervisorId(e.target.value)}/>
                    </Form.Group>
                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </div>  
  )
}

export default OTtask;