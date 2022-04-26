import React from 'react'
import './Sidebar.css';

import {NavLink} from 'react-router-dom';


const SectionLink = ({name,to}) => {
    return(
        <NavLink 
            to = {to}
            className = {({isActive}) => (isActive ? "selected" : 'notselected')}
        > 
            {name}
        </NavLink>
    )
}


const Sidebar = () => {
    return(
        <div className="sidebar_bg">
            <h5>COMPANY</h5>
            <div className='sidebar-container'>
                <SectionLink name="Home" to = '/home'/>
                <SectionLink name="Department" to = '/department'/>
                <SectionLink name="Employee" to = '/employee'/>
                <SectionLink name="Task" to = '/task'/>
                <SectionLink name="Attendance" to = '/attendance'/>
                <SectionLink name="Bonus" to = '/bonus'/>
                <SectionLink name="Promotion" to = '/promotion'/>
                <SectionLink name="Deduction" to = '/deduction'/>
                <SectionLink name="AddNewRole" to = '/addroles'/>
                <SectionLink name="OTtask" to = '/OTtask'/>
            </div>
        </div>
    )
    }


export default Sidebar;