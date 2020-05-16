import React from 'react';
import logo from "./logo.png"
import Canvas from 'react-canvas-js'
import BarCharts from "./BarCharts"
import BarChart from "./BarChartReverse"
import PieChart from "./PieChart"
import LineChart from "./LineChart"
import './HomePage.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BarChartReverse from './BarChartReverse';
import BarChartEthnicity from './BarChartEthnicity';
import BarChartCity from './BarChartCity';
import StackedChart from './StackedChart';
import Dashboard from '../dashboard/Dashboard';

const HomePage = () => {
    return (
        <div>
    
       <div className = "covid-picture">
           <img src={logo}/> 
       </div>
       <div className = "covid-picture2">
           
       </div>
       <div class = "covid-text"> Information Hub</div> 
       <div class = "content">
           <div class = "sidebar-left"><BarChartCity/><br/> <LineChart/><br/> <StackedChart/></div>
           <div class = "center" id = "center"><Dashboard/></div>
           <div class = "sidebar-right"><PieChart/><br/><BarChartReverse/><br/> <BarChartEthnicity/></div>
       </div>

       </div>
    )
}

export default HomePage