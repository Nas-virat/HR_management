import React from 'react';

import './Home.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaBeer } from 'react-icons/fa';

const Home = () => {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="home-container">
                <div className="dashboard">
                    <p><FaBeer/>DASHBOARD</p>
                    <div className='container'> 
                        
                        <div className='column'>
                            <p>Today Attendance</p>
                        </div>
                        <div className='column'>
                            <p>Late</p>
                        </div>
                        <div className='column'>
                            <p>Absent</p>
                        </div>
                    </div>
                </div>
                <div className="information">
                    <p>INFORMATION</p>
                    <div className='container'>
                        <div className='column'>
                            <p>Today Attendance</p>
                        </div>
                        <div className='column'>
                            <p>Late</p>
                        </div>
                        <div className='column'>
                            <p>Absent</p>
                        </div>
                    </div>
                    <Button href="login" variant="outline-primary">Log In</Button>{' '}
                </div>
            </div>
        </div>
    );
}

export default Home;