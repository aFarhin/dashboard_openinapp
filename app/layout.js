import './globals.css'
import  AuthProvider   from "@/components/AuthProvider"

import { Lato, Montserrat, Open_Sans } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
})
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-openSans" })

export const metadata = {
  title: 'Listed.OpeninApp',
  description: 'Products building for The Creators'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} ${openSans.variable} `}
      >
      
      <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
