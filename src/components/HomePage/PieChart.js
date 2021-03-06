import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class PieChart extends Component
{

dataSet = [58,42];
dataLabels = ['Male', 'Female'];

   constructor(props)
   {
       super(props);
       this.state = {
           chartData:{
                
                labels:this.dataLabels,
                datasets: [{label: 'Percentage of fatalities', 
            data: this.dataSet , 
        //backgroundColor: 'green'
        backgroundColor: ['white', 'Orange'],
        fontColor: "white"}], 
            
           }
       }
   }
   render()
   {
       return (
        <div className = "Chart">
        <Pie
        data={this.state.chartData}
        width={50}
        height={200}
        axisX={{labelFontColor: "white"}}
        options={{maintainAspectRatio:false, title:{display:true, fontColor: 'white', fontSize: 15, text:"Fatalities by Sex (Orange County)"},
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


} export default PieChart;