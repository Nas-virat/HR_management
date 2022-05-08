import React from 'react';

import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';



import '../Forms.css';

//import components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';

import axios from 'axios';

import configData from '../../../config/config.json';

const AddNewTask = () => {

    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate());

    const [date, setDate] = useState(defaultDate);
    const [employeeid, setEmployeeId] = useState('');
    const [taskdescription, setTaskDescription] = useState('');
    const [tasktype, setTasktype] = useState(''); // I - Individual, P - Project
    const [supervisorid, setSupervisorid] = useState('');

    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post(configData.SERVER_URL+'/taskadd', 
            {
                'EmployeeID': employeeid,
                'taskdesc': taskdescription,
                'Type': tasktype,
                'SupervisorID': supervisorid,
                'deadline': date
            })
            .then(res => {
                console.log("Add new task res",res.data);
            }).catch(err => {
                console.log(err);
            })
    
    
        console.log({
                    'EmployeeId':employeeid,
                    'TaskDescription':taskdescription,
                    'Type': tasktype,
                    'TaskDeadline':date,
                    'SupervisorId':supervisorid
                    });
        alert(`EmployeeId : ${employeeid}\nTaskDescription : ${taskdescription}\nTaskDeadline : ${date}\nTaskType : ${tasktype}\nSupervisorId : ${supervisorid}`);
    }


    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>ADD NEW TASK</h5>
            <div className='form'>
                <Form> 
                  <Form.Group className="mb-3" controlId="formEmployeeID">
                      <Form.Label>Employee ID</Form.Label>
                      <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" defaultValue = {employeeid || ""}
                          onChange = {e => setEmployeeId(e.target.value)}
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formTaskDeadline">
                      <Form.Label>Task Deadline</Form.Label>
                      <Form.Control type="date" placeholder="Enter Task Deadline" defaultValue = {date.toLocaleDateString('en-CA')}
                          onChange = {onSetDate}
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Form.ControlTaskDescription">
                      <Form.Label>Task Description</Form.Label>
                      <Form.Control as="textarea" rows={3} defaultValue = {taskdescription || ""}
                          onChange = {e => setTaskDescription(e.target.value)}/>
                  </Form.Group>

                  <Form.Label>Task Type</Form.Label>
                    <div key={`inline-radio`} className="mb-3">   
                        <Form.Check
                          inline
                          label="Individual"
                          name="tasktype"
                          type= 'radio'
                          id= 'inline-radio-individual'
                          onChange = {e => setTasktype('I')}
                        />

                        <Form.Check
                          inline
                          label="Project"
                          name="tasktype"
                          type= 'radio'
                          id= 'inline-radio-project'
                          onChange = {e => setTasktype('P')}
                        />
                    </div>

                  <Form.Group className="mb-3 " controlId="formSupervisorID">
                      <Form.Label>Supervisor ID</Form.Label>
                      <Form.Control className = "inputform" type="text" placeholder="Enter Supervisor ID" defaultValue = {supervisorid || ""}
                          onChange = {e => setSupervisorid(e.target.value)}
                      />
                  </Form.Group>
         
                  <Button variant="success" type="submit" onClick = {handleSubmit}>
                      Submit
                  </Button>
                </Form>
            </div>
        </div>
    </div>  
  )
}

export default AddNewTask;