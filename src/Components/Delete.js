import React, {useState} from 'react';
import './Delete.css';
import {Link} from "react-router-dom"
import { FaBackward } from 'react-icons/fa';

function Delete() {
  const[sno,setSno]=useState(null);
  const[name,setName]=useState(null);
  const[role,setRole]=useState(null);
  const[salary,setSalary]=useState(null);
  const[experience,setExperience]=useState(null);

  const handleInputChange = (e) => {
    const{id,value} = e.target;
    if(id==="sno"){
      setSno(value);
    }
    if(id==="name"){
      setName(value);
    }
    if(id==="role"){
      setRole(value);
    }
    if(id==="salary"){
      setSalary(value);
    }
    if(id==="experience"){
      setExperience(value);
    }
  }

  const handleSubmit = () => {
    console.log("Data has been Deleted");
        // document.write("Logging In");
        alert("Successfully Deleted the Data");
  }



  return (
    <div className='headerdel'>
       <div className='backdel'> <Link to="Navigation"> <button ><FaBackward /> </button> </Link> </div>
      <h1>Delete Employee Details</h1>
   <div className='containerdel'>
    <div className='formdel'>
      <form>
        ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className='inputdel' id="sno" value={sno} onChange= {(e) => handleInputChange(e)} /><br /><br />
        Name &nbsp;&nbsp;
        <input type="text" className='inputdel' id="name" value={name} onChange= {(e) => handleInputChange(e)} /><br /><br />
        Role &nbsp;&nbsp;&nbsp;
        <input type="text" className='inputdel' id="role" value={role} onChange= {(e) => handleInputChange(e)} /><br /><br />
        Salary &nbsp;&nbsp;
        <input type="text" className='inputdel' id="salary" value={salary} onChange= {(e) => handleInputChange(e)} /><br /><br />
        Experience &nbsp;
        <input type="text" className='inputdel' id="experience" value={experience} onChange= {(e) => handleInputChange(e)} /><br /><br />
        <br />
        <input type="submit" className='buttondel' value="Submit" onClick={() => handleSubmit()} ></input>
      </form>
    </div>
    </div>
   </div>
  );
}

export default Delete;
