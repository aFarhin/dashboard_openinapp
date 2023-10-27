"use client"

import { links } from "@/util/links"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = ({ className, closeSideNavigation }) => {
  const pathname = usePathname()
  return (
    <aside
    style={{ boxShadow: '2px 2px 10px 2px #E0E0E0' }}
    className={` ${className} bg-blue-600 text-white h-[100%] rounded-[20px] flex flex-col justify-between items-center py-[20px] px-[50px]`}
  >
        <div className=" w-full space-y-[60px]  ">
          <h1 className=" font-bold text-4xl text-white ">Board.</h1>
          {/* Links */}
          <ul className="">
            {links.map((link) => {
              const { id, title, url, icon } = link
              const isActive = pathname.startsWith(link.url)
              return (
                  <li key={id}>
                  <Link
                    onClick={closeSideNavigation}
                    href={url}
                    className={
                      isActive
                        ? " font-bold capitalize space-x-5 flex items-center mb-10"
                        : "capitalize space-x-5 flex items-center mb-10"
                    }
                  >
                    {" "}
                    <span className="">{icon}</span>
                    <span className="text-lg">{title}</span>
                  </Link>
                </li>
  
              )
            })}
          </ul>
        </div>
        {/* Help and contact us */}
        <div className=" w-full space-y-3 text-sm ">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </aside>
  )
}

export default Sidebar
