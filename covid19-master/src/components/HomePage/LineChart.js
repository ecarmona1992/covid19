import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class LineChart extends Component
{

dataSet = [120,53, 60, 156, 229, 158];
dataLabels = ['May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15'];

   constructor(props)
   {
       super(props);
       this.state = {
           chartData:{
                
                labels:this.dataLabels,
                datasets: [{label: 'New cases (Orange County)', 
            data: this.dataSet , 
        //backgroundColor: 'green'
        backgroundColor: ['white'],
        fontColor: "white"}], 
            
           }
       }
   }
   render()
   {
       return (
        <div className = "Chart">
        <Line
        data={this.state.chartData}
        width={50}
        height={200}
        axisX={{labelFontColor: "white"}}
        options={{maintainAspectRatio:false, title:{display:true, fontColor: 'white', fontSize: 15, text:"New COVID-19 cases (Orange County)"},
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


} export default LineChart;