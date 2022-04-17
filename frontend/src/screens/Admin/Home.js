import React from 'react';

import './Home.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Homecard from '../../components/Homecard';

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
                        <Homecard color='#339331' text='Today Attendance'></Homecard> 
                        <Homecard color='#D9D22E' text='Late'></Homecard>
                        <Homecard color='#E74242' text='Absent'></Homecard>
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