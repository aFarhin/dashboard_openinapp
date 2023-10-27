import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import Credentials from "next-auth/providers/credentials";

export const authOptions ={
    providers:[
        //all logins provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        Credentials({
            name:"Credentials",
            credentials:{
                email:{
                    label:'Email',
                },
                password:{label:'Password', type:'password'}
            },
            authorize(credentials, req){
                if (
                    credentials?.email === "johndoe@gmail.com" &&
                    credentials.password === "admin"
                  ) {
                    return {
                      id: "1",
                      email: "johndoe@gmail.com",
                    }
                  }
                  return null // if not match then return null
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }



