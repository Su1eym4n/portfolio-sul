//import { useState, useEffect,useCallback } from "react"
import Header from "../components/Header"
import Feed from "../components/Feed"
import Footer from "../components/Footer"
const style = {

}
export default function Home() {
  return (
    <div className='bg-[#201F47] text-white justify-center items-center font-mono'>
        <div className="bg-red-500">
        Portfolio is Under Development
        </div>
        <Header />
        <Feed />
        <Footer />
    </div>
  )
}
