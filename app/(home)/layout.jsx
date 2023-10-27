"use client"

import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function HomeLayout({ children }) {
  const session = useSession()
  const router = useRouter()
  console.log("session s", session.status)
  if (session.status === "loading") {
    return <Loading />
  }

  if (session.status === "unauthenticated") {
    router?.push("/login")
  }
  if (session.status === "authenticated") {
    return (
      <main className="flex  bg-[#F5F5F5] p-5 md:p-10 h-screen lg:gap-x-[60px] gap-x-8 overflow-scroll [&::-webkit-scrollbar]:hidden ">
        {/* Right */}
        <section className=" w-[340px] sticky top-0 hidden md:block ">
          <Sidebar />
        </section>
        {/* Left */}
        <section className=" w-full h-min ">
          <Navbar />
          {children}
        </section>
      </main>
    )
  }
}
