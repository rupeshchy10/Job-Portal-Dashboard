import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function WebTrafficChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#trafficChart')).setOption({
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '5%',
                left: 'center',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1048,
                            name: 'AI Engineer',
                        },
                        {
                            value: 735,
                            name: 'Data Analyst',
                        },
                        {
                            value: 580,
                            name: 'Web Developer',
                        },
                        {
                            value: 484,
                            name: 'Marketing',
                        },
                        {
                            value: 300,
                            name: 'Others',
                        },
                    ],
                },
            ],
        });
    }, []);
    return (
        <div
            id="trafficChart"
            style={{ minHeight: '400px' }}
            className="echarts"
        ></div>
    );
}

export default WebTrafficChart;