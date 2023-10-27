"use client"

import { CloseIcon } from "@/util/icons"
import Sidebar from "./Sidebar"

const SideNavigation = ({ closeSideNavigation }) => {
  return (
    <nav className=" md:h-[100%] w-full bg-blue-600 text-white fixed z-30 top-0 left-0 right-0 bottom-0 ">
      <button
        className=" block ml-auto mt-5 mx-5 "
        onClick={closeSideNavigation}
      >
        {" "}
        <CloseIcon />{" "}
      </button>
      <Sidebar
        closeSideNavigation={closeSideNavigation}
        className=" rounded-none flex-none "
      />
    </nav>
  )
}

export default SideNavigation
