import React from 'react';
import logo from "./logo.png"


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
       <div class = "covid-text"> About our Data</div> 
       <div class = "content">
           <div class = "sidebar-left"></div>
           <div class = "center" id = "center">
               <div class = "imgContainer"><div class= "imgHeader">We obtain our data from the Orange County Health Care Agency's COVID-19 page</div><img src={logo}/></div>
               <a href="https://occovid19.ochealthinfo.com/coronavirus-in-oc">External Link</a>

                </div>
           <div class = "sidebar-right"></div>
       </div>

       </div>
    )
}

export default HomePage