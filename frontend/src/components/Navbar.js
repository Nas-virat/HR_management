import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/img/HRMS.png'
import ProfilePicture from '../assets/img/employee1.jpg'
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar-container">
            <Link to='/' className="navbar-logo">
                <img src={Logo} alt='hr-logo'></img>
            </Link>
            <div className="user-profile-navbar">
                <Link to ='user' className='profile-img'>
                    <img className="image-profile" src={ProfilePicture} alt='hr-logo'></img> 
                </Link> 
                <div className="right-profile">
                    <div className="name-user">
                        Meaw Sean
                    </div>
                    <div className="role-user">
                        HR ADMIN
                    </div>
                </div>             
            </div>
        </nav>
    )
}

export default Navbar