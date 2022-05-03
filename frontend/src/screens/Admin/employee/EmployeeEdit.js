import React, { useEffect } from 'react';
import { useState } from 'react';

import { Button, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import { useParams } from 'react-router-dom';

import '../Forms.css';

//import components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';

const EmployeeEdit = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [bankreceive, setBankreceive] = useState('');
    const [accountno, setAccountNo] = useState('');

    const [password, setPassword] = useState('');
    const [image, setImage] = useState({});

    const [status, setStatus] = useState('');

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const res = await axios.get(`http://localhost:8080/employee/${id}`);
                    setFname(res.data[0].fname);
                    setLname(res.data[0].lname);
                    setAddress(res.data[0].Address);
                    setEmail(res.data[0].Email);
                    setBankreceive(res.data[0].BankRecive);
                    setAccountNo(res.data[0].AccountNo);
                    setStatus(res.data[0].WorkStatus);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',image);

        try {
            const response = await axios({
              method: "post",
              url: "http://localhost:8080/upload",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response);
            console.log("\nfile upload is ",response.data.filename);
            try{
                const res = await axios.put(`http://localhost:8080/updateEmployee/${id}`, {
                    'fname':fname,
                    'lname':lname,
                    'Address':address,
                    'Email':email,
                    'BankRecive' : bankreceive,
                    'AccountNo' : accountno,
                    'Password' : password,
                    'WorkStatus' : status,
                    'Image' : response.data.filename
                });
                console.log("Update New Employee",res.data);
            }
            catch(err){
                console.log("err:",err);
            }
        } catch(err){
            console.log("err:",err);
        }

    }

    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>EDIT EMPLOYEE</h5>
            <div className='form'>
                <Form> 
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter First Name" defaultValue = {fname || ""} 
                              onChange = {e => setFname(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Last Name" defaultValue = {lname || ""}
                              onChange = {e => setLname(e.target.value)}
                          />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="Form.ControlAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue = {address || ""}
                            onChange = {e => setAddress(e.target.value)}/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className = "inputform" type="text" placeholder="Enter Name" defaultValue = {email || ""} 
                            onChange = {e => setEmail(e.target.value)}
                        />
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formBankName">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Bank Name" defaultValue = {bankreceive || ""} 
                            onChange = {e => setBankreceive(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formAccountNo">
                        <Form.Label>Account No.</Form.Label>
                        <Form.Control type="number" placeholder="Enter OT Rate" defaultValue = {accountno || ""}
                            onChange = {e => setAccountNo(e.target.value)}
                        />
                        </Form.Group>
                    </Row>


                   

                    <Form.Group className="mb-3 " controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className = "inputform" type="password" placeholder="Enter Password" defaultValue={password || ""} 
                            onChange= {e=> setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Label>Work Status</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                          inline
                          label="Employed"
                          name="status"
                          type= 'radio'
                          id= 'inline-radio-employed'
                          checked = {status === 'E'}
                          onChange = {e => setStatus('E')}
                        />

                        <Form.Check
                          inline
                          label="Suspended"
                          name="status"
                          type= 'radio'
                          id= 'inline-radio-suspended'
                          checked = {status === 'S'}
                          onChange = {e => setStatus('S')}
                        />

                        <Form.Check
                          inline
                          label="Quit"
                          name="status"
                          type= 'radio'
                          id= 'inline-radio-quit'
                          checked = {status === 'Q'}
                          onChange = {e => setStatus('Q')}
                        />

                    </div>

                    <Form.Group controlId="formPictureFile" className="mb-3">
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.Control className = "inputform" type="file" 
                            onChange = {e => {
                                console.log(e.target.files[0])
                                setImage(e.target.files[0])}
                                }/>
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

export default EmployeeEdit;