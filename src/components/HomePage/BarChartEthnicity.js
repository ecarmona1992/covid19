import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class PieChartEthnicity extends Component
{

dataSet = [19, 4, 39, 32];
dataLabels = ['Asian', 'Black or African American','Hispanic or Latino', 'White'];

   constructor(props)
   {
       super(props);
       this.state = {
           chartData:{
                
                labels:this.dataLabels,
                datasets: [{label: 'Percentage of fatalities', 
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
        width={100}
        height={200}
        axisX={{labelFontColor: "white"}}
        options={{maintainAspectRatio:false, title:{display:true, fontColor: 'white', fontSize: 15, text:"Fatalities by Ethnicity (Orange County)"},
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


} export default PieChartEthnicity;