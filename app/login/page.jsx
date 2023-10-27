"use client"
import React, {useState} from 'react'
import Link from "next/link"
import {GoogleIcon, AppleIcon, GithubIcon, TwitterIcon, DiscordIcon, LinkedinIcon} from "@/util/icons"
import {signIn ,useSession} from "next-auth/react"
import { useRouter } from 'next/navigation'
import '../../app/styles.css'


function Login() {
 
    const[error, setError] = useState(false)
    const session = useSession()
    const router = useRouter()
    console.log("session login status : ", session.status)

    //CONDITION OF LOGIn using nextauth
     if(session.status === "authenticated") {
        router?.push("/dashboard")
     }
     const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const email = data.get("email")
        const password = data.get("password")
    
        // checking form validation
        if (!email || !password) {
          setError("Enter all Fields.")
          return
        }
        if (password.length < 5) {
          setError("Password should be minimum length of 5")
          return
        }
        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          setError("Please enter a valid email address.")
          return
        }
    
        const signInRes = await signIn("credentials", {
          email,
          password,
          redirect: false,
        })
        if (!signInRes && !signInRes.error) {
          router.push("/dashboard")
        }
      }
    
  return (
    <>
    <main className='flex h-screen' style={{backgroundColor:'#F5F5F5'}}>
    
    <section className="slanted-div">
    <diV className='logo'> <h4>LOGO</h4></diV>
 
  <div className="flex flex-col justify-end items-center h-[50%]">
    <div>
    <h1  className='response'> Board. </h1>

    </div>
  </div>

  <div className="flex flex-col justify-end items-center h-[50%]">
    <div className="md:mr-10 py-5 md:py-10">
    <div className='btn'>
      <button className="mr-5 md:mr-10">
        <GithubIcon />
      </button>
      <button className="mr-5 md:mr-10">
        <TwitterIcon />
      </button>
      <button className="mr-5 md:mr-10">
        <LinkedinIcon />
      </button>
      <button>
        <DiscordIcon />
      </button>
      </div>
    </div>
  </div>
</section>

    <section className=" bg-[#F5F5F5]  w-full px-5 flex flex-col justify-center   ">
          <div className=" flex-none  md:flex justify-center items-center ">
            <div className=" space-y-6">
              <div className="">
                <h2 className=" text-black font-bold text-4xl ">Sign In</h2>
                <p className="font-lato leading-5 mt-[5px]  ">

                  Sign in to your account
                </p>
              </div>
              <div className=" text-[#858585] font-montserrat text-xs flex flex-col md:flex-row md:justify-between items-center w-full md:space-x-5 space-y-5 md:space-y-0 ">
                <button
                  onClick={() => signIn("google")}
                  className=" py-2 bg-white px-5 rounded-[10px] flex justify-center items-center space-x-[10px] w-full   "
                >
                  <GoogleIcon />
                  <span className=" block ">Sign in with Google</span>
                </button>
                <button className=" py-2 bg-white px-5 rounded-[10px] flex justify-center items-center space-x-[10px] w-full ">
                  <AppleIcon className="  " />
                  <span className=" block ">Sign in with Apple</span>
                </button>
              </div>
              <div className=" bg-white md:w-[400px] p-[30px] font-lato rounded-[20px]  ">
                <form action="" className=" space-y-5 " onSubmit={handleSubmit} >
                  <span className=" text-red-500">{error}</span>
                  <div className="flex flex-col space-y-[10px] ">
                    <label htmlFor="email" className="font-lato text-black">
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      className=" bg-[#F5F5F5]  py-[10px] rounded-[10px] px-4  "
                      placeholder="johndoe@gmail.com"
                      defaultValue="johndoe@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col space-y-[10px] ">
                    <label
                      htmlFor="password"
                      className=" font-lato text-black "
                    >
                      Password
                    </label>
                    <input
                      type="password "
                      className=" bg-[#F5F5F5] py-[10px] rounded-[10px] px-4 "
                      placeholder="••••••••"
                      name="password"
                      defaultValue="admin"
                    />
                  </div>

                  <Link href="#" className="text-[#346BD4] block ">
                    Forgot password?
                  </Link>
                  <button
                    type="submit"
                    className=" bg-[#286DE0] text-white font-montserrat font-bold text-center py-[10px] w-full rounded-[10px] hover:bg-blue-700  "
                  >
                    Sign In
                  </button>
                </form>
              </div>

              <p className=" text-[#858585] text-center w-full ">
                {" "}
                Don’t have an account?{" "}
                <Link href="#" className=" text-[#346BD4] ">
                  {" "}
                  Register here{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
        </section>
   </main>
   </>
  )
}

export default Login