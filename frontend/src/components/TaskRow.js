
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


const TaskRow = ({info}) => {
    let navigate = useNavigate();
    return(
      <div className = "alltask-task-content">
        <div>{info.taskid}</div>
        <div>{info.description}</div>
        <div>{info.supervisorid}</div>
        <div>{info.status}</div>
        <Button variant="success" onClick={() => navigate(`/viewtask/${info.taskid}`) }>Go</Button>
      </div>
      )
  }

export default TaskRow