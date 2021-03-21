import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Badge} from 'antd';

const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const OFFSET = 5;

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const {name, value, payload: atList} = payload[0];
        const sortedList = atList.activityTypes.sort((a,b) => b.atCount - a.atCount)
        const topFive = sortedList.slice(0,OFFSET)
        const others = sortedList.slice(OFFSET).reduce((acc, val) => acc + val.atPercent, 0);
        return (
            <div className="custom-tooltip">
                <p className="label">{`${name} : ${value}`}</p>
                {topFive.map((v, i) => <p><Badge key={i} color={colors[i]} text={`${v.atName} : ${v.atPercent.toFixed(2)}%`}/></p>)}
                {others ? <p><Badge color="grey" text={`Other: ${others.toFixed(2)}%`}/></p> : null}
            </div>
        );
    }
    return null;
};


const FinalPieChart = ({chartData}) => (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={chartData}
                    cx="50%"
                    cy="40%"
                    innerRadius="35%" outerRadius="60%"
                    labelLine={false}
                    fill="#8884d8"
                    label={renderCustomizedLabel}
                    options={{ maintainAspectRatio: false, aspectRatio: 1,  }}
                >
                    {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
    );

export default FinalPieChart;
