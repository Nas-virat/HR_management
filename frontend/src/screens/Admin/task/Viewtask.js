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


const Header = () => {
   return(
    <>
      <div className = "task-header-content">
        <div className = "task-header-content-ID">ID</div>
        <div className = "task-header-content-Name">Name</div>
        <div className = "task-header-content-Position">Position</div>
        <div className = "task-header-content-Department">Department</div>
      </div>
      <hr className="solid"></hr>
    </>

   )
}

const Viewtask = () => {
  const [add, setAdd] = useState(false);
  const [status,setStatus] = useState();
  const [taskInfo, setTaskInfo] = useState({});
  const [taskMember, setTaskMember] = useState([]);
  const [taskSupervisor, setTaskSupervisor] = useState();

  const { id } = useParams();

  //console.log(id);

  /* update the task status */
  const updateStatus = () => {
    if (status === 'A') {
      setStatus('F');
      taskInfo.status = 'F';
    }
    if(status === 'F'){
      setStatus('A');
      taskInfo.status = 'A';
    }
    if(status === 'C'){
      setStatus('A');
      taskInfo.status = 'A';
    }
    console.log("updateStatus");
      axios.put('http://localhost:8080/updateTaskStatus', {
          "TaskID" : taskInfo.TaskID,
          "status" : taskInfo.status })
        .then((res) => console.log("UPDATE Status: ", res))
        .catch((err) => console.log("err : ",err))
  }
  
  const cancelStatus = () => {
    setStatus('C');
    taskInfo.status = 'C';
     axios.put('http://localhost:8080/updateTaskStatus', {
      "TaskID" : taskInfo.TaskID,
      "status" : 'C'})
    .then((res) => console.log("CANCEL Status: ", res))
    .catch((err) => console.log("err : ",err))
  }
  
  /*
   * get Task Description in viewtask
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) { 
        const res = await axios.get(`http://localhost:8080/task/${id}`)
        setTaskInfo(res.data[0]);
        console.log("Task Object",res.data[0]); 
        setStatus(res.data[0].status);
        console.log("status init",status);
        
        const resMember = await axios.get(`http://localhost:8080/taskmember/${id}`);
        setTaskMember(resMember.data);
        console.log("Task Member Object: ",resMember.data);

        const resSupervisor = await axios.get(`http://localhost:8080/tasksupervisor/${id}`);
        setTaskSupervisor(resSupervisor.data);
        console.log("Task Supervisor Object: ",resSupervisor.data);
        }
      }
      catch(err) {
        console.log("err",err);
      }
    }
    fetchData();
  }, [id,status]);

  


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
                  <Button variant = {taskInfo.status === 'A' ? "success" :taskInfo.status === 'F' ? "warning" : "danger" } onClick = {updateStatus}>Status : {taskInfo.status}</Button>
                  <Button variant = {taskInfo.status === "danger"} onClick = {cancelStatus}>Cancel</Button>
                </div>
            </div>
            <h5>Supervisor</h5>
            <div className = "viewtask-supervisor-bg">
                <Header />
                {
                  taskSupervisor && taskSupervisor.map((supervisor,index) => {
                    return(
                     <EmployeeRow info = {supervisor} key = {index}/>
                    )
                  })
                }
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
                {
                  taskMember && taskMember.map((member,index) => {
                    return(
                     <EmployeeRow info = {member} key = {index}/>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default Viewtask