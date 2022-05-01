import React, { useEffect, useState } from 'react'

import { useNavigate ,useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar'; 

import axios from 'axios';
import Moment from 'react-moment';

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

const PromotionRow = ({info}) => {
    return(
      <div className = "promotion-content">
        <div className="promotion-Date"><Moment format="YYYY-MM-DD">{info.Datetime}</Moment></div>
        <div className="promotion-position">{info.RoleName}</div>
        <div className="promotion-Department">{info.DprtName}</div>
      </div>
      )
  }

const EmployeeMore = () => {
  const [EmployeeInfo, setEmployeeInfo] = useState({});
  const [EmployeePromotion, setEmployeePromotion] = useState([]);
  let navigate = useNavigate();

  const { id } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const res = await axios.get(`http://localhost:8080/employee/${id}`)
          setEmployeeInfo(res.data[0]);
          console.log("Employee Object",res.data[0]);

          const resPromotion = await axios.get(`http://localhost:8080/employeepromotion/${id}`);
          setEmployeePromotion(resPromotion.data);
          console.log("Promotion Object: ",resPromotion.data);

        }
      }
      catch (err){
        console.log("err",err);
      }
    }
    fetchData();
  },[id]);

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className = "EmployeeMore-all-container">
        <div className ="EmployeeMore-top">
                <div className = "EmployeeMore-img">
                    <img src={Logo} alt='employee1'></img>
                    <p>{EmployeeInfo.EmployeeID}</p>
                </div>
                <div className ="EmployeeMore-top-content">
                  <h1>{EmployeeInfo.fname} {EmployeeInfo.lname}</h1>
                  <h5>{EmployeeInfo.RoleName}, {EmployeeInfo.DprtName}</h5>
                  <br></br>
                  <h6>Personal information</h6>
                  <div className="EmployeeMore-information">
                    <div className='EmployeeMore-Email'>
                      <div className='EmployeeMore-left-content'>
                        <p>Email</p>
                      </div>
                      <div className='EmployeeMore-right-content'>
                        <p>{EmployeeInfo.Email}</p>
                      </div>
                    </div>
                    <div className='EmployeeMore-Address'>
                      <div className='EmployeeMore-left-content'>
                        <p>Address</p>
                      </div>
                      <div className='EmployeeMore-right-content'>
                        <p>{EmployeeInfo.Address}</p>
                      </div>
                    </div>
                    <div className='EmployeeMore-Recruitment'>
                      <div className='EmployeeMore-left-content'>
                        <p>Recruitment Date</p>
                      </div>
                      <div className='EmployeeMore-right-content'>
                        <p><Moment format="YYYY-MM-DD">{EmployeeInfo.RecruitDate}</Moment></p>
                      </div>
                    </div>
                    <div className='EmployeeMore-Bank'>
                      <div className='EmployeeMore-left-content'>
                        <p>Bank Account</p>
                      </div>
                      <div className='EmployeeMore-right-content'>
                        <p>{EmployeeInfo.BankRecive}, {EmployeeInfo.AccountNo}</p>
                      </div>
                    </div>
                    <div className='EmployeeMore-WorkStatus'>
                      <div className='EmployeeMore-left-content'>
                        <p>Status</p>
                      </div>
                      <div className='EmployeeMore-right-content'>
                        <p>{EmployeeInfo.WorkStatus === 'E' ? "Employed" : EmployeeInfo.WorkStatus === 'S' ? "Suspended" : "Quit"}</p>
                      </div>
                    </div>
                  </div>
                  <div className='EmployeeMore-button'>
                    <Button variant="success" onClick = {() => navigate(`/employee/${EmployeeInfo.EmployeeID}/edit`)}>EDIT</Button>
                    <Button variant="success" onClick={() => navigate(`/viewemployee/${EmployeeInfo.EmployeeID}`)}>BACK</Button>
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
                    <p>GPAX</p>
                  </div>
                  <div className='EmployeeMore-right-content'>
                    <p>
                    {
                      EmployeeInfo.EduLevel === 'B' ? "Bachelor's Degree" : 
                      EmployeeInfo.EduLevel === 'P' ? "Doctor of Philosophy (Ph.D)" : "Master Degree"
                    }
                    </p>
                    <p>{EmployeeInfo.Institution}</p>
                    <p>{EmployeeInfo.Major}</p>
                    <p>{EmployeeInfo.YearGrads}</p>
                    <p>{EmployeeInfo.GPAX}</p>
                  </div>
                </div>
            </div>
            <div className='EmployeeMore-bottom-right'>
                <h5>Promotion History</h5>
                <div className='EmployeeMore-Promotion'>
                  <div className='EmployeeMore-Promotion-header'>
                    <Header />
                  </div>
                  <div className='EmployeeMore-Promotion-content'>
                    {
                      EmployeePromotion && EmployeePromotion.map((info,index) => {
                        return(
                          <PromotionRow info = {info} key = {index}/>
                        )
                      })
                    }
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeMore