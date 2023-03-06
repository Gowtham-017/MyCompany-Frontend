import React,{useState} from 'react'
import {Link} from "react-router-dom"
import './Signup.css'
function Signup() {
    const[name,setName]=useState(null);
    const[email,setEmail]=useState(null);
    const[passwd,setPasswd]=useState(null);
    const[confirmpwd,setConfirmpwd]=useState(null);

    const handleInput = (b) => {
        const[id,value] =b.target;
        if(id==="name"){
            setName(value);
        }
        if(id==="email"){
            setEmail(value);
        }
        if(id==="passwd"){
            setPasswd(value);
        }
        if(id==="confirmpwd"){
            setConfirmpwd(value);
        }
    }

    const handleSubmit2= () => {
        console.log(name,email,passwd,confirmpwd);
        alert("Registered Successfully");
    }
  return (
    <div className='bg'>
            <h1 className='h11'>Sign Up</h1>
    <div className='signupbox'>
        
        <form className='form'>
            <input type="text" className='signupinput' placeholder="Username" id="name" value={name} onChange= {(b) => handleInput(b)} required />
            <input type="email" className='signupinput' placeholder='Email' id="email" value={email} onChange={(b) => handleInput(b)} required/>
            <input type="password" className='signupinput' placeholder='Password' id="passwd" value={passwd} onChange={(b) => handleInput(b)} required />
            <input type="password" className='signupinput' placeholder='Confirm Password' id="confirmpwd" value={confirmpwd} onChange={(b) => handleInput(b)} required />

           <Link to="Signin"> <input type="submit" className='button' value="Register" onClick={() => handleSubmit2()} /> </Link>
        </form>
</div>
    </div>
  )
}

export default Signup