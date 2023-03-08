import './Put.css';
import {Link} from "react-router-dom"
import { FaBackward } from 'react-icons/fa';
import  axios  from 'axios';
import React, { Component } from 'react'

export class Put extends Component {

  constructor(props) {
    super(props);
    this.state = {
        empid:'',
        name:'',
        salary: '',
        role: '',
        experience:'',
        phone: '',
        email: '',
    };
  }

  handleIdChange = (event) => {
    this.setState({ empid: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };

  handleSalaryChange = (event) => {
    this.setState({ salary: event.target.value });
  };

  handleExperienceChange = (event) => {
    this.setState({ experience: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        empid: this.state.empid,
        name: this.state.name,
        salary: this.state.salary,
        role: this.state.role,
        experience: this.state.experience,
        phone: this.state.phone,
        email: this.state.email,
        
      };
    
      axios.put('http://127.0.0.1:8080/putmap', data)
  };
 
  handleSubmitChange =() => {
    alert("Successfully Updated the Data");
  }
  render() {
    return (
      <div className='bodyput'>
       <div className='backput'> <Link to="Navigation"> <button ><FaBackward /> </button> </Link> </div>
    
   <div className='containerput'>
   <h2>Put Employee Details</h2>
    <div className='formput'>
      <form onSubmit={this.handleSubmit}>
        ID  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className='input'  value={this.state.empid} onChange= {this.handleIdChange}  /><br /><br />
        Name &nbsp;&nbsp;
        <input type="text" className='input'  value={this.state.name} onChange= {this.handleNameChange}  /><br /><br />
        Salary &nbsp;&nbsp;
        <input type="text" className='input'  value={this.state.salary} onChange= {this.handleSalaryChange}  /><br /><br />
        Role &nbsp;&nbsp;&nbsp;
        <input type="text" className='input'  value={this.state.role} onChange= {this.handleRoleChange}  /><br /><br />
        Experience &nbsp;
        <input type="text" className='input'  value={this.state.experience} onChange= {this.handleExperienceChange}  /><br /><br />
        Phone &nbsp;&nbsp;
        <input type="text" className='input'  value={this.state.phone} onChange= {this.handlePhoneChange}  /><br /><br />
        Email &nbsp;&nbsp;
        <input type="text" className='input'  value={this.state.email} onChange= {this.handleEmailChange}  /><br /><br />

        <input type="submit" className='buttonput' value="Submit" onClick={() => this.handleSubmitChange()} ></input>
      </form>
    </div>
    </div>
   </div>
    )
  };
}

export default Put