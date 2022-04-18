import React from 'react';

import { useState } from 'react';

import { Button, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const AddPromotion = () => {

    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate());

    const [date, setDate] = useState(defaultDate);
    const [employeeid, setEmployeeId] = useState('');
    const [roleid, setRoleId] = useState('');
    const [departmentid, setDepartmentId] = useState('');
    const [extrasalary, setExtrasalary] = useState(0);
    const [approverid, setApproverid] = useState('');

    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
                    'EmployeeID':employeeid,
                    'PromotionDate':date,
                    'RoleId':roleid,
                    'DepartmentId':departmentid,
                    'ExtraSalary':extrasalary,
                    'ApproverId':approverid
                    });
        alert(`EmployeeID : ${employeeid}\nPromotionDate : ${date}\nRoleId : ${roleid}\nDepartmentId : ${departmentid}\nExtraSalary : ${extrasalary}\nApproverId : ${approverid}`);
    }


    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>PROMOTION</h5>
            <div className='form'>
                <Form> 
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formRoleName">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee ID" defaultValue = {employeeid || ""} 
                            onChange = {e => setEmployeeId(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formOTRate">
                        <Form.Label>Promotion Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter Promotion Date" defaultValue = {date.toLocaleDateString('en-CA')}
                            onChange = {onSetDate}
                        />
                        </Form.Group>
                    </Row>

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
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" defaultValue = {approverid || ""}
                            onChange = {e => setApproverid(e.target.value)}
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