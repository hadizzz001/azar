import BlogSections from '@/Components/Home/BlogSections'
import Goal from '@/Components/Home/Goal' 
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
import { useEffect } from 'react';
import Testimonial from '@/Components/Home/Testimonial'
import Hero1 from '@/Components/Home/Hero1'

export default function Home() {
  const router = useRouter();
  const { scrollTo } = router.query
  useEffect(() => {

    if (scrollTo) {
      gsap.to(window, { duration: 2, delay: .4, scrollTo: `${scrollTo}` });

    }

  }, [scrollTo])

  return (
    <>
      <Head>
        <title>About Us | Azar Stores</title>
        <meta name="description" content={`
An export and import company specializing in the food industry, led by a digital business expert, leverages IT solutions to streamline its operations. This company serves as a food wholesaler, procuring large quantities of food products from manufacturers and farmers. With a fleet of taxis at their disposal, they ensure efficient transportation of goods from warehouses to retailers and restaurants. The digital business expert implements cutting-edge technologies to optimize logistics, manage inventory, and enhance customer experiences. Through their expertise in digital marketing and e-commerce strategies, they promote the company's offerings to a global audience, facilitating international trade. This integrated approach combines the convenience of taxi services, the extensive reach of digital platforms, and the efficiency of IT systems to create a seamless and successful export and import business in the food industry.
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ucarecdn.com/e6f28a23-c80e-4ddd-92b1-36b78f4f5aec/ico.png" />
      </Head>
      <main>
        <Box className='hero-img' >

          <Navbar />
          <Hero1 />
        </Box>
         
        <Portfolio /> 
      </main>
    </>
  )
}
