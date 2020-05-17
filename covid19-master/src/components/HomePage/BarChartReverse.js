import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class BarChartReverse extends Component
{

dataSet = [0.0, 7, 23, 15, 55];
dataLabels = ['0-17', '18-44', '45 - 64', '65-74', '75+'];

   constructor(props)
   {
       super(props);
       this.state = {
           chartData:{
                
                labels:this.dataLabels,
                datasets: [{label: 'Percentage of fatalities (OC)', 
            data: this.dataSet , 
        //backgroundColor: 'green'
        backgroundColor: ['white', 'Orange', 'white', 'Orange', 'white', 'Orange', 'white'],
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
        width={50}
        height={200}
        axisX={{labelFontColor: "white"}}
        options={{maintainAspectRatio:false, title:{display:true, fontColor: 'white', fontSize: 15, text:"Fatalities by Age (Orange County)"},
                scales:[{xAxes:{labelFontColor: "white"}, yAxes:{labelFontColor:"red"}}] }}
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


} export default BarChartReverse;