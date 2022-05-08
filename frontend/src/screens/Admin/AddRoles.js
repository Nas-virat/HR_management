import React from 'react';

import { useState } from 'react';

import {useNavigate} from 'react-router-dom';

import { Button, Form, Col, Row } from 'react-bootstrap';


import axios from 'axios';

import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import configData from "../../config/config.json";

const AddRoles = () => {

    const [rolename, setRoleName] = useState('');
    const [otrate,setOtrate] = useState(0);
    const [roledescription, setRoleDescription] = useState('');
    const [salary, setSalary] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(configData.SERVER_URL+'/insertRole',{
            'RoleName':rolename,
            'OTRate':otrate,
            'RoleDesc':roledescription,
            'BaseSalary':salary
            }).catch((err) => console.log(err));
        console.log("POST data",res);
        alert(`RoleName : ${rolename}\nOTrate : ${otrate}\nRoleDescription : ${roledescription}\nSalary : ${salary}`);
        navigate('/employee');   
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