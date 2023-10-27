import { Lato, Open_Sans, Montserrat } from "next/font/google"

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "lato-font",
})
const openSans = Open_Sans({ subsets: ["latin"], variable: "openSans-font" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "montserrat-font",
})

export { lato, openSans, montserrat }
