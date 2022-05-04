import React from 'react';
import { useState } from 'react';

import { Button, Form, Col, Row } from 'react-bootstrap';


import axios from "axios";

import moment from 'moment';

import { useNavigate } from 'react-router-dom';

import '../Forms.css';

//import components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';

const AddNewEmployee = () => {

    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate());

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState(defaultDate);
    const [bankreceive, setBankreceive] = useState('');
    const [accountno, setAccountNo] = useState('');
    const [edulevel, setEdulevel] = useState('');
    const [institution, setInstitution] = useState('');
    const [major, setMajor] = useState('');
    const [yeargrads, setYearGrads] = useState(0);
    const [gpax, setGPAX] = useState(0);
    const [password, setPassword] = useState('');

    const [department, setDepartment] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState({});

    //const [file, setfile] = useState('');

    const navigate = useNavigate();

    const onSetDate = (event) => {
      setDate(new Date(event.target.value))
    }

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
            console.log(response.data.filename);
            
            try{
                const res = await axios.post('http://localhost:8080/insertEmployee', {
                    'fname':fname,
                    'lname':lname,
                    'Address':address,
                    'Email':email,
                    'Gender':gender,
                    'DOB': moment(date).format("YYYY-MM-DD"),
                    'BankRecive' : bankreceive,
                    'AccountNo' : accountno,
                    'Edulevel' :edulevel,
                    'Institution' : institution,
                    'Major': major,
                    'YearGrads' : yeargrads,
                    'GPAX' : gpax,
                    'Password' : password,
                    'DprtID' : department,
                    'RoleID' : role,  
                    'Image' : response.data.filename
                });
                console.log("Add New Employee",res);
            }
            catch(err){
                console.log("err:",err);
            }
            alert('Successfully Added');
            navigate('/employee');
          } catch(error) {
            console.log("err on upload photo",error);
          }



    }
    return (
    <div>
        <Navbar />
        <Sidebar />
        <div className="form-container">
            <h5>ADD EMPLOYEE</h5>
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
                        <Form.Control type="text" placeholder="Enter Name" defaultValue = {email || ""} 
                            onChange = {e => setEmail(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date of Birth" defaultValue = {date.toLocaleDateString('en-CA')}
                            onChange = {onSetDate}
                        />
                        </Form.Group>
                    </Row>

                    <Form.Label>Gender</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                          inline
                          label="Male"
                          name="gender"
                          type= 'radio'
                          id= 'inline-radio-male'
                          onChange = {e => setGender('M')}
                        />

                        <Form.Check
                          inline
                          label="Female"
                          name="gender"
                          type= 'radio'
                          id= 'inline-radio-female'
                          onChange = {e => setGender('F')}
                        />

                        <Form.Check
                          inline
                          label="Others"
                          name="gender"
                          type= 'radio'
                          id= 'inline-radio-others'
                          onChange = {e => setGender('O')}
                        />

                    </div>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formBankName">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Bank Name" defaultValue = {bankreceive || ""} 
                            onChange = {e => setBankreceive(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formAccountNo">
                        <Form.Label>Account No.</Form.Label>
                        <Form.Control type="number" placeholder="Enter Account No." defaultValue = {accountno || ""}
                            onChange = {e => setAccountNo(e.target.value)}
                        />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formInstitution">
                        <Form.Label>Institution</Form.Label>
                        <Form.Control type="text" placeholder="Enter Institution" defaultValue = {institution || ""}
                            onChange = {e => setInstitution(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formMajor">
                        <Form.Label>Major</Form.Label>
                        <Form.Control type="text" placeholder="Enter Major" defaultValue = {major || ""}
                            onChange = {e => setMajor(e.target.value)}
                        />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formYearGrad">
                        <Form.Label>Graduation Year</Form.Label>
                        <Form.Control type="number" placeholder="Enter Graduation Year" defaultValue = {yeargrads || ""}
                            onChange = {e => setYearGrads(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGPAX">
                        <Form.Label>GPAX</Form.Label>
                        <Form.Control type="number" placeholder="Enter GPAX" defaultValue = {gpax || ""}
                            onChange = {e => setGPAX(e.target.value)}
                        />
                        </Form.Group>
                    </Row>

                    <div key={`radio`} className="mb-3">
                        <Form.Check
                          label="Bachelor Degree"
                          name="degree"
                          type= 'radio'
                          id= 'radio-bachelor'
                          onChange = {e => setEdulevel('B')}
                        />

                        <Form.Check
                          label="Master Degree"
                          name="degree"
                          type= 'radio'
                          id= 'radio-master'
                          onChange = {e => setEdulevel('M')}
                        />

                        <Form.Check
                          label="Doctor of Philosophy"
                          name="degree"
                          type= 'radio'
                          id= 'radio-phd'
                          onChange = {e => setEdulevel('P')}
                        />

                    </div>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formDepartmentID">
                        <Form.Label>Department ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Department ID" defaultValue = {department || ""} 
                            onChange = {e => setDepartment(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formRoleID">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" placeholder="Enter Role ID" defaultValue = {role ||""}
                            onChange = {e => setRole(e.target.value)}
                        />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3 " controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className = "inputform" type="password" placeholder="Enter Password" defaultValue={password || ""} 
                            onChange= {e=> setPassword(e.target.value)}/>
                    </Form.Group>

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

export default AddNewEmployee;