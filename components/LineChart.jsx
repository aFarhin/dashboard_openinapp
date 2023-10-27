import {
  BarChart,
 Bar,

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const LineChartComponent = ({ lineChartData }) => {
  const data = [
    { name: `Week 1`, User: lineChartData.user[0], Guest: lineChartData.guest[0] },
    ...lineChartData?.user.slice(3).map((_, index) => ({
      name:  `Week ${index + 2}`,
      User: lineChartData.user[index+1 ],
      Guest: lineChartData.guest[index+1],
    })),
    { name: `Week ${lineChartData.user.length-1}`, User: lineChartData.user[4], Guest: lineChartData.guest[4] },
    
  ]
  return (
    <ResponsiveContainer
      width="100%"
      height={250}
      className="font-lato text-sm text-[#6073eb]"
    >
      <BarChart
        data={data}
        margin={{
          top: 50,
          left: -27,
        }}
      >
        <CartesianGrid vertical={false} stroke="#EAEAEA" strokeWidth={1} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 500]}
          ticks={[0, 100, 200, 300, 400, 500]}
        />
        <Tooltip
          contentStyle={{
            borderRadius: "20px",
          }}
        />
        <Bar
         barSize={40}   
          type="monotone"
          dataKey="Guest"
          // stroke="#E9A0A0"
          strokeWidth={3}
          dot={false}
          // activeDot={{ r: 4 }}
          fill="#98D89E"
        />
        <Bar
         barSize={40}   
          type="monotone"
          dataKey="User"
          // stroke="#9BDD7C"
          strokeWidth={3}
          dot={false}
          // activeDot={{ r: 4 }}
          fill="#EE8484"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent
