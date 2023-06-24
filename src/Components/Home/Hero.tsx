import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Btn from '../Btn/Btn'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import gsap from 'gsap';
import Link from 'next/link';

const Hero = ({blog,imgmd,title,desc}:{blog?:boolean,imgmd?:string,title?:string,desc?:string}) => {

  useEffect(() => {
    gsap.to('.hero-t1',{opacity:1,y:0,delay:.85})
    gsap.to('.hero-t2',{opacity:1,y:0,delay:1.1})
    gsap.to('.hero-btn',{opacity:1,y:0,delay:1.35,stagger:.25})
    gsap.to('.hero-trust',{opacity:1,y:0,delay:1.55})
  }, [])
  
  return (
    <Box sx={{py:4,width:'100%'}}>
        <Grid  container maxWidth='xl' className='auto' sx={{my:5,color:'white'}}>
                <Grid item md={12} sx={{height:'100%'}} className='flex center col'>
                  <Container>
                    <Typography  className='hero-t1 hid' sx={{lineHeight:'1.1em',maxWidth:'md',fontSize:{xs:'2.75em',sm:'4.2em',md:'4.7em'},fontWeight:'bolder'}} component='h1'>
                    {title ? title : 'Quality Services Since 2020'}
                    </Typography>
                    <Typography className=' hero-t2 clr3 hid' sx={{maxWidth:'600px',my:{xs:2.5,md:2.5},fontSize:{xs:'.89em'}}} component='h4'>
                    {desc ? desc : 'We are one of the largest IT company , food wholesalers, taxi, digital business expert and import export services'}
                    </Typography>

                    <Box sx={{py:2}}>
                        {/* <Link href='/'>Contact</Link> */}
                        <Link className='decor-none' href={blog ? '#latest':'/services'}>
                        <Btn  blur  sx={{px:{xs:2,sm:3}}} className='hid hero-btn'>
                      {blog ? 'Latest Articles' :  'Our Services'}
                        </Btn>
                        </Link>
                        <Link href='/contact' className='decor-none'>
                        <Btn className='hero-btn hid' sx={{mx:1,border:'none !important'}}>
                         Contact Us
                        </Btn>
                        </Link>
                      
                            <Typography sx={{maxWidth:'600px',my:{xs:2.5,md:2.5},gap:.5,fontWeight:300,fontSize:{xs:'.75em'}}} className='clr3 flex hero-trust hid align-center' component='h4'>
                            100% of our clients trust us
                            <VscWorkspaceTrusted/>
                    </Typography>
                    </Box>
                    </Container>
                    <Box sx={{height:'550px',display:{xs:'none',md:'flex'}}} className='hero-img absolute'>
                        <img src={imgmd ? imgmd : "https://ucarecdn.com/4a958265-6751-4a5d-b5af-cb22c605c18c/011.jpg"} alt="" className="img" />
                    </Box>
                    <Box sx={{height:'480px',display:{xs:'flex',md:'none'}}} className='hero-img absolute'>
                        <img src="https://ucarecdn.com/bbc23f18-8256-4a46-87ea-35c56a242f20/012.jpg" alt="" className="img" />
                    </Box>
{/* 
                    <Box sx={{display:{xs:'none',md:'flex'}}} className='hero-img absolute'>
                        <img src="https://ucarecdn.com/5c2b213c-8e9e-4090-b37d-5ae49a5a3eaf/ColourfulMinimalBrainstormRoadmapMindMap1.png" alt="" className="img" />
                    </Box>
                    <Box sx={{display:{xs:'flex',md:'none'}}} className='hero-img absolute'>
                        <img src="https://ucarecdn.com/1320e76b-8092-4a85-b4b3-ece1972cd17e/ColourfulMinimalBrainstormRoadmapMindMap3.png" alt="" className="img" />
                    </Box> */}

                    
                </Grid>
                {/* <Grid item xs={12}sm={8} className='auto' md={5}>
                    <img src="https://ucarecdn.com/b6687d6c-842c-42ef-8a44-bba5cbb501ce/earth3dglobe3dcomputergraphics3dmodelingearthpng9ddcc7ca59ea13ff69a2a4dfa7717621.png" className='img' alt="" />
                </Grid> */}
        </Grid>
    </Box>
  )
}

export default Hero