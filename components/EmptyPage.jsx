"use client"
import placeholderImage from "../public/working.svg"
import Image from "next/image"

const EmptyPage = () => {
  return (
    <section className="grid place-items-center h-screen ">
      <div className="">
        <Image
          src={placeholderImage}
          alt="Empty State"
          width="200"
          height="200"
        />
        <p className=" text-center mt-5 font-medium "> Still Working ..... </p>
      </div>
    </section>
  )
}

export default EmptyPage
