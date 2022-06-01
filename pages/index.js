//import { useState, useEffect,useCallback } from "react"
import Header from "../components/Header"
import Feed from "../components/Feed"
import Footer from "../components/Footer"
const style = {

}
export default function Home() {
  return (
   <div  className='bg-[#1b2937] text-white justify-center items-center font-mono'>
     <Header/>
     <Feed/>
     <Footer/>
   </div>
  )
}
