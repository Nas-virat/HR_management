import React from 'react'

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar'; 
import './EmployeeMore.css';

import Logo from '../../../assets/img/employee1.jpg';

const Header = () => {
    return(
     <>
       <div className = "alltask-header-content">
         <div>Date</div>
         <div>Promoted Position</div>
         <div>Department</div>
       </div>
       <hr className="solid"></hr>
     </>
    )
 }

const PromotionRow = () => {
    return(
      <div className = "promotion-content">
        <div className="promotion-Date">2002-12-12</div>
        <div className="promotion-position">CEO</div>
        <div className="promotion-Department">WEEEDing Engineering</div>
      </div>
      )
  }

const EmployeeMore = () => {

  let navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className = "EmployeeMore-all-container">
        <div className ="EmployeeMore-top">
                <div className = "EmployeeMore-img">
                    <img src={Logo} alt='employee1'></img>
                    <p>E000001</p>
                </div>
                <div className ="EmployeeMore-top-content">
                  <h1>Mr. Meow SEANSEAN</h1>
                  <h5>HR Admin, Human Resource Department</h5>
                  <br></br>
                  <h6>Personal information</h6>
                  <div className="EmployeeMore-information">
                    <p>Email: meawsean@mail.kmutt.ac.th</p>
                    <p>Phone: 081-123-4569</p>
                    <p>Recruitment Date: 12/12/2000</p>
                    <p>Address: Under the bridge</p>
                    <p>Bank Account: Meow Bank, 123-1-12345-1</p>
                    <Button variant="success" onClick = {() => navigate(`/employee/001/edit`)}>EDIT</Button>
                  </div>
                </div>
        </div>
        <div className = "EmployeeMore-bottom">
            <div className='EmployeeMore-bottom-left'>
                <h5>Education Information</h5>
                <div className='EmployeeMore-Education'>
                    <p>Education Level: Doctor of Philosophy (Ph.D.)</p>
                    <p>Institutio: KMUTT</p>
                    <p>Major: Computer Engineering</p>
                    <p>Graduation Year: 2012</p>
                    <p>Gpax: 4.00</p>
                </div>
            </div>
            <div className='EmployeeMore-bottom-right'>
                <h5>Promotion History</h5>
                <div className='EmployeeMore-Promotion'>
                  <Header />
                  <PromotionRow />
                  <PromotionRow />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeMore