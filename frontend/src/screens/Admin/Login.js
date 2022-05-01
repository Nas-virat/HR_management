import React from 'react'

import './Login.css'

import Logo from '../../assets/img/HRMS.png'

import { Form, Button } from 'react-bootstrap'

const Login = () => {
    return( 
        <div className="login-all-container">
            <div className="login-container">
                <img src={Logo} alt="HRMS"/>
                <div className="login-form">
                    <Form.Group className="mb-4" controlId="loginUser">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee ID" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="loginPass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Log-in
                    </Button>
                </div>    
            </div>
        </div>
    )
   }
    

export default Login;