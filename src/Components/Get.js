import React from 'react';
import './Get.css';
import {Link} from "react-router-dom"
import { FaBackward } from 'react-icons/fa';

function Get() {
  return (
    <div>
       <div className='backget'> <Link to="Navigation"> <button ><FaBackward /> </button> </Link> </div>
       <h1>Get Employee Details</h1>
    <div className="search">
       
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit">Get Details</button>
      </form>
    </div>
    </div>
  );
}

export default Get;
