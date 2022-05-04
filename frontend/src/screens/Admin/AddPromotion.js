import React from 'react';

import { useState } from 'react';

import { Button, Form, Col, Row } from 'react-bootstrap';

import axios from 'axios';

import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const AddPromotion = () => {

    const [employeeid, setEmployeeId] = useState('');
    const [roleid, setRoleId] = useState('');
    const [departmentid, setDepartmentId] = useState('');
    const [extrasalary, setExtrasalary] = useState(0);
    const [approveBy, setApproveBy] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/promotion',
            {
                'EmployeeID' : employeeid,
                'RoleID' : roleid,
                'DprtID' : departmentid,
                'ExtraSalary' : extrasalary,
                'ApproveBy' : approveBy
            })
             .then(res => console.log("Add promotion to database",res))
             .catch(err => console.log("Err :", err))

        alert(`EmployeeID : ${employeeid}\nRoleId : ${roleid}\nDepartmentId : ${departmentid}\nExtraSalary : ${extrasalary}\nApproverId : ${approveBy}\n`);
    }


    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>Promotion</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formEmployeeID">
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" defaultValue = {employeeid || ""} 
                        onChange = {e => setEmployeeId(e.target.value)}
                    />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formRoleName">
                        <Form.Label>New Role ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Role ID" defaultValue = {roleid || ""} 
                            onChange = {e => setRoleId(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formOTRate">
                        <Form.Label>New Department</Form.Label>
                        <Form.Control type="text" placeholder="Enter Department ID" defaultValue = {departmentid|| ""}
                            onChange = {e => setDepartmentId(e.target.value)}
                        />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3 " controlId="formEmployeeID">
                        <Form.Label>Extra Salary</Form.Label>
                        <Form.Control className = "inputform" type="number" placeholder="Enter Extra Salary" defaultValue = {extrasalary || ""}
                            onChange = {e => setExtrasalary(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formEmployeeID">
                        <Form.Label>Approver ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" defaultValue = {approveBy || ""}
                            onChange = {e => setApproveBy(e.target.value)}
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

export default AddPromotion;