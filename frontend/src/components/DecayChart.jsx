import React, { memo } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const DecayChart = memo(({ data }) => {
    return (
        <div className="w-full h-72">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="day" stroke="#2d2d2d" />
                    <YAxis stroke="#2d2d2d" />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="strength"
                        stroke="#1e1e1e"
                        strokeWidth={3}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
});


export default DecayChart;