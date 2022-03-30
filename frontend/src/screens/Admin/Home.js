import React from 'react';

import './Home.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Home = () => {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="main">
                <div className="dashboard">
                    <p>DASHBOARD</p>
                    <div className='container'>
                        <div className='col'>
                            <p>Today Attendance</p>
                        </div>
                        <div className='col'>
                            <p>Late</p>
                        </div>
                        <div className='col'>
                            <p>Absent</p>
                        </div>
                    </div>
                </div>
                <div className="information">
                    <p>INFORMATION</p>
                </div>
            </div>
        </div>
    );
}

export default Home;