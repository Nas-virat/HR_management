import React from 'react';

import { Button, Form, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//css
import '../Forms.css';

//components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import EmployeeRow from '../../../components/EmployeeRow';

import axios from 'axios';

const data = {
  EmployeeID: "E000312",
  fname: "Meaw sean",
  lname: "HR Admin",
  Email: "TEST",
  Institution: "Human Resource"
}



const Header = () => {
   return(
    <>
      <div className = "header-content">
        <div className = "header-content-ID">ID</div>
        <div className = "header-content-Name">Name</div>
        <div className = "header-content-Position">Position</div>
        <div className = "header-content-Department">Department</div>
      </div>
      <hr className="solid"></hr>
    </>

   )
}



const ViewDepartment = () => {
  const [add, setAdd] = useState(false);
  const [departmentinfo, setDepartmentInfo] = useState({});
  const [departmentmember,setDepartmentMember] = useState([]);
  const { id } = useParams();

  /**
   * get task description
   */
   useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) { 
        const res = await axios.get(`http://localhost:8080/department/${id}`)
        setDepartmentInfo(res.data[0]);
        console.log("Department Object",res.data[0]); 
        
        const resMember = await axios.get(`http://localhost:8080/departmentmember/${id}`);
        setDepartmentMember(resMember.data);
        console.log("Department Member Object: ",resMember.data);
        }
      }
      catch(err) {
        console.log("err",err);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='form-container'>
        <h5>Department</h5>
            <div className = "viewtask-task-bg">
                <div className = "task-desc-content">
                    <h1>{departmentinfo.DprtName}</h1>
                    <p>{departmentinfo.DprtDesc}</p>
                </div>
            </div>
            <h5>Head of Department</h5>
            <div className = "viewtask-supervisor-bg">
                <Header />
                <EmployeeRow info = {data}/>
            </div>
            <div className ="allemployee-title">
            <h5>Members</h5>
            <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
            </div>
            <div className = "viewtask-members-bg">
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
                {add && 
                  <div className='form'>
                    <Form> 
                      <Row className="mb-3">
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