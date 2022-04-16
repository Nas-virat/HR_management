import React from 'react'

import { Button, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const AddRoles = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>Add Roles</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Role ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Role ID"/>
                        <Form.Text className="text-muted">
                        The Role ID will be automatically generated.
                        </Form.Text>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>OT Rate</Form.Label>
                        <Form.Control type="number" placeholder="Enter OT Rate" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className = "inputform" type="email" placeholder="Enter Employee ID" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Role Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Base Salary</Form.Label>
                        <Form.Control className = "inputform" type="number" placeholder="Enter Base Salary for this Role" />
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

export default AddRoles;