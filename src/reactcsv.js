import React, { Component } from "react";

import CSVReader from "react-csv-reader";

import HighchartsReact from 'highcharts-react-official';
import Highcharts, { format, formatSingle } from 'highcharts/highstock';
import { json } from 'd3-request'

window.Data=null;

class ReactCsv extends Component{
    constructor(props){
        super(props);
        this.state={
            
            chartOptions: {
                rangeSelector: {//默认刚启动的时候的时间维度
                    allButtonsEnabled: true,
                    buttons: [{
                        type: 'minute',
                        count: 10,
                        text: 'min',
                       },{
                        type:'month',
                        count:1,
                        text:'mon'
                       },
                       {
                        type:'all',
                        text:'All'
                       }                  
                    ],
                    selected: 1
                },
                xAxis: {
                    minRange:3600 * 1000
                },
                title: {
                    text: 'Data'
                },
                
                series: [
                { 
                    id: '000001',
                    name: 'Data',
                    data:[]
                    }
                ],
            },

            data:[]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            data:window.Data,
            
            chartOptions:{
                series: [
                    { 
                        id: '000001',
                        name: 'data',
                        data: this.state.data }
                    ]
            } 
        })
        // console.log(window.Data);
    }




    render(){     
        const handleForce = data => {
        data = data.map(v=>v.map(Number));
        data.pop();
        console.log(data);
        //修改时间戳，毫秒级
        for(var i=0;i<data.length;i++){
            data[i][0]=data[i][0]*1000;
        }
        
        console.log(data);
        window.Data=data;
        // console.log(this.state.data);
        };    
         const  {chartOptions} = this.state;  //chartOptions必须加括号
        return(
        <div >
            <CSVReader
            cssClass="react-csv-input"
            label="选择CSV文件"
            onFileLoaded={handleForce}
            />
            <button onClick={this.handleClick}>绘制</button>
            
            <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={chartOptions}
            />
        </div>
        
        )
    }

}

export default ReactCsv;




