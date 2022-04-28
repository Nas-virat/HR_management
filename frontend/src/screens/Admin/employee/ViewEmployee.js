import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';


import { FcOk, FcHighPriority, FcVlc } from "react-icons/fc";

import { Button } from 'react-bootstrap';


import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar'; 
import Homecard from '../../../components/Homecard';
import './ViewEmployee.css';

import Logo from '../../../assets/img/employee1.jpg';

import axios from 'axios';

const Header = () => {
    return(
     <>
       <div className = "ViewEmployee-header-content">
         <div className = "ViewEmployee-header-ID">TaskID</div>
         <div className = "ViewEmployee-header-desc"> Task Description</div>
         <div className = "ViewEmployee-header-startdate">Start Date</div>
         <div className = "ViewEmployee-header-deadline">Deadline</div>
       </div>
       <hr className="solid"></hr>
     </>
 
    )
 }

 const TaskRow = ({info}) => {
    let navigate = useNavigate();
    return(
      <div className = "ViewEmployee-task-content">
        <div>{info.TaskID}</div>
        <div>{info.taskdesc}</div>
        <div>{info.startdate}</div>
        <div>{info.deadline}</div>
        <Button variant="success" onClick={() => navigate(`/viewtask/${info.TaskID}`)}>Go</Button>
      </div>
      )
  }

const PaymentRow = ({text,value}) => {

  if(value > 0){
    return (
      <div className = 'Viewemployee-payment-row'>
        <p>{text}</p>
         <p style = {{'color':'green'}} >{value}</p>  
      </div>
    )
  }
  else{
    return (
      <div className = 'Viewemployee-payment-row'>
        <p>{text}</p>
         <p style = {{'color':'red'}} >{value}</p>  
      </div>
    )
  }
}


const ViewEmployee = () => {

  let navigate = useNavigate();

  const [ EmployeeInfo,setEmployeeInfo ] = useState({});
  const [ EmployeeTask, setEmployeeTask ] = useState([]);
  const [ EmployeeAttendance, setEmployeeAttendance ] = useState({});
  //const [ EmployeePayment, setEmployeePayment] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const res = await axios.get(`http://localhost:8080/employee/${id}`)
          setEmployeeInfo(res.data[0]);
          console.log("Employee Object",res.data[0]);

          const resTask = await axios.get(`http://localhost:8080/employeetask/${id}`);
          setEmployeeTask(resTask.data);
          console.log("Employee Task Object: ",resTask.data);

          const resAttendance = await axios.get(`http://localhost:8080/employeeattendance/${id}`);
          setEmployeeAttendance(resAttendance.data[0]);
          console.log("Employee Attendance Object: ",resAttendance.data[0]);

          //const resPayment = await axios.get(`http://localhost:8080/employeepayment/${id}`);
          //setEmployeePayment(resPayment.data);
          //console.log("Employee Payment Object: ",resPayment.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className = "Viewemployee-all-container">
        <div className ="Viewemployee-top">
          <div className ="Viewemployee-top-left">
            <div className = "viewemployee-img">
              <img src = {Logo} alt = "Employee-img"/>
              <p>{EmployeeInfo.EmployeeID}</p>
            </div>
            <div className ="Viewemployee-top-left-content">
              <h1>{EmployeeInfo.fname} {EmployeeInfo.lname}</h1>
              <h5>{EmployeeInfo.RoleName}, {EmployeeInfo.DprtName}</h5>

              <div className="viewemployee-information">
                <div className='ViewEmployee-Email'>
                  <div className='ViewEmployee-left-content'>
                    <p>Email</p>
                  </div>
                  <div className='ViewEmployee-right-content'>
                    <p>{EmployeeInfo.Email}</p>
                  </div>
                </div>
                <div className='ViewEmployee-Address'>
                  <div className='ViewEmployee-left-content'>
                    <p>Address</p>
                  </div>
                  <div className='ViewEmployee-right-content'>
                    <p>{EmployeeInfo.Address}</p>
                  </div>
                </div>
                <div className='ViewEmployee-Recruitment'>
                  <div className='ViewEmployee-left-content'>
                    <p>Recruitment Date</p>
                  </div>
                  <div className='ViewEmployee-right-content'>
                    <p>{EmployeeInfo.RecruitDate}</p>
                  </div>
                </div>
              </div>
              <Button variant="success" onClick = {() => navigate(`/employee/${id}/edit`)}>EDIT</Button>
              <Button variant="success" onClick = {() => navigate(`/viewemployee/${id}/moreinfo`)}>MORE INFO</Button>
            </div>
          </div>
          <div className ="Viewemployee-top-right">
            <Homecard color='#339331' text='Total Attendance' value = {EmployeeAttendance.ontime} /> 
            <Homecard color='#D9D22E' text='Total Late' value = {EmployeeAttendance.late}/>
            <Homecard color='#E74242' text='Total Absent' value = {EmployeeAttendance.absent}/>
          </div>
        </div>
        <div className = "Viewemployee-bottom">
          <div className='Viewemployee-bottom-left'>
            <h5>Tasks</h5>
            <div className = "Viewemployee-bottom-left-tasks">
              <Header />
              {
                EmployeeTask.length ? EmployeeTask.map(
                  (task,index) => <TaskRow key = {index} info = {task}/>
                ) : <p style={{color:"red"}}>No Task</p>
              }
            </div>
            <h5>Attendace</h5>
            <div className = "Viewemployee-bottom-left-attendance">
              <div>
                <div className = "Viewemployee-header-content">
                  <div>12/12/2001</div>
                  <div>13/12/2001</div>
                  <div>12/12/2001</div>
                  <div>13/12/2001</div>
                  <div>13/12/2001</div>
                </div>
                <hr className="solid"></hr>
                <div className= 'attendance-icon'>
                  <div><FcOk /></div>
                  <div><FcHighPriority /></div>
                  <div><FcVlc /></div>
                  <div><FcVlc /></div>
                  <div><FcOk /></div>
                </div>
              </div>
            </div>
          </div>
          <div className = "Viewemployee-bottom-right">
            <h5>Payment</h5>
            <div className = "Viewemployee-bottom-right-payment Viewemployee-bottom-left-tasks">
              <PaymentRow text = 'January 2022 Invoice' value ={25000}/>
              <PaymentRow text = 'February 2022 Invoice' value = {23000}/>
            </div>
            <div className="Viewemployee-thismonth">
              <h5>This month</h5>
              <div className="Viewemployee-incomededuct">
                <Homecard color='#D9D22E' text='Late' value = {4} />
                <Homecard color='#E74242' text='Absent' value = {4} />
              </div>
            </div>
            <div className = "Viewemployee-bottom-right-payment Viewemployee-bottom-left-tasks">
              <PaymentRow text = 'Base Salary' value = {25000}/>
              <PaymentRow text = 'Medical Expense' value = {-500}/>
              <PaymentRow text = 'Overtime Payment' value = {1000}/>
              <hr className="solid"></hr>
              <PaymentRow text = 'Total Amount' value = {25500}/>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}

export default ViewEmployee;