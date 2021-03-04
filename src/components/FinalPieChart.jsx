import React from 'react';
import { Spin } from 'antd';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Group A', value: 400, uv: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const FinalPieChart = () => (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="40%"
                    innerRadius="45%" outerRadius="60%"
                    fill="#8884d8"
                    label
                    options={{ maintainAspectRatio: false, aspectRatio: 1,  }}
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );

export default FinalPieChart;
