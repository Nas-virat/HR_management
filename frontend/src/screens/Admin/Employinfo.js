import React from 'react';
import { useState } from 'react';

const Employinfo = () => {

    const [role, setrole] = useState("Admin");

    return(
        <div>
        { role === "Admin" &&(
            <Employinfo/>
        )};
        </div>
    );
}

export default Employinfo;