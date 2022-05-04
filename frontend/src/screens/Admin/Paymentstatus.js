import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

//import components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import Logo from '../../assets/img/employee1.jpg';
import authHeader from "../../auth-header";

import './Paymentstatus.css';

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
        <div className = "employeerow-image"><img src = {info.Image === null ? Logo :`http://localhost:8080/image/${info.Image}` } alt = "Employee-img"/>{info.EmployeeID}</div>
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
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8080/paymentstatus', { headers: authHeader() })
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
      <div className="form-container">
        <h5>Payment Status</h5>
        <div className='form'>
          <Header/>
          {
            info.map(info => {
              return(
                <PaymentRow info = {info}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Paymentstatus
