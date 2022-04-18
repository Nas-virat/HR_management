import React from 'react'

import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react';

import { Form, Button } from 'react-bootstrap'

const Attendance = () => {

  const [employeeid, setEmployeeId] = useState('');
  const [Status, setStatus] = useState(''); // O,L,A
  const [Check,setCheck] = useState(-1); // Check In 1 , Check Out 0

  const handleSubmit = (e) => {
    e.preventDefault();
    var today = new Date();
    console.log(today);
    if(((today.getHours()> 9 && today.getMinutes() > 30) || today.getHours() > 10) && Check){
      setStatus('L');
      console.log('Late');
    }
    else if(((today.getHours()< 9 && today.getMinutes() < 30) || today.getHours()< 9) && Check){
      setStatus('O');
      console.log('Early');
    }
    else{
      setStatus('A');
      console.log('Absent');
    }
    
    console.log({'EmployeeId' :employeeid ,'Status' : Status,'Check' : Check});
    alert(`EmployeeId : ${employeeid}\nStatus : ${Status}\nCheck : ${Check}`);
}

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="form-container">
            <h5>Attendance</h5>
            <div className='form'>
                <Form>            
                    <Form.Group className="mb-3 " controlId="formEmployeeID">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID" defaultValue = {employeeid || ""}
                            onChange = {e => setEmployeeId(e.target.value)}
                        />
                    </Form.Group>

                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                          inline
                          label="Check In"
                          name="attendance"
                          type= 'radio'
                          id= 'inline-radio-check-in'
                          onChange = {e => setCheck(1)}
                        />

                        <Form.Check
                          inline
                          label="Check Out"
                          name="attendance"
                          type= 'radio'
                          id= 'inline-radio-check-out'
                          onChange = {e => setCheck(0)}
                        />
                    </div>
                    
                    <Button variant="success" type="submit" onClick = {handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Attendance