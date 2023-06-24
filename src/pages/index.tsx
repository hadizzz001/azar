import BlogSections from '@/Components/Home/BlogSections'
import Goal from '@/Components/Home/Goal'
import Hero from '@/Components/Home/Hero'
import Plans from '@/Components/Home/Plans'
import Portfolio from '@/Components/Home/Portfolio'
import Services from '@/Components/Home/Services'
import Teaser from '@/Components/Home/Teaser'
import VerticalCarousel from '@/Components/Home/VerticalCarousel/VerticalCarousel'
import Navbar from '@/Navbar/Navbar'
import { Box } from '@mui/material'
import Head from 'next/head'
import gsap from 'gsap';
import { useRouter } from 'next/router'
import {useEffect} from 'react';
import Testimonial from '@/Components/Home/Testimonial'

export default function Home() {
  const router = useRouter();
  // const {scrollTo} = router.query
  // useEffect(() => {
    
  //   if (scrollTo) {
  //       gsap.to(window, {duration: 2,delay:.4, scrollTo : `${scrollTo}` });
        
  //   }
    
  // }, [scrollTo])
  
  return (
    <>
      <Head>
      <title>Home | Azar Stores</title>
        <meta name="description" content={`
Our experienced team of IT professionals , food wholesalers, taxi, digital business expert and import export. We provide ongoing support to help you achieve success. 
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ucarecdn.com/e6f28a23-c80e-4ddd-92b1-36b78f4f5aec/ico.png" />
      </Head>
      <main>
        <Box className='hero-img' >

  <Navbar/>
        <Hero/>
        </Box> 
        <Teaser/>
        <VerticalCarousel/>
        <Services/> 
      </main>
    </>
  )
}
