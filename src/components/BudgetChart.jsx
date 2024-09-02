import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function BudgetChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#budgetChart')).setOption({
            legend: {
                data: ['Recruiters', 'Seekers'],
            },
            radar: {
                shape: 'circle',
                indicator: [
                    {
                        name: 'AI Engineer',
                        max: 6500,
                    },
                    {
                        name: 'Software Engineer',
                        max: 16000,
                    },
                    {
                        name: 'Data Analyst',
                        max: 30000,
                    },
                    {
                        name: 'Dot Net Developer',
                        max: 38000,
                    },
                    {
                        name: 'Full Stack',
                        max: 52000,
                    },
                    {
                        name: 'Marketing',
                        max: 25000,
                    },
                ],
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'Recruiters',
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Seekers',
                        },
                    ],
                },
            ],
        });
    }, []);
    return (
        <div
            id="budgetChart"
            style={{ minHeight: '400px'}}
            className="echart"
        ></div>
    );
}

export default BudgetChart;