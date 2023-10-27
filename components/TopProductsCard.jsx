import { useState } from "react"
import PieChartComponent from "./PieChart"
import { pieChartData } from "@/util/ChartData"

const TopProductsCard = () => {
  const [selectedMonth, setSelectedMonth] = useState("May - June 2021")

  const handleChange = (e) => {
    setSelectedMonth(e.target.value)
  }

  const pieData = pieChartData[selectedMonth]
  return (
    <article  style={{ boxShadow:'2px 2px 10px 2px #E0E0E0'}}
    className="bg-white hover:bg-blue-200 rounded-[20px] py-[30px] lg:px-[40px] px-8 space-y-[20px]">
     <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold">Top products</h4>
        <button
          className="text-xs text-[#858585] flex justify-center items-center space-x-2"
          aria-label="Select Month"
        >
          <select
            value={selectedMonth}
            onChange={handleChange}
            className=" outline-none "
          >
            {Object.keys(pieChartData).map((ele, index) => {
              return (
                <option key={index} value={ele}>
                  {ele}
                </option>
              )
            })}
          </select>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-y-7 md:gap-x-5 md:gap-y-0 place-items-center">
        <PieChartComponent data={pieData} />
        <div className="space-y-5 w-full">
          {pieData.map((product, index) => (
            <div key={index} className="">
              <h6 className="flex justify-start items-center space-x-[10px]">
                <span
                  style={{ backgroundColor: `${product.color}` }}
                  className={`w-3 h-3 bg-${product.color} rounded-full`}
                ></span>
                <span className="text-sm font-bold">{product.name}</span>
              </h6>
              <span className="ml-6 text-xs font-lato text-[#858585]">
                {Math.round(product.value / 10)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default TopProductsCard
