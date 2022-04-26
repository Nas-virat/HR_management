
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


const TaskRow = ({info}) => {
    let navigate = useNavigate();
    return(
      <div className = "alltask-task-content">
        <div>{info.taskID}</div>
        <div>{info.taskdesc}</div>
        <div>{info.SupervisorID}</div>
        <div>
        {
          info.status === 'A' ? "Active" : info.status === 'F' ? "Finished" : "Cancel"
        }
        </div>
        <div>{info.TotalMembers}</div>
        <Button variant="success" onClick={() => navigate(`/viewtask/${info.TaskID}`) }>Go</Button>
      </div>
      )
  }

export default TaskRow