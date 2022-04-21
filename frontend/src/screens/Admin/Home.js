import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Homecard from '../../components/Homecard';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaBeer } from 'react-icons/fa';
import Logo from '../../assets/img/employee1.jpg';

const HomeEmployeeRow = () =>{
    let navigate = useNavigate();
    return(
      <div className = "home-employee-content">
        <div className = "home-employee-image"><img src={Logo} alt='employee1'></img></div>
        <div className = "home-employee-name">Meaw Sean</div>
        <div className = "home-employee-department">Human Resource</div>
        <Button variant="success" onClick={() => navigate(`/viewemployee/:id`)}>Go</Button>
      </div>
      )
  }

const Home = () => {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="home-container">
                
            <h5><FaBeer/>DASHBOARD</h5>
                <div className="dashboard">
                    <div className='dashboard-upper-container'> 
                        <Homecard color='#339331' text='Today Attendance' /> 
                        <Homecard color='#D9D22E' text='Late' />
                        <Homecard color='#E74242' text='Absent' />
                    </div>
                    <div className='dashboard-lower-container'> 
                        <div>
                            <p>Payment</p>
                            <h1>500,000</h1>
                        </div>
                    </div>
                </div>
                <h5>INFORMATION</h5>
                <div className="information-contatainer">
                    <div className='information-employee'>
                        <HomeEmployeeRow />
                        <HomeEmployeeRow />
                        <HomeEmployeeRow />
                    </div>
                    <div className='total-info'>
                        <Homecard color='#077777' text='Total Employee' />
                        <Homecard color='#077777' text='Total Employee' />
                    </div>
                </div>
                <Button href="login" variant="outline-primary">Log In</Button>{' '}
            </div>
        </div>
    );
}

export default Home;