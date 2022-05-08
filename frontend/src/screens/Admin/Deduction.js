import React from 'react';
import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import configData from '../../config/config.json';

const Deduction = () => {

    const navigate = useNavigate();
    const [employeeid, setEmployeeId] = useState('');
    const [deductiondescription, setDeductionDescription] = useState('');
    const [deductiontype, setDeductionType] = useState('');
    const [amount, setAmount] = useState(0);
    const [adminid, setAdminId] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(configData.SERVER_URL+`/deduction`, 
            {
                'EmployeeID': employeeid,
                'Description': deductiondescription,
                'TypeDeduction': deductiontype,
                'Amount': amount,
                'AdminID': adminid
            })
            .then(res => {
                console.log("Deduction ",res);
                console.log("Deduction res data",res.data);
            })
            .catch(err => {
                console.log(err);
        });
   
        alert(`EmployeeId : ${employeeid}\nDeduction Description : ${deductiondescription}\n
               Deduction Type : ${deductiontype}\nAmount : ${amount}\nAdminId : ${adminid}`);

        navigate('/employee');
    }

    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>Deduction</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formEmployeeID">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" defaultValue={employeeid || ""} 
                            onChange= {e=> setEmployeeId(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Form.ControlDeductionDescription">
                        <Form.Label>Deduction Description</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue = {deductiondescription || ""}
                            onChange = {e => setDeductionDescription(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formDeductionAmount">
                        <Form.Label>Deduction Amount</Form.Label>
                        <Form.Control className = "inputform" type="number" placeholder="Enter Deduction Amount" defaultValue={amount || ""} 
                            onChange= {e=> setAmount(e.target.value)}/>
                    </Form.Group>

                    <Form.Label>Deduction Type</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                          inline
                          label="Medical Expense"
                          name="deductiontype"
                          type= 'radio'
                          id= 'inline-radio-medical-expense'
                          onChange = {e => setDeductionType('M')}
                        />

                        <Form.Check
                          inline
                          label="Item Cost"
                          name="deductiontype"
                          type= 'radio'
                          id= 'inline-radio-item-cost'
                          onChange = {e => setDeductionType('I')}
                        />

                        <Form.Check
                          inline
                          label="Poor Work"
                          name="deductiontype"
                          type= 'radio'
                          id= 'inline-radio-poor-work'
                          onChange = {e => setDeductionType('P')}
                        />

                        <Form.Check
                          inline
                          label="Others"
                          name="deductiontype"
                          type= 'radio'
                          id= 'inline-radio-others'
                          onChange = {e => setDeductionType('O')}
                        />
                    </div>

                    <Form.Group className="mb-3 " controlId="formAdminID">
                        <Form.Label>Admin ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Admin ID" defaultValue={adminid || ""} 
                            onChange= {e=> setAdminId(e.target.value)}/>
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


export default Deduction;