import React from 'react';

import { useState } from 'react';

import { Button, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const AddRoles = () => {

    const [rolename, setRoleName] = useState('');
    const [otrate,setOtrate] = useState(0);
    const [employeeid, setEmployeeId] = useState('');
    const [roledescription, setRoleDescription] = useState('');
    const [salary, setSalary] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
                    'RoleName':rolename,
                    'OTrate':otrate,
                    'EmployeeId':employeeid,
                    'RoleDescription':roledescription,
                    'Salary':salary
                    });
        alert(`RoleName : ${rolename}\nOTrate : ${otrate}\nEmployeeId : ${employeeid}\nRoleDescription : ${roledescription}\nSalary : ${salary}`);
    }


    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>Add Roles</h5>
            <div className='form'>
                <Form> 

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formRoleName">
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" defaultValue = {rolename || ""} 
                            onChange = {e => setRoleName(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formOTRate">
                        <Form.Label>OT Rate</Form.Label>
                        <Form.Control type="number" placeholder="Enter OT Rate" defaultValue = {otrate|| ""}
                            onChange = {e => setOtrate(e.target.value)}
                        />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3 " controlId="formEmployeeID">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" defaultValue = {employeeid || ""}
                            onChange = {e => setEmployeeId(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Form.ControlRoleDescription">
                        <Form.Label>Role Description</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue = {roledescription || ""}
                            onChange = {e => setRoleDescription(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBaseSalary">
                        <Form.Label>Base Salary</Form.Label>
                        <Form.Control className = "inputform" type="number" placeholder="Enter Base Salary for this Role" defaultValue ={salary || ""}
                            onChange = {e => setSalary(e.target.value)}
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

export default AddRoles;