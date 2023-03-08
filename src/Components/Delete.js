import './Delete.css';
// import {Link} from "react-router-dom"
// import { FaBackward } from 'react-icons/fa';
// import React, { Component } from 'react'
// import  axios  from 'axios';
// export class Delete extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //       empid:'',
//   //       name:'',
//   //       salary: '',
//   //       role: '',
//   //       experience:'',
//   //       phone: '',
//   //       email: '',
//   //   };
//   // }

//   // handleIdChange = (event) => {
//   //   this.setState({ empid: event.target.value });
//   // };

//   // handleNameChange = (event) => {
//   //   this.setState({ name: event.target.value });
//   // };

//   // handleRoleChange = (event) => {
//   //   this.setState({ role: event.target.value });
//   // };

//   // handleSalaryChange = (event) => {
//   //   this.setState({ salary: event.target.value });
//   // };

//   // handleExperienceChange = (event) => {
//   //   this.setState({ experience: event.target.value });
//   // };

//   // handleEmailChange = (event) => {
//   //   this.setState({ email: event.target.value });
//   // };

//   // handlePhoneChange = (event) => {
//   //   this.setState({ phone: event.target.value });
//   // };


//   // handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const data = {
//   //       empid: this.state.empid,
//   //       name: this.state.name,
//   //       salary: this.state.salary,
//   //       role: this.state.role,
//   //       experience: this.state.experience,
//   //       phone: this.state.phone,
//   //       email: this.state.email,
        
//   //     };
    
//   //     axios.delete('http://127.0.0.1:8080/deletemap/{empid}', data)
//   // };

//   // handleSubmitChange =() => {
//   //   alert("Successfully Deleted the Data");
//   // }
 
//   handleRemove = (e) => {
//     const empid = this.state.empid;
//     const url = `http://127.0.0.1:8080/deletemap`;
//     // const id = document.querySelectorAll("li").props['data-id'];
//     e.preventDefault();
//     axios.delete(url + empid)
//         .then(res => {
//             console.log(res.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
//   render() {
//     return (
//       <div className='headerdel'>
//          <div className='backdel'> <Link to="Navigation"> <button ><FaBackward /> </button> </Link> </div>
//      <div className='containerdel'>
//         <h2>Delete Employee Details</h2>
//       <div className='formdel'>
//         <form onSubmit={this.handleSubmit}>
//           ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <input type="text" className='inputdel'  /><br /><br />
//           {/* Name &nbsp;&nbsp;
//           <input type="text" className='inputdel'  value={this.state.name} onChange= {this.handleNameChange} /><br /><br />
//           Salary &nbsp;&nbsp;
//           <input type="text" className='inputdel'  value={this.state.salary} onChange= {this.handleSalaryChange} /><br /><br />
//           Role &nbsp;&nbsp;&nbsp;
//           <input type="text" className='inputdel'  value={this.state.role} onChange= {this.handleRoleChange}/><br /><br />
//           Experience &nbsp;
//           <input type="text" className='inputdel'  value={this.state.experience} onChange= {this.handleExperienceChange} /><br /><br />
//           Phone &nbsp;&nbsp;
//           <input type="text" className='inputdel'  value={this.state.phone} onChange= {this.handlePhoneChange} /><br /><br />
//           Email &nbsp;&nbsp;
//           <input type="text" className='inputdel'  value={this.state.email} onChange= {this.handleEmailChange} /><br /><br /> */}

//           <input type="submit" className='buttondel' value="Submit"  ></input>
//         </form>
//       </div>
//       </div>
//      </div>
//     );
//   }
// }

// export default Delete

import axios from "axios";
import React  from "react";
import { useState } from "react";

function Del() {
  const [empid,setEmpid]=useState("");
  const deleteId=(evt)=>{
          axios.delete('http://127.0.0.1:8080/deletemap/'+empid)
          .then( alert("Deleted Employee Details"))
          .catch(err=>console.log(err))
  }
return (
  <>
          <div className='body' >
              <h2>Delete Employee</h2>
              <div className='containerdel'>
                  <input type="text" placeholder="Emp ID" className='inputdel' value={empid} onChange={e=>setEmpid(e.target.value)}/><br /><br /><br />
                      <button onClick={deleteId} className="buttondel" >Delete</button>
              </div>
          </div>
      </>
);
}

export default Del;