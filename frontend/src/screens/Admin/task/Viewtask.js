import React from 'react';

import { Button } from 'react-bootstrap';
import { useState } from 'react';

//css
import '../Forms.css';
import './Viewtask.css';

//components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';


const data = {
  "Id": "T000001",
  "Name": "Meaw sean",
  "Position": "HR Admin",
  "Department": "Human Resource"
}

const Header = () => {
   return(
    <>
      <div className = "header-content">
        <div>ID</div>
        <div>Name</div>
        <div>Position</div>
        <div>Department</div>
      </div>
      <hr className="solid"></hr>
    </>

   )
}


const Viewtask = () => {

  const [add, setAdd] = useState(false);

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='form-container'>
            <div className = "viewtask-task-bg">
                <h5>Task</h5>
                <div className = "task-desc-content">
                    <h1>T000001</h1>
                    <p>Description: Collect the data from the user. Analyze and report to the head department before the end of the month.</p>
                    <p>Deadline: 16/04/2022</p>
                    <p>Status: Active</p>
                </div>
            </div>
            <div className = "viewtask-supervisor-bg">
                <h5>Supervisor</h5>
                <Header />
                <div className = "supervisor-content">
                    <div>{data.Id}</div>
                    <div>{data.Name}</div>
                    <div>{data.Position}</div>
                    <div>{data.Department}</div>
                </div>
            </div>
            <div className = "viewtask-members-bg">
                <h5>Members</h5>
                <Header />
                <div className = "supervisor-content">
                    <div>{data.Id}</div>
                    <div>{data.Name}</div>
                    <div>{data.Position}</div>
                    <div>{data.Department}</div>
                    {/*Button Go */}
                </div>
                <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
                {add && <Button variant="success">Hello</Button>}
            </div>
        </div>
    </div>
  )
}

export default Viewtask