"use client"

import { signOut } from "next-auth/react"

import LineChartContainer from "@/components/LineChartContainer"
import ScheduleCard from "@/components/ScheduleCard"
import StatsCard from "@/components/StatsCard"
import TopProductsCard from "@/components/TopProductsCard"

export default function Dashboard() {
  return (
    <section className=" w-full h-min ">
      <StatsCard />
      <LineChartContainer />
      <div className=" grid gap-y-10 lg:gap-y-0  lg:grid-cols-2 my-10 gap-x-10">
        <TopProductsCard />
        <ScheduleCard /> 
      </div>
      {/* <button onClick={signOut}>logout</button> */}
    </section>
  )
}
