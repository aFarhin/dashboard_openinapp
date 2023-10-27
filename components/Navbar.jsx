"use client"

import { BellIcon, SearchIcon, MenuIcon } from "@/util/icons"
import Image from "next/image"
import { useState } from "react"
import SideNavigation from "./SideNavigation"
import { signOut, useSession } from "next-auth/react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [showSideNavigation, setShowSideNavigation] = useState(false)
  const { data: session } = useSession()
  const pathname = usePathname()
  // Open Side Navigation
  const openSideNavigation = () => {
    setShowSideNavigation(true)
  }
  // Close Side Navigation
  const closeSideNavigation = () => {
    setShowSideNavigation(false)
  }

  return (
    <>
      <nav className=" flex justify-between md:justify-between items-center ">
        <h2 className=" font-bold text-2xl hidden md:block capitalize ">
          {" "}
          {pathname.replace("/", "")}{" "}
        </h2>
        <button
          aria-label="open menu"
          className=" md:hidden "
          onClick={openSideNavigation}
        >
          <MenuIcon />
        </button>
        <div className=" flex md:justify-center items-center space-x-5 ">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className=" placeholder:text-[#B0B0B0] placeholder:text-sm placeholder:montserrat-font py-[6px] px-3 rounded-[10px] md:w-[180px] w-40 outline-none "
            />
            <span className="pointer-events-none absolute right-0 mr-3  ">
              <SearchIcon />
            </span>
          </div>
          <BellIcon />
          <button title="Logout" onClick={signOut}>
            <Image
              src={session?.user?.image || "/user_image.png"}
              alt="user"
              width="64"
              height="64"
              className=" rounded-full w-[30px] h-[30px] "
            />
          </button>
        </div>
      </nav>
      {showSideNavigation && (
        <SideNavigation closeSideNavigation={closeSideNavigation} />
      )}
    </>
  )
}

export default Navbar
