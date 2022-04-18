import React from 'react';
import {useState} from 'react';

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Deduction = () => {

    const [deductionid, setDeductionId] = useState('');
    const [employeeid, setEmployeeId] = useState('');
    const [deductiondescription, setDeductionDescription] = useState('');
    const [deductiontype, setDeductionType] = useState('');
    const [amount, setAmount] = useState(0);
    const [adminid, setAdminId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({'DeductionId' :deductionid,
                    'EmployeeId':employeeid,
                    'Deduction Description':deductiondescription,
                    'Deduction Type':deductiontype,
                    'Amount':amount,
                    'AdminId': adminid
                    });
        alert(`DeductionId : ${deductionid}\nEmployeeId : ${employeeid}\nDeduction Description : ${deductiondescription}\nDeduction Type : ${deductiontype}\nAmount : ${amount}\nAdminId : ${adminid}`);
    }

    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>DEDUCTION</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formDeductionID">
                        <Form.Label>Deduction ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Deduction ID" defaultValue = {deductionid || ""}
                            onChange = {e => setDeductionId(e.target.value)}
                        />
                    </Form.Group>

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