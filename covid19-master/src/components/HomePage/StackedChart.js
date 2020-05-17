import React, {Component} from 'react';
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';


class StackedChart extends Component
{

dataSet = [196, 230, 248, 227, 212];
dataLabels = ['May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15'];

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
        <HorizontalBar
        data={this.state.chartData}
        width={50}
        height={200}
        axisX={{labelFontColor: "white"}}
        options={{maintainAspectRatio:false, title:{display:true, fontColor: 'white', fontSize: 15, text:"Patients requiring Hospital Care (Orange County)"},
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


} export default StackedChart;