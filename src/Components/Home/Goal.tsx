import {Container, Box, Grid, Typography} from '@mui/material'
import React, { useEffect } from 'react'
import Btn from '../Btn/Btn'
import gsap from 'gsap';
import Link from 'next/link';



const Goal = () => {
    useEffect(() => {
        gsap.to('.goal-t1',{opacity:1,y:0,scrollTrigger:{trigger:'.goal-t1',start:'top 50%'}})
        gsap.to('.goal-t2',{opacity:1,y:0,delay:.15,scrollTrigger:{trigger:'.goal-t1',start:'top 50%'}})
        gsap.to('.goal-img',{opacity:1,y:0,delay:.35,duration:1,scrollTrigger:{trigger:'.goal-img',start:'top 50%'}})
        gsap.to('.goal-btn',{opacity:1,y:0,delay:.35,scrollTrigger:{trigger:'.goal-t1',start:'top 50%'}})
      }, [])
    return (
        <Box sx={{mt:{xs:4}}}>
            <Grid
                container
                className='flex auto'
                sx={{
                maxWidth: 'xl',
                flexDirection: {
                    xs: 'column-reverse',
                    sm: 'row'
                }
            }}>
                <Grid item xs={12} sm={7} md={6}>
                    <Container
                        sx={{
                        width: {
                            xs: '99%',
                            sm: '100%',
                            lg: '80%'
                        },
                        pb: {
                            xs: 2,
                            sm: 0
                        },
                        height: '100%'
                    }}
                        className='center flex auto align- col'>

                        <Typography component='h2' className='h2 clr2 goal-t1 hid '>
                        IT and Maintenece Services
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                            mt: 1.5
                        }}
                            className='clr2 goal-t2 hid '>

A customized maintenance program designed with your customers in mind. Extend the useful life of your customers’ IT assets with a single maintenance provider.                                
                            {/* Our goal is to empower small and medium-sized businesses by providing affordable, high-quality web development services.
                            We understand the importance of a strong online presence in today&apos;s digital world, and we&apos;re committed to helping you achieve it without costing you a fortune. 
                            Experience the perfect balance of quality and affordability with OnBeirut – let us be your partner in online success. */}
                            </Typography>
            <Link href='/services' className="decor-none">

                        <Btn
                        className='goal-btn hid'
                        dark
                        sx={{
                            color: '#0D2068',
                            borderColor: '#0D2068',
                            width: 'fit-content',
                            mt: 2
                        }}>

                            What We Offer
                        </Btn>
                            </Link>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={5} md={6}>
                    <Box className='goal-bg goal-img hid'>

                        <img
                            src="https://ucarecdn.com/468eea41-9429-4091-b6d4-e7f60b0ba74f/"
                            alt="Image List of Website designs"
                            className="contain img"/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Goal