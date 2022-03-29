import React from 'react'
import './Navbar.css';

import HRlogo from "../asset/img/HRMS.png";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar_logo">
                <img src={HRlogo} alt='hr-logo'></img>
            </div>
            
            <div className="user_profile_navbar">
                <div className="image_profile">
                  
                </div>
                <div className="right_profile">
                    <div className="name_user">
                        Meaw Sean
                    </div>
                    <div className="role_user">
                        HR ADMIN
                    </div>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;