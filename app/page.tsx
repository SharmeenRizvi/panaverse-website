"use client"
import Herosection from "./components/Herosection"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Carousel from "./components/Carousel"


export default function Home() {
  return (
    <>
       <Carousel />
       <Herosection />
       <Features />
       <Testimonials />
    </>
  )
}
