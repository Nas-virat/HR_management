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
                    <div className='EmployeeMore-left-content'>
                      <p>Email</p>
                      <p>Phone</p>
                      <p>Recruitment Date</p>
                      <p>Address</p>
                      <p>Bank Account</p>
                    </div>
                    <div className='EmployeeMore-right-content'>
                      <p>meawsean@mail.kmutt.ac.th</p>
                      <p>081-123-4569</p>
                      <p>12/12/2000</p>
                      <p>Under the bridge</p>
                      <p>Meow Bank, 123-1-12345-1</p>
                    </div>
                  </div>
                  <div className='EmployeeMore-button'>
                    <Button variant="success" onClick = {() => navigate(`/employee/001/edit`)}>EDIT</Button>
                  </div>
                </div>
        </div>
        <div className = "EmployeeMore-bottom">
            <div className='EmployeeMore-bottom-left'>
                <h5>Education Information</h5>
                <div className='EmployeeMore-Education'>
                  <div className='EmployeeMore-left-content'>
                    <p>Education Level</p>
                    <p>Institution</p>
                    <p>Major</p>
                    <p>Graduation Year</p>
                    <p>Gpax</p>
                  </div>
                  <div className='EmployeeMore-right-content'>
                    <p>Doctor of Philosophy (Ph.D.)</p>
                    <p>KMUTT</p>
                    <p>Computer Engineering</p>
                    <p>2012</p>
                    <p>4.00</p>
                  </div>
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