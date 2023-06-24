import {Box, Container, Grid, Typography} from '@mui/material'
import React, { useEffect } from 'react'
import gsap from 'gsap';

const Item = ({title,text,img,n}:{img:string,title:string,text:string,n:number}) => {
    return <Grid container sx={{mb:{xs:11,sm:8,md:0},py:{md:'2em',lg:0},width:'100%',justifyContent:{md:'space-between'},height:{lg:'700px'}}}>
        <Grid 
        className={`flex center col auto`} item xs={12} md={6} lg={5}>
            <Box
            className={`nb-${n}`}
            sx={{
                width:'99%',
                maxWidth: '530px'
            }}>
                <Typography component='h4' sx={{fontSize:'1em',pr:.65,fontWeight:'600'}} className={` clr4 count-${n}  `}>
                    0{n}
                </Typography>
                <Box className='flex align- gap ' >
                <Typography   component='h2' className='h2 clr2 '>
                    {title}
                </Typography>
                </Box>
                <Typography
                sx={{maxWidth:'sm',fontSize:'1.2em',mt:1.5}}
                    component='p'
                    
                    className='clr2 '>
          {text}
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={`flex center  col title-trigger${n} `}>
            <Box 
            className={`relative animated-img${n} `}
            sx={{opacity:0,
                // position:'sticky',top:0,
                // maxWidth:'650px',
                maxHeight:'410px',
                width:{xs:'100%',lg:'650px'},
                height:'100%',
                margin:{xs:'1em 0', md:'0 auto'},
                borderRadius: '8px'
            }}>
                <Box className={`absolute hider-${n}`} sx={{background:'white',height:'20%',top:0,width:'100%',maxWidth:'650px'}}>
    
                </Box>
                <img
                    src={img || "https://kota.co.uk/static/be60274f17826f2f328c276b8404f6bc/17f62/homepage-tribepad.webp"}
                    alt="Why Choose Us Image"
                    className="img br8"/>
            </Box>
        </Grid>
    </Grid>
}
const VerticalCarousel = () => {
useEffect(() => {

gsap.fromTo('.animated-img1',{opacity:0,y:'10px'},{y:'0%',opacity:1,scrollTrigger:{
    trigger:'.title-trigger1',
    start:'10% 50%',
}})
gsap.to('.hider-1',{height:'0%',scrollTrigger:{trigger:'.title-trigger1',start:'10% 50%'}})
gsap.fromTo('.nb-1 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-1',
    start:'top 50%',
}})


gsap.fromTo('.animated-img2',{opacity:0,y:'10px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
    trigger:'.title-trigger2',
    start:'10% 50%',
}})
gsap.to('.hider-2',{height:'0%',scrollTrigger:{trigger:'.title-trigger2',start:'10% 50%'}})

gsap.fromTo('.nb-2 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-2 ',
    start:'top 50%',
}})


gsap.fromTo('.animated-img3',{opacity:0,y:'10px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
    trigger:'.title-trigger3',
    start:'10% 50%',
}})
gsap.to('.hider-3',{height:'0%',scrollTrigger:{trigger:'.title-trigger3',start:'10% 50%'}})

gsap.fromTo('.nb-3 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-3',
    start:'top 50%',
}})


gsap.fromTo('.animated-img4',{opacity:0,y:'10px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
    trigger:'.title-trigger4',
    start:'10% 50%',
}})
gsap.to('.hider-4',{height:'0%',scrollTrigger:{trigger:'.title-trigger4',start:'10% 50%'}})

gsap.fromTo('.nb-4 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-4',
    start:'top 50%',
}})



gsap.fromTo('.animated-img5',{opacity:0,y:'10px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
    trigger:'.title-trigger5',
    start:'10% 50%',
}})
gsap.to('.hider-5',{height:'0%',scrollTrigger:{trigger:'.title-trigger5',start:'10% 50%'}})

gsap.fromTo('.nb-5 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-5',
    start:'top 50%',
}})

  
}, [])

    return (
        <Box>
            <Container sx={{width:'100%'}} maxWidth='xl'>

                <Item title={'IT and Maintenece Services'} text={'A customized maintenance program designed with your customers in mind. Extend the useful life of your customers’ IT assets with a single maintenance provider.'} img={'https://ucarecdn.com/2b20cb65-8dd6-4496-95c3-8f83961b1d1b/IT.jpg'} n={1}/>
                <Item title={'Food Wholesalers'} text={'We buy food and drink products in bulk enabling us to pass on huge savings to our customers.'} img={'https://ucarecdn.com/b4d5cdc0-a861-47db-8a01-6dec933aa437/food.jpg'} n={2}/>
                <Item title={'Taxi Services'} text={'One of Lebanon most respected taxi services. Besides providing comfort and convenient transportation.'} img={'https://ucarecdn.com/43745a89-94e3-48b9-92d3-35b8ddd61d41/taxi1.jpg'} n={3}/>
                <Item title={'Digital Business Expert'} text={'We offer unique and professional digital business services that bring your brand to life. Customer satisfaction guaranteed.'} img={'https://ucarecdn.com/7aa38683-10dd-4453-8e6e-0dda83f15e15/digital.jpg'} n={4}/>
                <Item title={'Import and Export'} text={'Export and import. Use help and advice from us to grow your business and buy and sell your goods and services internationally.'} img={'https://ucarecdn.com/3913425e-05e8-4ea6-9b64-f54b62db245b/import.jpg'} n={5}/>
                {/* <Item n={2}/> */}
                {/* <Item n={3}/> */}

            </Container>
        </Box>
    )
}

export default VerticalCarousel