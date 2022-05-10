import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import Logo from '../../assets/img/employee1.jpg';
import authHeader from "../../auth-header";

import './Paymentstatus.css';

import configData from '../../config/config.json';

const Header = () => {
  return(
   <>
     <div className = "payment-header-content">
      <div className="payment-ID">EmployeeID</div>
      <div className="payment-name">Employee Name</div>
       <div className="payment-amount">Amount</div>
       <div className="payment-account">Account No.</div>
       <div className="payment-bank">Bank</div>
       <div className="payment-approve">Approved by</div>
     </div>
     <hr className="solid"></hr>
   </>
  )
}

const PaymentRow = ({info}) =>{
  let navigate = useNavigate();
  return(
    <div className = "employee-content">
        <div className = "employeerow-image"><img src = {info.Image === null ? Logo :`${info.Image}` } alt = "Employee-img"/>{info.EmployeeID}</div>
        <div className = "employeerow-name">{info.fname} {info.lname}</div>
        <div className = "employeerow-name">{info.TotalPayment}</div>
        <div className = "employeerow-role">{info.AccountNo}</div>
        <div className = "employeerow-dptname">{info.BankRecive}</div>
        <div className = "employeerow-dptname">{info.ApproveBy}</div>
        <Button variant="success" onClick={() => navigate(`/viewemployee/${info.EmployeeID}`)}>Go</Button>
    </div>
  )
}


const Paymentstatus = () => {
  const [add, setAdd] = useState(false);
  const [info, setInfo] = useState([]);
  const [addemployee, setAddemployee] = useState();
  const [addapprover, setAddapprover] = useState();
  const navigate = useNavigate();

  const approvePayment = () => {
    axios.post(configData.SERVER_URL+'/approvepayment', 
    {
      "EmployeeID": addemployee,
      "ApproveBy": addapprover
    }).then(res => console.log("response",res))
    .catch(err => console.log("error",err));
    }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(configData.SERVER_URL+'/paymentstatus', { headers: authHeader() })
      .catch(err => {
      console.log(err);
      navigate('/login');
      });
      setInfo(res.data);
    }
    fetchData();
  }, []);


  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ps-form-container">
        <div className="ps-form-title">
          <h5>Payment Status</h5>
          <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
          </div>
        <div className='form'>
          <Header/>
          {add && 
                  <div className='form'>
                    <Form> 
                      <Row className="mb-3">
                          <Form.Group as={Col} controlId="formAddEmployee">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Employee ID" defaultValue = { addemployee || ""} 
                                onChange = {e => setAddemployee(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formAddApprover">
                            <Form.Label>Approver ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Approver ID" defaultValue = { addapprover || ""}
                                onChange = {e => setAddapprover(e.target.value)}
                            />
                          </Form.Group>
                      </Row>
                      
                      <Button variant="success" type="submit" onClick={ approvePayment }>
                          Submit
                      </Button>
                    </Form>
                  </div>
                }
          {
            info.map((info,index) => {
              return(
                <PaymentRow info = {info} key ={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Paymentstatus
