import React from 'react';

import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';


import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import '../Forms.css';

//import components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';

import configData from "../../../config/config.json";

const AddDepartment = () => {

    const [departmentname, setDepartmentName] = useState('');
    const [departmentdescription, setDepartmentDescription] = useState('');
    const [headid, setHeadId] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(configData.SERVER_URL+'/adddepartment',
            {
                'DprtName':departmentname,
                'DprtDesc':departmentdescription,
                'HeadDeptID':headid
            })
            .then(res => {console.log("add department")})
            .catch(err => {console.log("err",err)})

        alert(`DepartmentName : ${departmentname}\nDepartmentDescription : ${departmentdescription}\nHeadId : ${headid}`);
        navigate('/department');
    }


    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>ADD DEPARTMENT</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formDepartmentName">
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Department Name" defaultValue = {departmentname || ""}
                            onChange = {e => setDepartmentName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Form.ControlDepartmentDescription">
                        <Form.Label>Department Description</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue = {departmentdescription || ""}
                            onChange = {e => setDepartmentDescription(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formHeadID">
                        <Form.Label>Head of Department ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Head of Department ID" defaultValue = {headid || ""}
                            onChange = {e => setHeadId(e.target.value)}
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

export default AddDepartment;