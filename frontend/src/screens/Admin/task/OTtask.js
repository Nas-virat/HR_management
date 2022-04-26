import React from 'react';
import {useState} from 'react';

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../Forms.css';

//import components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';


const OTtask = () => {


    const [taskId, setTaskId] = useState('');
    const [sDate, setSDate] = useState();
    const [eDate, setEDate] = useState();
    const [employeeId, setEmployeeId] = useState('');
    const [supervisorId, setSupervisorId] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            'TaskID':taskId,
            'StartDate':sDate,
            'EndDate':eDate,
            'EmployeeID':employeeId,
            'SupervisorID':supervisorId
        });

    }

    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>OT Task</h5>
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
                        onChange = {e => setSDate(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formOTETime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control className = "inputform" type="time" placeholder="Enter End Time" 
                        onChange = {e => setEDate(e.target.value)}/>
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