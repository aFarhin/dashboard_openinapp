"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Home({ children }) {
  const session = useSession()
  const router = useRouter()
  console.log("session", session.status)
  if (session.status === "unauthenticated") {
    router.push("/login")
  }
  if (session.status === "authenticated") {
    router.push("/dashboard")
  }

  return <main>{children}</main>
}
