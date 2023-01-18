import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
    render() {
        let k = this.props.val;
        let arr,a="",b="";
        if(k===-1 || k===1)
        {
            arr = (this.props.temp);
            a = "Temperature";
            b = "Temperature(in °C)";
        }
        else if(k===2){
        arr = (this.props.pressure);
        a = "Pressure";
        b = "Pressure(in inch)"
        }
        else if(k===3)
        {
            arr = (this.props.humidity);
            a = "Humidity";
            b = "Humidity(in %)";
        }
        const options = {
            animationEnabled: true,

            //theme: "dark2",
            backgroundColor: (this.props.bg),
            title: {
                text: a
            },
            axisY: {
                title: b
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "Today",
                showInLegend: true,
                dataPoints: [
                    { y: arr[0], label: "12:00 AM" },
                    { y: arr[2], label: "2:00 AM" },
                    { y: arr[4], label: "4:00 AM" },
                    { y: arr[6], label: "6:00 AM" },
                    { y: arr[8], label: "8:00 AM" },
                    { y: arr[10], label: "10:00 AM" },
                    { y: arr[12], label: "12:00 PM" },
                    { y: arr[14], label: "2:00 PM" },
                    { y: arr[16], label: "4:00 PM" },
                    { y: arr[18], label: "6:00 PM" },
                    { y: arr[20], label: "8:00 PM" },
                    { y: arr[22], label: "10:00 PM" }
                ]
            },
            {
                type: "spline",
                name: "Tomorrow",
                showInLegend: true,
                dataPoints: [
                    { y: arr[24], label: "12:00 AM" },
                    { y: arr[26], label: "2:00 AM" },
                    { y: arr[28], label: "4:00 AM" },
                    { y: arr[30], label: "6:00 AM" },
                    { y: arr[32], label: "8:00 AM" },
                    { y: arr[34], label: "10:00 AM" },
                    { y: arr[36], label: "12:00 PM" },
                    { y: arr[38], label: "2:00 PM" },
                    { y: arr[40], label: "4:00 PM" },
                    { y: arr[42], label: "6:00 PM" },
                    { y: arr[44], label: "8:00 PM" },
                    { y: arr[46], label: "10:00 PM" }
                ]
            },
                {
                    type: "spline",
                    name: "Day After Tomorrow",
                    showInLegend: true,
                    dataPoints: [
                        { y: arr[48], label: "12:00 AM" },
                        { y: arr[50], label: "2:00 AM" },
                        { y: arr[52], label: "4:00 AM" },
                        { y: arr[54], label: "6:00 AM" },
                        { y: arr[56], label: "8:00 AM" },
                        { y: arr[58], label: "10:00 AM" },
                        { y: arr[60], label: "12:00 PM" },
                        { y: arr[62], label: "2:00 PM" },
                        { y: arr[64], label: "4:00 PM" },
                        { y: arr[66], label: "6:00 PM" },
                        { y: arr[68], label: "8:00 PM" },
                        { y: arr[70], label: "10:00 PM" }
                    ]
                }]
        }

        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default Graph
