"use client"

import { useState } from "react"
import { lineChartData } from "@/util/ChartData"
import LineChartComponent from "./LineChart"

const LineChartContainer = () => {
  const [month, setMonth] = useState("May - June 2021")

  const handleSelect = (e) => {
    setMonth(e.target.value)
  }
  return (
    <div style={{ boxShadow:'2px 2px 10px 2px #E0E0E0'}} className=" bg-white rounded-[20px] py-[30px] lg:px-[40px] px-8  ">
      <div className=" flex justify-between items-center ">
        <div className="">
          <h4 className=" text-lg font-bold ">Activities</h4>
          <button
            aria-label="Select Month"
            className=" -ml-[3px] text-xs text-[#858585] flex justify-center items-center space-x-2 "
          >
            <select
              onChange={handleSelect}
              className=" outline-none"
              value={month}
            >
              {Object.keys(lineChartData).map((ele, index) => {
                return (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                )
              })}
            </select>
          </button>
        </div>
        <div className=" flex justify-center items-center space-x-4 md:space-x-[35px] font-lato text-sm ">
          <h5 className=" flex justify-center items-center space-x-[10px] ">
            {" "}
            <span className=" w-[10px] h-[10px] bg-[#E9A0A0] rounded-full "></span>
            <span>Guest</span>
          </h5>
          <h5 className=" flex justify-center items-center space-x-[10px] ">
            {" "}
            <span className=" w-[10px] h-[10px] bg-[#98D89E] rounded-full "></span>
            <span>User</span>
          </h5>
        </div>
      </div>
      <LineChartComponent lineChartData={lineChartData[month]} />
    </div>
  )
}

export default LineChartContainer
