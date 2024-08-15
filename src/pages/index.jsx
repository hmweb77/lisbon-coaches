
import Event from '@/app/section/Event'
import FAQ from '@/app/section/FAQ'
import Footer from '@/app/section/Footer'
import Hero from '@/app/section/Hero'
import Members from '@/app/section/Members'
import Stats from '@/app/section/Stats'
import Testimonials from '@/app/section/Testimonials'
import Workshop from '@/app/section/Workshop'
import React from 'react'

export default function Home() {
  return (
    <>
      <Hero/> 
       <Members/>
       <Event/>
       <Stats/>
       <Workshop/>
       <Testimonials/>
       <FAQ/>

      <Footer/>
    </>
  )
}
