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

const HomeEmployeeRow = ({data}) =>{
    let navigate = useNavigate();
    return (
      <div className = "home-employee-content">
        <div className = "home-employee-image"><img src={Logo} alt='employee1'></img></div>
        <div className = "home-employee-id">{data.EmployeeID}</div>
        <div className = "home-employee-name">{data.fname} {data.lname}</div>
        <div className = "home-employee-department">Total Late : {data.TotalLate}</div> 
        <Button variant="success" onClick={() => navigate(`/viewemployee/${data.EmployeeID}`)}>Go</Button>
      </div>
    )
  }

const Home = () => {

    const [HeadInformation, setHeadInformation] = useState({});
    const [EmployeeLate, setEmployeeLate] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/companyinfo')
        .catch(err => console.log("err",err))
        .then(res => {
            console.log("HeadInformation",res.data) 
            setHeadInformation(res.data[0])
        })
        axios.get('http://localhost:8080/mostlateemployee')
        .catch(err => console.log("err",err))
        .then(res => { 
            console.log("Employeelate",res.data)
            setEmployeeLate(res.data)
        })

    },[]);

    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="home-container">
                
            <h5><FaBeer/>DASHBOARD</h5>
                <div className="dashboard">
                    <div className='dashboard-upper-container'> 
                        <Homecard color='#339331' text='Total Employee' value={HeadInformation.TotalEmployee}/> 
                        <Homecard color='#D9D22E' text='Total Department' value={HeadInformation.TotalDepartment}/>
                        <Homecard color='#E74242' text='Total Task' value = {HeadInformation.TotalTask}/>
                    </div>
                </div>
                <h5>INFORMATION Top Employee Late (Times)</h5>
                <div className="information-contatainer">
                    <div className='information-employee'>
                        {EmployeeLate.map((data,index) => <HomeEmployeeRow key={index} data={data}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;