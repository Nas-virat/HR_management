import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { FcOk, FcHighPriority, FcVlc } from "react-icons/fc";
import Moment from 'react-moment';

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
        <div><Moment format="YYYY-MM-DD">{info.startdate}</Moment></div>
        <div><Moment format="YYYY-MM-DD">{info.deadline}</Moment></div>
        <Button variant="success" onClick={() => navigate(`/viewtask/${info.TaskID}`)}>Go</Button>
      </div>
      )
  }

const PaymentRow = ({text,value}) => {

  if(value >= 0){
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
  const [ EmployeePayment, setEmployeePayment ] = useState({});
  const [ LastAttendance, setLastAttendance ] = useState([]);

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

          const resPayment = await axios.get(`http://localhost:8080/payment/${id}`);
          setEmployeePayment(resPayment.data[0]);
          console.log("Employee Payment Object: ",resPayment.data[0]);

          const reslastattendance = await axios.get(`http://localhost:8080/lastattendance/${id}`);
          setLastAttendance(reslastattendance.data);
          console.log("Employee Last Attendance Object: ",reslastattendance.data);
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
              <img src = {EmployeeInfo.Image === null ? Logo :`http://localhost:8080/image/${EmployeeInfo.Image}` } alt = "Employee-img"/>
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
                    <p><Moment format="YYYY-MM-DD">{EmployeeInfo.RecruitDate}</Moment></p>
                  </div>
                </div>
                <div className='ViewEmployee-WorkStatus'>
                  <div className='ViewEmployee-left-content'>
                    <p>Status</p>
                  </div>
                  <div className='ViewEmployee-right-content'>
                    <p>{EmployeeInfo.WorkStatus === 'E' ? "Employed" : EmployeeInfo.WorkStatus === 'S' ? "Suspended" : "Quit"}</p>
                  </div>
                </div>
              </div>
              <Button variant="success" onClick = {() => navigate(`/employee/${id}/edit`)}>EDIT</Button>
              <Button variant="success" onClick = {() => navigate(`/viewemployee/${id}/moreinfo`)}>MORE INFO</Button>
            </div>
          </div>
          <div className ="Viewemployee-top-right">
            <Homecard color='#339331' text='On-Time' value = {EmployeeAttendance.ontime} /> 
            <Homecard color='#D9D22E' text='Total Late' value = {EmployeeAttendance.late}/>
            <Homecard color='#E74242' text='Total Absent' value = {EmployeeAttendance.absent}/>
          </div>
        </div>
        <div className = "Viewemployee-bottom">
          <div className='Viewemployee-bottom-left'>
            <h5>TASKS</h5>
            <div className = "Viewemployee-bottom-left-tasks">
              <div className = "Viewemployee-bottom-left-tasks-header">
                <Header />
               </div>
              <div className = "Viewemployee-bottom-left-tasks-body">
                {
                  EmployeeTask.length ? EmployeeTask.map(
                    (task,index) => <TaskRow key = {index} info = {task}/>
                  ) : <p style={{color:"red"}}>No Task</p>
                }
              </div>
            </div>
            <h5>ATTENDANCE</h5>
            <div className = "Viewemployee-bottom-left-attendance">
              <div>
                <div className = "Viewemployee-header-content">
                  {
                    LastAttendance.length ? LastAttendance.map(
                      (attendance,index) => <div key = {index}><Moment format="YYYY/MM/DD">{attendance.Time}</Moment></div>
                    ) : <p style={{color:"red"}}>No Attendance</p>
                  }
                </div>
                <hr className="solid"></hr>
                <div className= 'attendance-icon'>
                  {
                    LastAttendance.length ? LastAttendance.map(
                      (attendance,index) => 
                      <div key = {index}>
                        {attendance.Status === 'A' ? <FcHighPriority /> : attendance.Status === 'O' ? <FcOk /> : <FcVlc />}
                      </div>
                    ) : <p style={{color:"red"}}>No Attendance</p>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className = "Viewemployee-bottom-right">
            <div className="Viewemployee-thismonth">
              <h5>THIS MONTH</h5>
              <div className="Viewemployee-incomededuct">
                <Homecard color='#339331' text='Income' value = {EmployeePayment.BaseSalary + EmployeePayment.OTamount + EmployeePayment.BonusAmount} />
                <Homecard color='#E74242' text='Deduction' value = {EmployeePayment.totalDeduction} />
              </div>
            </div>
            <div className = "Viewemployee-bottom-right-payment">
              <PaymentRow text = 'Base Salary' value = {EmployeePayment.BaseSalary}/>
              <PaymentRow text = 'Total Deduction' value = {EmployeePayment.totalDeduction * (-1)}/>
              <PaymentRow text = 'Bonus' value = {EmployeePayment.BonusAmount}/>
              <PaymentRow text = 'Overtime Payment' value = {EmployeePayment.OTamount}/>
              <hr className="solid"></hr>
              <PaymentRow text = 'Total Amount' value = {EmployeePayment.TotalPayment}/>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}

export default ViewEmployee;