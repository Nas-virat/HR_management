import React from 'react';

import { useNavigate } from 'react-router-dom';

import { FcOk, FcHighPriority, FcVlc } from "react-icons/fc";

import { Button } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar'; 
import Homecard from '../../../components/Homecard';
import './ViewEmployee.css';

import Logo from '../../../assets/img/employee1.jpg';

const data = {
    taskid: 'T000001',
    description: 'Collect the data from the user',
    startdate: '17/04/2022',
    deadline: '09/05/2022'
}

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
        <div>{info.taskid}</div>
        <div>{info.description}</div>
        <div>{info.startdate}</div>
        <div>{info.deadline}</div>
        <Button variant="success" onClick={() => navigate(`/viewtask/${info.taskid}`)}>Go</Button>
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

  const { id } = useParams();

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className = "Viewemployee-all-container">
        <div className ="Viewemployee-top">
            <div className ="Viewemployee-top-left">
                <div className = "viewemployee-img">
                    <img src={Logo} alt='employee1'></img>
                    <p>E000001</p>
                </div>
                <div className ="Viewemployee-top-left-content">
                  <h1>Mr. Meow SEANSEAN</h1>
 
                  <h5>HR Admin, Human Resource Department</h5>

                  <div className="viewemployee-information">
                    <div className='ViewEmployee-left-content'>
                      <p>Email</p>
                      <p>Phone</p>
                      <p>Recruitment Date</p>
                    </div>
                    <div className='ViewEmployee-right-content'>
                      <p>meawsean@mail.kmutt.ac.th</p>
                      <p>081-123-4569</p>
                      <p>12/12/2000</p>
                    </div>
                  </div>
                  <Button variant="success" onClick = {() => navigate(`/employee/${id}/edit`)}>EDIT</Button>
                  <Button variant="success" onClick = {() => navigate(`/viewemployee/${id}/moreinfo`)}>MORE INFO</Button>
                  
                </div>
            </div>

            <div className ="Viewemployee-top-right">
                <Homecard color='#077777' text='Today Attendance' value = {4} /> 
                <Homecard color='#077777' text='Late' value = {4}/>
                <Homecard color='#077777' text='Absent' value = {4}/>
            </div>
        </div>
        
        <div className = "Viewemployee-bottom">
            <div className='Viewemployee-bottom-left'>
               <h5>TASKS</h5>
                <div className = "Viewemployee-bottom-left-tasks">
                    <div>
                        <div>
                            <Header />
                            <TaskRow info = {data}/>
                            <TaskRow info = {data}/>
                            <TaskRow info = {data}/>
                        </div>
                    </div>
                </div>
                <h5>ATTENDANCE</h5>
                <div className = "Viewemployee-bottom-left-attendance">
                    <div>
                        <div className = "alltask-header-content">
                            <div>12/12/2001</div>
                            <div>13/12/2001</div>
                            <div>14/12/2001</div>
                            <div>15/12/2001</div>
                            <div>16/12/2001</div>
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
                    <Homecard color='#339331' text='income' value = {4} />
                    <Homecard color='#E74242' text='Today Attendance' value = {4} />
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
    </div>
  )
}

export default ViewEmployee