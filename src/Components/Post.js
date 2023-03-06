import React ,{useState } from 'react';
import './Post.css';
import {Link} from "react-router-dom"
import { FaBackward } from 'react-icons/fa';
function Post() {

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
    console.log(sno,name,role,salary,experience);
        // document.write("Logging In");
        alert("Successfully Added the Data");
  }



 

  return (
    <div className='headerpost'>
     <div className='backpost'> <Link to="Navigation"> <button ><FaBackward /> </button> </Link> </div>
      <h1>Post Employee Details</h1>
   <div className='containerpost'>
    <div className='formpost'>
      <form>
        ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className='inputpost' id="sno" value={sno} onChange= {(e) => handleInputChange(e)} /><br /><br />
        Name &nbsp;&nbsp;
        <input type="text" className='inputpost' id="name" value={name} onChange={(e) => handleInputChange(e)}  /><br /><br />
        Role &nbsp;&nbsp;&nbsp;
        <input type="text" className='inputpost' id="role" value={role}  onChange= {(e) => handleInputChange(e)} /><br /><br />
        Salary &nbsp;&nbsp;
        <input type="text" className='inputpost' id="salary" value={salary} onChange={(e) => handleInputChange(e)} /><br /><br />
        Experience &nbsp;
        <input type="text" className='inputpost' id="experience" value={experience} onChange={(e) => handleInputChange(e)} /><br /><br />
        <br />
        <input type="submit" className='buttonpost'  onClick={() => handleSubmit()} value="Submit"></input>
      </form>
    </div>
    </div>
   </div>
  );
}

export default Post;
