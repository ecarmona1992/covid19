import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class BarCharts extends Component
{

dataSet = [617594, 181045, 152060, 106519, 95072, 10000];
dataLabels = ["USA", "China", "Great Britain", "France", "Italy"];

   constructor(props)
   {
       super(props);
       this.state = {
           chartData:{
                
                labels:this.dataLabels,
                datasets: [{label: 'Confirmed Cases', 
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
        width={250}
        height={250}
        axisX={{labelFontColor: "white"}}
        options={{maintainAspectRatio:false, title:{display:true, fontColor: 'white', fontSize: 22, text:"Countries with most COVID-19 cases"},
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