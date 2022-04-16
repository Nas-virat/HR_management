import React from 'react'

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const AddEmployeeToTask = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="main">
            <h5>Add Employee to Task</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Task ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Task ID"/>
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" />
                    </Form.Group>
                    
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </div>  
  )
}

export default AddEmployeeToTask;