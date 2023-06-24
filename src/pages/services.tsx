import Btn from '@/Components/Btn/Btn'
import Navbar from '@/Navbar/Navbar'
import { Grid, Box, Link, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect } from 'react'
import gsap from 'gsap';


const Services = () => {
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
                <link rel="icon" href="https://ucarecdn.com/e6f28a23-c80e-4ddd-92b1-36b78f4f5aec/ico.png" />
            </Head>
            <Navbar dark />
            <Grid container sx={{ mb: '2em' }}>
                <Grid className='bg' item xs={12} md={8} lg={9} sx={{ mb: '0em', borderBottomRightRadius: '40px', }} xl={10}>
                    <Box sx={{ margin: '0 auto', maxWidth: 'xl', px: '1em', py: { xs: '4em', md: '7em' }, minHeight: '200px' }}>
                        <Box sx={{ maxWidth: 'md', margin: '0 auto' }}>

                            <Typography className='hero-t1 hid' sx={{ color: 'black', opacity: 0, lineHeight: '1.1em', maxWidth: { xs: '600px', lg: '800px' }, fontSize: { xs: '2.75em', sm: '4.2em', md: '4.7em' }, fontWeight: 'bolder' }} component='h1'>
                                {'Our Services and Solutions'}
                            </Typography>
                            <Typography className=' hero-t2  hid' sx={{ color: 'black', opacity: 0, maxWidth: '450px', my: { xs: 2.5, md: 2.5 }, fontSize: { xs: '.80em' } }} component='h4'>
                                {'Our experienced team of IT professionals , food wholesalers, taxi, digital business expert and import export. We provide ongoing support to help you achieve success.'}
                            </Typography>

                            <Box sx={{ pt: 2 }}>

                                <Link className='decor-none' href={'/contact'}>
                                    <Btn blur sx={{ px: { xs: 2, sm: 3 } ,color: 'black'}} className='hid hero1-btn'>
                                        {'CONTACT US'}
                                    </Btn>
                                </Link>
                            </Box>

                        </Box>



                    </Box>
                </Grid>
                <Grid item xs={0} md={4} lg={2.8} xl={2} className='centerize' sx={{ display: { xs: 'none', md: 'flex' }, maxWidth: 'sm' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, height: { xs: '400px', lg: '450px', xl: '480px' }, transform: { xs: 0, md: 'translateX(-25%)', lg: 'translateX(-60%)' } }}>
                        <img style={{ borderRadius: '8px', borderBottomRightRadius: '20px' }} src="https://ucarecdn.com/cb11a90b-73c4-4187-8584-83287ede3558/digital5.jpg" alt="Work Image" className="img" />
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
                                src={"https://ucarecdn.com/3e07be1b-9b19-4701-be21-7b2c918349c2/IT1.jpg"}
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
                                src={"https://ucarecdn.com/3e07be1b-9b19-4701-be21-7b2c918349c2/IT1.jpg"}
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
                                IT and Maintenance
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                component='p'

                                className='clr2 '>
                                Extend the life of your IT assets with control over your hardware refresh cycle.
                            </Typography>
                            <Link href='/IT' className="decor-none">

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
                                Food Wholesalers
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                component='p'

                                className='clr2 '>
                                Get fast shipping on thousands of products and low prices.
                            </Typography>
                            <Link href='/food' className="decor-none">

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
                                src={"https://ucarecdn.com/0fa5821b-30d3-4939-b0d2-c0c940b22121/food2.jpg"}
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
                                src={"https://ucarecdn.com/0fa5821b-30d3-4939-b0d2-c0c940b22121/food2.jpg"}
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
                                    Food Wholesalers
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                    component='p'

                                    className='clr2 '>
                                    Get fast shipping on thousands of products and low prices.
                                </Typography>
                                <Link href='/food' className="decor-none">

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

















                <Grid container sx={{ mb: { xs: 11, sm: 8, md: 0 }, py: { md: '2em', lg: 0 }, width: '100%', justifyContent: { md: 'space-between' }, height: { lg: '700px' } }}>
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
                                src={"https://ucarecdn.com/43745a89-94e3-48b9-92d3-35b8ddd61d41/taxi1.jpg"}
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
                                src={"https://ucarecdn.com/43745a89-94e3-48b9-92d3-35b8ddd61d41/taxi1.jpg"}
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
                                Taxi Services
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                component='p'

                                className='clr2 '>
                                We're your ride company for anywhere you need to go, whenever you need to go there.
                            </Typography>
                            <Link href='/taxi' className="decor-none">

                                <Btn
                                    className='goal-btn hid'
                                    dark
                                    sx={{
                                        color: '#b69047',
                                        borderColor: '#b69047',
                                        width: 'fit-content',
                                        mt: 2
                                    }}>

                                    More Details
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
                                Digital Business Expert
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                component='p'

                                className='clr2 '>
                                Combines business and technology consulting experience and flexibility to create tailored solutions for your problems.
                            </Typography>
                            <Link href='/digital' className="decor-none">

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
                                src={"https://ucarecdn.com/74c45fa1-966b-456c-8e47-3932053378fc/digital1.jpg"}
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
                                src={"https://ucarecdn.com/74c45fa1-966b-456c-8e47-3932053378fc/digital1.jpg"}
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
                                    Digital Business Expert
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                    component='p'

                                    className='clr2 '>
                                    Combines business and technology consulting experience and flexibility to create tailored solutions for your problems.
                                </Typography>
                                <Link href='/digital' className="decor-none">

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

















                <Grid container sx={{ mb: { xs: 11, sm: 8, md: 0 }, py: { md: '2em', lg: 0 }, width: '100%', justifyContent: { md: 'space-between' }, height: { lg: '700px' } }}>
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
                                src={"https://ucarecdn.com/bb2df457-e29f-4f4a-9219-be5b8d2afaaa/import1.jpg"}
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
                                src={"https://ucarecdn.com/bb2df457-e29f-4f4a-9219-be5b8d2afaaa/import1.jpg"}
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
                                Import and Export
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ maxWidth: 'sm', fontSize: '1.2em', mt: .5 }}
                                component='p'

                                className='clr2 '>
                                Contact us now to find global import and export services.
                            </Typography>
                            <Link href='/import_export' className="decor-none">

                                <Btn
                                    className='goal-btn hid'
                                    dark
                                    sx={{
                                        color: '#b69047',
                                        borderColor: '#b69047',
                                        width: 'fit-content',
                                        mt: 2
                                    }}>

                                    More Details
                                </Btn>
                            </Link>
                        </Box>
                    </Grid>

                </Grid>









            </Box>
        </>

    )
}

export default Services