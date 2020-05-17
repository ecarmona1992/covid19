import React from 'react';
import pia from "./pia.jpg"
import emanuel from "./emanuel.jpg"
import alex from "./alex.png"

import './HomePage.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from '../dashboard/Dashboard';

const HomePage = () => {
    return (
        <div>
    
       <div className = "covid-picture">
           
       </div>
       <div className = "covid-picture2">
           
       </div>
       <div class = "covid-text"> About Us</div> 
       <div class = "content">
           <div class = "sidebar-left"></div>
           <div class = "center" id = "center">
               <div class = "imgContainer"><div class= "imgHeader">Alex Morales</div><img src={alex}/></div>
               <div class = "imgContainer"><div class= "imgHeader">Emanuel Carmona</div><img src={emanuel}/></div>
               <div class = "imgContainer"><div class= "imgHeader">Pia Wetzel</div><img src={pia}/></div>
                </div>
           <div class = "sidebar-right"></div>
       </div>

       </div>
    )
}

export default HomePage