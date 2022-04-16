import React from 'react'
import './Sidebar.css';

import {NavLink} from 'react-router-dom';



const Sidebar = () => {
    return(
        <div className="sidebar_bg">
            <h5>COMPANY</h5>
            <div className='sidebar-container'>
                <NavLink 
                    to = '/home'
                    className = 'notselected'  
                    activeClassName = "selected"
                > 
                    Home
                </NavLink>
                <NavLink 
                    to = '/department' 
                    className = 'notselected'  
                    activeClassName = "selected"
                > 
                    Department
                </NavLink>
                <NavLink 
                    to = "/employee" 
                    className = 'notselected'  
                    activeClassName = "selected"
                > 
                    Employee
                </NavLink>
                <NavLink 
                    to = "/task" 
                    className = 'notselected'  
                    activeClassName = "selected"
                > 
                    Task
                </NavLink>
                <NavLink 
                    to = "/attendance" 
                    className = 'notselected'  
                    activeClassName = "selected"
                > 
                    Attendance
                </NavLink>
                <NavLink 
                    to = "/bonus" 
                    className = 'notselected'  
                    activeClassName = "selected"
                > 
                    Bonus
                </NavLink>
            </div>
        </div>
    )
    }


export default Sidebar;