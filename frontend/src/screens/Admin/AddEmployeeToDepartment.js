import React from 'react'

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const AddEmployeeToDepartment = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="main">
            <h5>Add Employee to Department</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Department ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Department ID"/>
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

export default AddEmployeeToDepartment;