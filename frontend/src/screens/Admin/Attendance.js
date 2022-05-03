import React from 'react'

import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../../auth-header';

import { Form, Button } from 'react-bootstrap'

const Attendance = () => {

  const navigate = useNavigate();
  const [employeeid, setEmployeeId] = useState('');
  const [Status, setStatus] = useState(''); // O,L,A

  const handleSubmit = (e) => {
    e.preventDefault();
    if(localStorage.getItem('token') === null){
      navigate('/login');
    }
    else {
      axios.post(`http://localhost:8080/attendance`,
              {
                'EmployeeID': employeeid,
                'Status': Status
              },
              { headers: authHeader() })
          .then(res => console.log("insert employee attendance",res))
          .catch(err => console.log("Error :", err))
      
      alert(`EmployeeId : ${employeeid}\nStatus : ${Status}\n`);
      navigate('/employee');
    }
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
                          label="On-time"
                          name="attendance"
                          type= 'radio'
                          id= 'inline-radio-ontime'
                          onChange = {e => setStatus('O')}
                        />

                        <Form.Check
                          inline
                          label="Late"
                          name="attendance"
                          type= 'radio'
                          id= 'inline-radio-late'
                          onChange = {e => setStatus('L')}
                        />

                        <Form.Check
                          inline
                          label="Absent"
                          name="attendance"
                          type= 'radio'
                          id= 'inline-radio-absent'
                          onChange = {e => setStatus('A')}
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