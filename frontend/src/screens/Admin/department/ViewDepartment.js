import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//css
import '../Forms.css';
import './ViewDepartment.css';

//components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import EmployeeRow from '../../../components/EmployeeRow';

import axios from 'axios';


const Header = () => {
   return(
    <>
      <div className = "ViewDepartment-header-content">
        <div className = "ViewDepartment-header-content-ID">ID</div>
        <div className = "ViewDepartment-header-content-Name">Name</div>
        <div className = "ViewDepartment-header-content-Position">Position</div>
        <div className = "ViewDepartment-header-content-Department">Department</div>
      </div>
      <hr className="solid"></hr>
    </>

   )
}



const ViewDepartment = () => {
  const [departmentinfo, setDepartmentInfo] = useState({});
  const [departmentmember,setDepartmentMember] = useState([]);
  const [departmenthead,setDepartmentHead] = useState([]);
  const { id } = useParams();

  /**
   * get task description
   */
   useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) { 
        const res = await axios.get(`http://localhost:8080/department/${id}`)
        setDepartmentInfo(res.data[0]);
        console.log("Department Object",res.data[0]); 
        
        const resMember = await axios.get(`http://localhost:8080/departmentmember/${id}`);
        setDepartmentMember(resMember.data);
        console.log("Department Member Object: ",resMember.data);

        const resHead = await axios.get(`http://localhost:8080/departmenthead/${id}`);
        setDepartmentHead(resHead.data);
        console.log("Department Head Object: ",resHead.data);
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
        <h5>Department</h5>
            <div className = "viewtask-task-bg">
                <div className = "task-desc-content">
                    <h1>{departmentinfo.DprtName}</h1>
                    <p>{departmentinfo.DprtDesc}</p>
                </div>
            </div>
            <h5>Head of Department</h5>
            <div className = "viewtask-supervisor-bg">
                <Header />
                { departmenthead && departmenthead.map( (departmenthead, index) => {
                    return(
                      <EmployeeRow info = {departmenthead} key = {index}/>
                    )
                  })
                }
            </div>
            <div className ="allemployee-title">
            <h5>Members</h5>
            </div>
            <div className = "viewtask-members-bg">
                <Header />
                { departmentmember && departmentmember.map( (departmentmember, index) => {
                    return(
                      <EmployeeRow info = {departmentmember} key = {index}/>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default ViewDepartment