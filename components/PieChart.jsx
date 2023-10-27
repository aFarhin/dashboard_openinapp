"use client"

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"
const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"]

const PieChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer
      width={180}
      height={170}
      className=" font-lato text-xs text-[#858585]"
    >
      <PieChart  >
        <Pie
          data={data}
          labelLine={false}
          outerRadius={80}
          innerRadius={60}
          fill="#8884d8"
          dataKey="value"
          startAngle={-280}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            borderRadius: "10px",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent
