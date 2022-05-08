import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


import axios from 'axios';
import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import configData from '../../config/config.json';

const Bonus = () => {


    const [employeeid, setEmployeeId] = useState('');
    const [bonus, setBonus] = useState(0);
    const [adminid, setAdminId] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(configData.SERVER_URL+`/bonus`, {
            'EmployeeID': employeeid,
            'Amount': bonus,
            'AdminID': adminid
        })
        .then(res => {
            console.log(res);
            console.log(res.data);})
        .catch(err => {
            console.log(err);
        });
        
        alert(`EmployeeId : ${employeeid}\nBonus Amount : ${bonus}\nAdminId : ${adminid}`);
        navigate('/employee');
    }

    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>Bonus</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" defaultValue={employeeid || ""} onChange= {e=> setEmployeeId(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Bonus Amount</Form.Label>
                        <Form.Control className = "inputform" type="number" placeholder="Enter Bonus Amount" defaultValue={bonus || ""} onChange= {e=> setBonus(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Admin ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Admin ID" defaultValue={adminid || ""} onChange= {e=> setAdminId(e.target.value)}/>
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

export default Bonus;