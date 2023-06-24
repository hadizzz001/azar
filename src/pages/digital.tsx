import Btn from '@/Components/Btn/Btn'
import Navbar from '@/Navbar/Navbar'
import { Grid, Box, Link, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect } from 'react'
import gsap from 'gsap';


const Services = () => {
    useEffect(() => {
        gsap.to('.hero-t1', { opacity: 1, y: 0, delay: .85 })
        gsap.to('.hero-t2', { opacity: 1, y: 0, delay: 1.1 })
        gsap.to('.hero-btn', { opacity: 1, y: 0, delay: 1.35, stagger: .25 })
        gsap.to('.hero-trust', { opacity: 1, y: 0, delay: 1.55 })
    }, [])
    useEffect(() => {

        gsap.fromTo('.animated-img1', { opacity: 0, y: '10px' }, {
            y: '0%', opacity: 1, scrollTrigger: {
                trigger: '.title-trigger1',
                start: '10% 50%',
            }
        })
        gsap.to('.hider-1', { height: '0%', scrollTrigger: { trigger: '.title-trigger1', start: '10% 50%' } })
        gsap.fromTo('.nb-1 > *', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0',
            stagger: .25,
            scrollTrigger: {
                trigger: '.count-1',
                start: 'top 50%',
            }
        })


        gsap.fromTo('.animated-img2', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0', ease: 'ease-in', scrollTrigger: {
                trigger: '.title-trigger2',
                start: '10% 50%',
            }
        })
        gsap.to('.hider-2', { height: '0%', scrollTrigger: { trigger: '.title-trigger2', start: '10% 50%' } })

        gsap.fromTo('.nb-2 > *', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0',
            stagger: .25,
            scrollTrigger: {
                trigger: '.count-2 ',
                start: 'top 50%',
            }
        })


        gsap.fromTo('.animated-img3', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0', ease: 'ease-in', scrollTrigger: {
                trigger: '.title-trigger3',
                start: '10% 50%',
            }
        })
        gsap.to('.hid', { opacity: 1, scrollTrigger: { trigger: '.title-trigger3', start: '10% 50%' } })

        gsap.fromTo('.nb-3 > *', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0',
            stagger: .25,
            scrollTrigger: {
                trigger: '.count-3',
                start: 'top 50%',
            }
        })


        gsap.fromTo('.animated-img4', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0', ease: 'ease-in', scrollTrigger: {
                trigger: '.title-trigger4',
                start: '10% 50%',
            }
        })
        gsap.to('.hid', { opacity: 1, scrollTrigger: { trigger: '.title-trigger4', start: '10% 50%' } })

        gsap.fromTo('.nb-4 > *', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0',
            stagger: .25,
            scrollTrigger: {
                trigger: '.count-4',
                start: 'top 50%',
            }
        })



        gsap.fromTo('.animated-img5', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0', ease: 'ease-in', scrollTrigger: {
                trigger: '.title-trigger5',
                start: '10% 50%',
            }
        })
        gsap.to('.hid', { opacity: 1, scrollTrigger: { trigger: '.title-trigger5', start: '10% 50%' } })

        gsap.fromTo('.nb-5 > *', { opacity: 0, y: '10px' }, {
            opacity: 1, y: '0',
            stagger: .25,
            scrollTrigger: {
                trigger: '.count-5',
                start: 'top 50%',
            }
        })


    }, [])
    return (
        <>
            <Head>
                <title>Services Page | Azar Stores</title>
                <meta name="description" content="Our experienced team of IT professionals , food wholesalers, taxi, digital business expert and import export. We provide ongoing support to help you achieve success. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://ucarecdn.com/25471d53-ac9b-4d74-95ad-c1a1233c2b16/ico.png" />
            </Head>
            <Navbar dark />
            <Grid container sx={{ mb: '2em' }}>
                <Grid className='bg2' item xs={12} md={8} lg={9} sx={{ mb: '0em', borderBottomRightRadius: '40px', }} xl={10}>
                    <Box sx={{ margin: '0 auto', maxWidth: 'xl', px: '1em', py: { xs: '4em', md: '7em' }, minHeight: '200px' }}>
                        <Box sx={{ maxWidth: 'md', margin: '0 auto' }}>

                            <Typography className='hero-t1 hid' sx={{ color: 'white', opacity: 0, lineHeight: '1.1em', maxWidth: { xs: '600px', lg: '800px' }, fontSize: { xs: '2.75em', sm: '4.2em', md: '4.7em' }, fontWeight: 'bolder' }} component='h1'>
                                {'Digital Business Expert'}
                            </Typography>
                            <Typography className=' hero-t2  hid' sx={{ color: 'white', opacity: 0, maxWidth: '450px', my: { xs: 2.5, md: 2.5 }, fontSize: { xs: '.80em' } }} component='h4'>
                                {'Combines business and technology consulting experience and flexibility to create tailored solutions for your problems.'}
                            </Typography>

                            <Box sx={{ pt: 2 }}>

                                <Link className='decor-none' href={'/contact'}>
                                    <Btn blur sx={{ px: { xs: 2, sm: 3 } }} className='hid hero-btn'>
                                        {'CONTACT US'}
                                    </Btn>
                                </Link>
                            </Box>

                        </Box>



                    </Box>
                </Grid> 

            </Grid>





























            <Box maxWidth='xl' sx={{ margin: '0 auto', px: '1em' }}>


            <Grid container sx={{ mb: { xs: 11, sm: 8, md: 0 }, py: { md: '2em', lg: 5 }, width: '100%', justifyContent: { md: 'space-between' }, height: { lg: '700px' } }}>
                    <Grid item xs={12} md={6} lg={6} className={`flex center  col title-trigger1 `}>
                        <Box
                            className={`relative animated-img1 `}
                            sx={{
                                opacity: 0,
                                // position:'sticky',top:0,
                                // maxWidth:'650px',
                                display: { xs: 'none', sm: 'flex' },
                                maxHeight: '510px',
                                width: { xs: '100%', lg: '650px' },
                                height: '100%',
                                margin: { xs: '1em 0', md: '0 auto' },
                                borderRadius: '8px'
                            }}>

                            <img
                                src={"https://ucarecdn.com/9e04100d-4ca0-48cd-893d-5eccd0b171a4/digital2.jpg"}
                                alt="Image"
                                className="img br8" />
                        </Box>

                        <Box
                            className={`relative animated-img1 `}
                            sx={{
                                opacity: 0,
                                // position:'sticky',top:0,
                                // maxWidth:'650px',
                                display: { xs: 'flex', sm: 'none' },
                                maxHeight: '510px',
                                width: { xs: '100%', lg: '650px' },
                                height: '100%',
                                margin: { xs: '1em 0', md: '0 auto' },
                                borderRadius: '8px'
                            }}>

                            <img
                                src={"https://ucarecdn.com/9e04100d-4ca0-48cd-893d-5eccd0b171a4/digital2.jpg"}
                                alt="Image"
                                className="img br8" />
                        </Box>

                    </Grid>


                    <Grid
                        className={`flex center col auto`} item xs={12} md={6} lg={5}>
                        <Box
                            className={`nb-1`}
                            sx={{
                                width: '99%',
                                maxWidth: '530px'
                            }}>

                            <Box className='flex ' >
                                <Typography component='h1' className='h2 clr2 '>
                                Digital Business Expert
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                component='p'

                                className='clr2 '>
                                Talk with business experts and get an overview of how business is done.
                            </Typography>
                            <Link href='/contact' className="decor-none">

                                <Btn
                                    className='goal-btn hid'
                                    dark
                                    sx={{
                                        color: '#b69047',
                                        borderColor: '#b69047',
                                        width: 'fit-content',
                                        mt: 2
                                    }}>

                                    View More
                                </Btn>
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
















                <Grid container sx={{
                    mb: { xs: 11, sm: 8, md: 0 },
                    flexWrap: 'wrap',

                    py: { md: '2em', lg: 0 }, width: '100%', justifyContent: { md: 'space-between' }, height: { lg: '700px' }
                    }}>

                    <Grid
                        className={`flex center col auto`} item xs={12} md={6} lg={5}>
                        <Box
                            className={`nb-1`}
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                width: '99%',
                                flexWrap: 'wrap',
                                maxWidth: '530px'
                            }}>

                            <Box className='flex ' >
                                <Typography component='h1' className='h2 clr2 '>
                                Digital Strategy Expert
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                component='p'

                                className='clr2 '>
                                Focused tips directly from the experts.
                            </Typography>
                            <Link href='/contact' className="decor-none">

                                <Btn
                                    className='goal-btn hid'
                                    dark
                                    sx={{
                                        color: '#b69047',
                                        borderColor: '#b69047',
                                        width: 'fit-content',
                                        mt: 2
                                    }}>

                                    Learn More
                                </Btn>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid sx={{
                        flexWrap: 'wrap',

                        }} item xs={12} md={6} lg={6} className={`flex center   title-trigger1 `}>
                        <Box
                            className={`relative animated-img1 `}
                            sx={{
                                opacity: 0,
                                flexWrap: 'wrap',
                                // position:'sticky',top:0,
                                // maxWidth:'650px',
                                display: { xs: 'none', sm: 'flex' },
                                maxHeight: '510px',
                                maxWidth: { xs: '100%', lg: '650px' },
                                height: '100%',
                                width: '100%',
                                margin: { xs: '1em 0', md: '0 auto' },
                                borderRadius: '8px'
                                
                            }}>

                            <img
                                src={"https://ucarecdn.com/ae51e6f2-a72d-4fbc-85fa-a7b655ad125f/digital3.jpg"}
                                alt="Image"
                                className="img br8" />
                        </Box>

                        <Box
                            className={`relative animated-img1 `}
                            sx={{
                                opacity: 0,
                                // position:'sticky',top:0,
                                // maxWidth:'650px',
                                display: { xs: 'flex', sm: 'none' },
                                maxHeight: '510px',
                                maxWidth: { xs: '100%', lg: '650px' },
                                height: '100%',
                                width: '100%',
                                minWidth: '250px',
                                margin: { xs: '1em 0', md: '0 auto' },
                                borderRadius: '8px'
                                
                            }}>

                            <img
                                src={"https://ucarecdn.com/ae51e6f2-a72d-4fbc-85fa-a7b655ad125f/digital3.jpg"}
                                alt="Image"
                                className="img br8" />
                        </Box>
                        <Grid
                            className={`flex center col auto`} item xs={12} md={6} lg={5}>
                            <Box
                                className={`nb-1`}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    width: '99%',
                                    maxWidth: '530px',
                                    marginBottom: '350px !important'
                                }}>

                                <Box className='flex ' >
                                    <Typography component='h1' className='h2 clr2 '>
                                    Digital Strategy Expert
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                    component='p'

                                    className='clr2 '>
                                    Focused tips directly from the experts.
                                </Typography>
                                <Link href='/contact' className="decor-none">

                                    <Btn
                                        className='goal-btn hid'
                                        dark
                                        sx={{
                                            color: '#b69047',
                                            borderColor: '#b69047',
                                            width: 'fit-content',
                                            mt: 2
                                        }}>

                                        Know More
                                    </Btn>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid> 
 
            </Box>
        </>

    )
}

export default Services