import React from 'react'
import './Sidebar.css';

//import {Link} from 'react-router-dom';



const Sidebar = () => {
    return(
        <div className="sidebar_bg">
            <h5>COMPANY</h5>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Employees
                </li>
                <li>
                    Departments
                </li>
                <li>
                    Tasks
                </li>
                <li>
                    Attendance
                </li>
            </ul>
        </div>
    )
    }


export default Sidebar;