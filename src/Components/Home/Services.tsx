import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Btn from '../Btn/Btn'
import gsap from 'gsap';
import { useRouter } from 'next/router';


const Services = () => {
  useEffect(() => {
    gsap.to('.service-bg',{x:0,scrollTrigger:{trigger:'.service-bg',start:'top 40%'}})
    gsap.to('.serv-t1',{opacity:1,y:0,delay:.55,scrollTrigger:{trigger:'.service-bg',start:'top 60%'}})
    gsap.to('.serv-btn',{opacity:1,y:0,delay:.8,scrollTrigger:{trigger:'.service-bg',start:'top 60%'}})
    gsap.to('.serv-img',{opacity:1,y:0,delay:1,scrollTrigger:{trigger:'.service-bg',start:'top 60%'}})
  }, [])
  const router = useRouter()
  return (
    <Box className='bg service-bg' >
        <Grid container className='flex center items-center align-center auto'  maxWidth='xl' sx={{height:'100%',minHeight:'600px'}} >
             <Grid item xs={12} sm={7}>
                    <Container sx={{mt:{xs:4,sm:0},textAlign:{xs:'center',sm:'left'},color:'white'}}>
                    <Typography className='hid serv-t1' sx={{fontWeight:"700",fontSize:{xs:'2em',sm:'3.2em',lg:'3.5em'}}}>
                    Reach Us For More Details
                    </Typography>
                    
                    <Btn blur onClick={()=>router.push('/contact')} sx={{my:2}} className='hid serv-btn'>
                      <Typography  sx={{fontSize:'.85em'}}>
                      Contact Us
                      </Typography>
                    </Btn>
                    </Container>

                </Grid>       
                <Grid item xs={12} sm={5}>
                    <Box className='hid serv-img' sx={{maxWidth:'550px'}}>
                      <img src="https://ucarecdn.com/70f12043-eb36-4b39-83bd-574b6dc31e40/headphone.png" alt="Azar Stores Services Image" className="img" />
                    </Box>
                </Grid>       
        </Grid>
    </Box>
  )
}

export default Services