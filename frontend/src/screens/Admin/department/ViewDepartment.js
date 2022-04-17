import React from 'react';

import { Button, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

//css
import '../Forms.css';

//components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import EmployeeRow from '../../../components/EmployeeRow';


const data = {
  Id: "E000312",
  Name: "Meaw sean",
  Position: "HR Admin",
  Department: "Human Resource"
}



const Header = () => {
   return(
    <>
      <div className = "header-content">
        <div>ID</div>
        <div>Name</div>
        <div>Position</div>
        <div>Department</div>
      </div>
      <hr className="solid"></hr>
    </>

   )
}



const ViewDepartment = () => {
  const [add, setAdd] = useState(false);

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='form-container'>
            <div className = "viewtask-task-bg">
                <h5>Department</h5>
                <div className = "task-desc-content">
                    <h1>Marketing Department</h1>
                    <p>This department is going to boom boom Sean Sean. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className = "viewtask-supervisor-bg">
                <h5>Supervisor</h5>
                <Header />
                <EmployeeRow info = {data}/>
            </div>
            <div className = "viewtask-members-bg">
                <h5>Members</h5>
                <Header />
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
                {add && 
                  <div className='form'>
                    <Form> 
                      <Row className="mb-3">
                          <Form.Group as={Col} controlId="formRoleName">
                          <Form.Label>Department ID</Form.Label>
                          <Form.Control type="text" placeholder="Enter Department ID"/>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formOTRate">
                          <Form.Label>Employee ID</Form.Label>
                          <Form.Control type="text" placeholder="Enter Employee ID" />
                          </Form.Group>
                      </Row>
                        
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                  </div>
                }
            </div>
        </div>
    </div>
  )
}

export default ViewDepartment