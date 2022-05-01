import React, { useState }  from 'react'

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import './Login.css'

import Logo from '../../assets/img/HRMS.png'

import { Form, Button } from 'react-bootstrap'

const Login = () => {
    const [employeeid, setEmployeeid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(employeeid, password);
        axios.post(`http://localhost:8080/login`, {
            'employeeID': employeeid,
            'password': password
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            if(res.data){
                alert('Login Successful');
                navigate('/home');
                localStorage.setItem('token', res.data.token);
            }
        }
        )
        .catch(err => {
            console.log(err);
            alert("FAILED TO LOGIN:" + err); 
        });  
    }

    return( 
        <div className="login-all-container">
            <div className="login-container">
                <img src={Logo} alt="HRMS"/>
                <div className="login-form">
                    <Form.Group className="mb-4" controlId="loginUser">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee ID" defaultValue={ employeeid || ""} 
                            onChange = {e => {setEmployeeid(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="loginPass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" defaultValue={ password || ""}
                            onChange={e => {setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Button variant="success" type="submit" onClick = {handleSubmit}>
                        Log-in
                    </Button>
                </div>    
            </div>
        </div>
    )
   }
    

export default Login;