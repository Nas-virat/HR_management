import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Homecard from '../../components/Homecard';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaBeer } from 'react-icons/fa';
import Logo from '../../assets/img/employee1.jpg';

import axios from 'axios';
import authHeader from "../../auth-header";

const HomeEmployeeRow = ({data}) =>{
    let navigate = useNavigate();
    return (
      <div className = "home-employee-content">
        <div className = "home-employee-image"><img src = {data.Image === null ? Logo :`http://localhost:8080/image/${data.Image}` } alt = "Employee-img"/></div>
        <div className = "home-employee-id">{data.EmployeeID}</div>
        <div className = "home-employee-name">{data.fname} {data.lname}</div>
        <div className = "home-employee-department">Total Late : { data.TotalLate }</div> 
        <Button variant="success" onClick={() => navigate(`/viewemployee/${data.EmployeeID}`)}>Go</Button>
      </div>
    )
  }

  const HomeAbsentEmployeeRow = ({data}) => {
    let navigate = useNavigate();
    return (
      <div className = "home-employee-content">
        <div className = "home-employee-image"><img src = {data.Image === null ? Logo :`http://localhost:8080/image/${data.Image}` } alt = "Employee-img"/></div>
        <div className = "home-employee-id">{data.EmployeeID}</div>
        <div className = "home-employee-name">{data.fname} {data.lname}</div>
        <div className = "home-employee-department">Total Absent : {data.TotalAbsent}</div> 
        <Button variant="success" onClick={() => navigate(`/viewemployee/${data.EmployeeID}`)}>Go</Button>
      </div>
    )
  }

const Home = () => {

    const [HeadInformation, setHeadInformation] = useState({});
    const [EmployeeLate, setEmployeeLate] = useState([]);
    const [EmployeeAbsent, setEmployeeAbsent] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token') === null){
            navigate('/login');
        }   
        else{
            axios.get('http://localhost:8080/companyinfo', { headers: authHeader() })
            .catch(err => console.log("err",err))
            .then(res => {
                console.log("HeadInformation",res) 
                setHeadInformation(res.data[0])
            })
            axios.get('http://localhost:8080/mostlateemployee', { headers: authHeader() })
            .catch(err => console.log("err",err))
            .then(res => { 
                console.log("Employeelate",res.data)
                setEmployeeLate(res.data)
            })
            axios.get('http://localhost:8080/mostabsentemployee', { headers: authHeader() })
            .catch(err => console.log("err",err))
            .then(res => {
                console.log("EmployeeAbsent",res.data)
                setEmployeeAbsent(res.data)
            })
        }
    },[]);

    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="home-container">
                
            <h5>Dashboard <FaBeer/></h5>
                <div className="dashboard">
                    <div className='dashboard-upper-container'> 
                        <Homecard color='#339331' text='Total Employee' value={HeadInformation.TotalEmployee}/> 
                        <Homecard color='#D9D22E' text='Total Department' value={HeadInformation.TotalDepartment}/>
                        <Homecard color='#E74242' text='Total Active Task' value = {HeadInformation.TotalTask}/>
                    </div>
                </div>
                <h5>Information Top Employee Late (Times)</h5>
                <div className="information-contatainer">
                    <div className='information-employee'>
                        {EmployeeLate.map((data,index) => <HomeEmployeeRow key={index} data={data}/>)}
                    </div>
                </div>
                <h5>Information Top Employee Absent (Times)</h5>
                <div className="information-contatainer">
                    <div className='information-employee'>
                        {EmployeeAbsent.map((data,index) => <HomeAbsentEmployeeRow key={index} data={data}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;