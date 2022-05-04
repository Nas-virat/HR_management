import React from 'react'
import './Sidebar.css';

import {NavLink} from 'react-router-dom';

import {IoIosHome} from 'react-icons/io';
import { BiBuildings, BiMoney, BiTask, BiTimeFive, BiLogOutCircle} from "react-icons/bi";
import {BsFillPeopleFill} from 'react-icons/bs';
import { MdOutlineAssessment, MdWork} from "react-icons/md";
import {GiUpgrade} from 'react-icons/gi';
import {AiFillMinusCircle} from 'react-icons/ai';
import {GrAddCircle, GrStatusGood} from 'react-icons/gr';

const SectionLink = ({name,to,icon}) => {
    return(
        <NavLink 
            to = {to}
            className = {({isActive}) => (isActive ? "selected" : 'notselected')}
        > 
            {icon}{name}
        </NavLink>
    )
}


const Sidebar = () => {
    return(
        <div className="sidebar_bg">
            <h5>COMPANY</h5>
            <div className='sidebar-container'>
                <SectionLink name="Home" to = '/home' icon={<IoIosHome/>}/>
                <SectionLink name="Department" to = '/department' icon={<BiBuildings/>}/>
                <SectionLink name="Employee" to = '/employee' icon={<BsFillPeopleFill/>}/>
                <SectionLink name="Task" to = '/task' icon={<MdOutlineAssessment/>}/>
                <SectionLink name="Role" to = '/role' icon={<GrAddCircle/>}/>
                <SectionLink name="Attendance" to = '/attendance' icon={<MdWork/>}/>
                <SectionLink name="Bonus" to = '/bonus' icon={<BiMoney/>}/>
                <SectionLink name="Promotion" to = '/promotion' icon={<GiUpgrade/>}/>
                <SectionLink name="Deduction" to = '/deduction' icon={<AiFillMinusCircle/>}/>
                <SectionLink name="OverTime" to = '/OTtask' icon={<BiTimeFive/>}/>
                <SectionLink name="Payment" to = '/paymentstatus' icon={<GrStatusGood/>}/>
                <SectionLink name="logout" to = '/login' icon={<BiLogOutCircle/>}/>
            </div>
        </div>
    )
}


export default Sidebar;