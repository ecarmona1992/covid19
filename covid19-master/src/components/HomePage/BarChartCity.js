import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class BarCharts extends Component
{

dataSet = [652, 207, 285, 149, 683];
dataLabels = ['Anaheim', 'Garden Grove', 'Huntington Beach', 'Irvine', 'Santa Ana'];

   constructor(props)
   {
       super(props);
       this.state = {
           chartData:{
                
                labels:this.dataLabels,
                datasets: [{label: 'Confirmed Cases', 
            data: this.dataSet , 
        //backgroundColor: 'green'
        backgroundColor: ['white', 'orange','white', 'orange', 'white'],
        fontColor: "white"}], 
            
           }
       }
   }
   render()
   {
       return (
        <div className = "Chart">
        <Bar
        data={this.state.chartData}
        width={10}
        height={200}
        axisX={{labelFontColor: "white"}}
        options={{maintainAspectRatio:false, title:{display:true, fontColor: 'white', fontSize: 15, text:"Case counts by City (Orange County)"},
                scales:{xAxes:{labelFontColor: "white"}, yAxes:{labelFontColor:"red"}} }}
      />
        </div>
       )
   } 


setDataSet(someData)
{
    this.dataSet = someData;
}

setDataSet(someLabels)
{
    this.dataSet = someLabels;
}


} export default BarCharts;