import React, { Component } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts, { format, formatSingle } from 'highcharts/highstock';
import { json } from 'd3-request'
import $ from 'jquery'
// import * as fs from 'fs';


class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        chartOptions: {
            rangeSelector: {
                selected: 5
            },
            title: {
                text: '平安银行历史股价'
            },
            
            series: [
            { 
                id: '000001',
                name: '平安银行',
                }
            ],
        }
        };
    }
     componentWillMount(){
         const url = 'https://data.jianshukeji.com/stock/history/000001';
         json(url,(err,data) =>{
            //console.log(data);   
            let result = data.data;
            this.setState({
                chartOptions:{
                    series: [
                        { 
                            id: '000001',
                            name: '平安银行',
                            data: result }
                        ]
                }    
            })
        
         
         })
        //  var file = "../data/Curve_test.csv"
        //  console.log(file);
     }
    render() {
        const  {chartOptions} = this.state;  //chartOptions必须加括号    
        return (
        <div>
            <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={chartOptions}
            />
        </div>
        )
    }
}
export default LineChart;