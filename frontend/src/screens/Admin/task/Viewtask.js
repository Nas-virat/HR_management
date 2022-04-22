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
  const [taskMember, setTaskMember] = useState([]);
  const { id } = useParams();

  //console.log(id);

  /* update the task status */
  const updateStatus = () => {
    if (status === 'A') {
      setStatus('F');
    }
    else {
      setStatus('A');
    }
      axios.put('http://localhost:8080/updateTaskStatus', {
          "TaskID" : taskInfo.TaskID,
          "status" : status })
        .then((res) => console.log("UPDATE Status: ", res))
        .catch((err) => console.log("err : ",err))
  }
  
  const cancelStatus = () => {
    setStatus('C');
     axios.put('http://localhost:8080/updateTaskStatus', {
      "TaskID" : taskInfo.TaskID,
      "status" : status })
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
        
        const resMember = await axios.get(`http://localhost:8080/taskMember/${id}`);
        setTaskMember(resMember.data);
        console.log("Task Member Object: ",resMember.data);
        }
      }
      catch(err) {
        console.log("err",err);
      }
    }
    fetchData();
  }, [id]);

  


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