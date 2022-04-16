import React from 'react'

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Forms.css';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Bonus = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>BONUS</h5>
            <div className='form'>
                <Form> 
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Employee ID"/>
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Bonus Amount</Form.Label>
                        <Form.Control className = "inputform" type="number" placeholder="Enter Bonus Amount" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Admin ID</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Admin ID" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </div>  
  )
}

export default Bonus;