import './Signin1.css'
import React,{useState} from 'react';
import {Link} from "react-router-dom"
const Signin = () => {

  const[user,setUser]=useState(null);
  const[pass,setPass]=useState(null);

  const handleChange = (a) => {
    const{id,value}=a.target;
    if(id==="user"){
      setUser(value);
    }
    if(id==="pass"){
      setPass(value);
    }
  }

  const handleSubmit1 = () => {
    console.log(user,pass);
    alert("Logged in Successfully");

  }
  return (
   <div className='body'>
    <div className="containersign">
      
        <div className="boxsign">
        <div className='image'></div>
          
          <h3> Sign in and start managing your DATA! </h3>

            <input type="text" placeholder="Username" className="inputname" id="user" value={user} onChange={(a) => handleChange(a)} required></input>
            <input type="password" placeholder="Password" className="password" id="pass" value={pass} onChange={(a) => handleChange(a)} required ></input>    

            <h2 className="forgotpassword"><a href=''>Forgot password?</a></h2>
     
            <button className="logbutton" onClick={() => handleSubmit1()}>   <Link to="Navigation">Login</Link> </button>
            <h6>Dont have an account?<br /><br />
            <button className="logbutton1"><Link to="Signup">SignUp</Link>    </button></h6>
          
            {/* <span className="create-account">CREATE ACCOUNT</span> */}
          </div>
        </div>
        
     </div>
   
  );
};
export default Signin;


