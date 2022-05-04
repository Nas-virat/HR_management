
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import "./TaskRow.css";

const TaskRow = ({info}) => {
    let navigate = useNavigate();
    return(
      <div className = "alltask-task-content">
        <div className = "taskrow-taskID">{info.taskID}</div>
        <div className = "taskrow-desc">{info.taskdesc}</div>
        <div className = "taskrow-supervisorID">{info.SupervisorID}</div>
        <div className = "taskrow-status">
        {
          info.status === 'A' ? "Active" : info.status === 'F' ? "Finished" : "Cancel"
        }
        </div>
        <div className = "taskrow-member">{info.TotalMembers}</div>
        <Button variant="success" onClick={() => navigate(`/viewtask/${info.taskID}`) }>Go</Button>
      </div>
      )
  }

export default TaskRow