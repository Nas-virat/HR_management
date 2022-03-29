import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>HRMS</h2>
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