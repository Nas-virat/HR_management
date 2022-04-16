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
                    className = {({isActive}) => (isActive ? "selected" : 'notselected')}
                > 
                    Home
                </NavLink>
                <NavLink 
                    to = '/department' 
                    className = {({isActive}) => (isActive ? "selected" : 'notselected')}
                > 
                    Department
                </NavLink>
                <NavLink 
                    to = "/employee" 
                    className = {({isActive}) => (isActive ? "selected" : 'notselected')}
                > 
                    Employee
                </NavLink>
                <NavLink 
                    to = "/task" 
                    className = {({isActive}) => (isActive ? "selected" : 'notselected')}
                > 
                    Task
                </NavLink>
                <NavLink 
                    to = "/attendance" 
                    className = {({isActive}) => (isActive ? "selected" : 'notselected')}
                > 
                    Attendance
                </NavLink>
                <NavLink 
                    to = "/bonus" 
                    className = {({isActive}) => (isActive ? "selected" : 'notselected')}
                > 
                    Bonus
                </NavLink>
            </div>
        </div>
    )
    }


export default Sidebar;