import React from 'react';

import { Button, Form } from 'react-bootstrap';
import { useState ,useEffect} from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

//css
import '../Forms.css';
import './Viewtask.css';

//components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import EmployeeRow from '../../../components/EmployeeRow';


const data = {
  EmployeeID: "4002",
  fname: "Meaw sean",
  lname: "HR Admin",
  Email: "TEST",
  Institution: "Human Resource"
}


const taskdata = {
  TaskID: "4002",
  taskdesc : "Collect the data from the user. Analyze and report to the head department before the end of the month.",
  deadline : "16/04/2022",
  status : "A"  
}


const Header = () => {
   return(
    <>
      <div className = "header-content">
        <div className = "header-content-ID">ID</div>
        <div className = "header-content-Name">Name</div>
        <div className = "header-content-Position">Position</div>
        <div className = "header-content-Department">Department</div>
      </div>
      <hr className="solid"></hr>
    </>

   )
}

const Viewtask = () => {
  const [add, setAdd] = useState(false);
  const [status,setStatus] = useState('A');
  const [taskInfo, setTaskInfo] = useState({});
  const { id } = useParams();

  //console.log(id);
  const updateStatus = () => {
    if (status === 'A'){
      setStatus('F');
    }
    else{
      setStatus('A');
    }
  }

  const cancelStatus = () => {
    setStatus('C');
    console.log("Status cancel", status);
  }
  
  /*
   * get Task Descirption in viewtask
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
        const res = await axios.get(`http://localhost:8080/task/${id}`)
        console.log(`http://localhost:8080/task/${id}`);
        console.log("Task Object",res.data); 
        console.log("Task Description",res.data[0].taskdesc);  
        setTaskInfo(res.data[0]);
        console.log("TaskInfo: ",taskInfo);
        }
      }
      catch(err) {
        console.log("err",err);
      }
    }
    fetchData();
  }, [id]);

  /* update the task status */
  /*useEffect(() => {
    const updateData = async () => {
    try {
      const res = await axios.put('http://localhost:8080/updateTaskStatus', {
          "TaskID" : taskInfo.TaskID,
          "status" : status
        }
      );
      console.log("UPDATE data", res);
    }
    catch(err) {
        console.log("err",err);
      }
    }
    updateData();
    },[status]
  );*/

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='form-container'>
            <h5>Task</h5>
            <div className = "viewtask-task-bg">
                <div className = "task-desc-content">
                  <h1>{taskInfo.TaskID}</h1>
                  <p>Description: {taskInfo.taskdesc}</p>
                  <p>Deadline: {taskInfo.deadline}</p>
                  <Button variant = {status === 'A' ? "success" : "warning" } onClick = {updateStatus}>Status : {status === 'A' ? 'Active' :'Finish'}</Button>
                  <Button variant = "danger" onClick = {cancelStatus}>Cancel</Button>
                </div>
            </div>
            <h5>Supervisor</h5>
            <div className = "viewtask-supervisor-bg">
                <Header />
                <EmployeeRow info = {data}/>
            </div>
            <div className ="allemployee-title">
              <h5>Members</h5>
              <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
            </div>
            <div className = "viewtask-members-bg">
                <Header />
                {add && 
                  <div className='form'>
                    <Form> 
                      <Form.Group className='mb-3' controlId="formOTRate">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className="inputform" type="text" placeholder="Enter Employee ID" />
                      </Form.Group>
                      <Button variant="success" type="submit">
                          Submit
                      </Button>
                    </Form>
                  </div>
                }
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
            </div>
        </div>
    </div>
  )
}

export default Viewtask