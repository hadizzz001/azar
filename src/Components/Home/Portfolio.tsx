import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import gsap from 'gsap';
import Btn from '../Btn/Btn';
import Link from 'next/link';






const projects = [
  {
    title : 'Food Wholesalers', 
    description : 'We are one of the lebanese leading food wholesale.',
    img : 'https://ucarecdn.com/e4837b97-976b-4525-96be-90371d27aacb/food4.jpg',
    cate : ['Food wholesalers','food','shop']
  },
  {
    title : 'IT and Device Repairing', 
    description : 'We repair mobiles, laptops, servers, desktops, TVs, hardwares and inverts.',
    img : 'https://ucarecdn.com/3c3e1461-8785-4abe-9694-69d6560f96b9/IT4.jpg',
    cate : ['IT','Device']
  },
  {
    title : 'Taxi Services', 
    description : 'If you wish to just make a quick booking.',
    img : 'https://ucarecdn.com/a9ed3929-ea34-4caf-bdfd-95bfa46c1eeb/taxi4.jpg',
    cate : ['Taxi','Cab']
  },
  {
    title : 'Digital Business Experts', 
    description : 'Focused tips directly from the experts.',
    img : 'https://ucarecdn.com/32ac05ec-06b7-441c-8c85-634cb1de01df/digital4.jpg',
    cate : ['Digital','Market']
  },
  {
    title : 'Import/Export', 
    description : 'Providing the best quality service.',
    img : 'https://ucarecdn.com/1b7097cc-c008-45f4-a530-7aea4eff849a/import4.jpg',
    cate : ['Import','Export']
  },
  
]
const Portfolio = () => {
    useEffect(() => {
      gsap.to('.portfolio',{background:'#000000f0',duration:.5,scrollTrigger:{trigger:'.portfolio',markers:false,start:'top 50%'}})
      gsap.to('.img-hider-0',{height:'0%',scrollTrigger:{trigger:'.project-0',start:'10% 60%'}})
      gsap.to('.img-hider-1',{height:'0%',scrollTrigger:{trigger:'.project-1',start:'10% 60%'}})
      gsap.to('.img-hider-2',{height:'0%',scrollTrigger:{trigger:'.project-2',start:'10% 60%'}})
      gsap.to('.img-hider-3',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})

    }, [])
    
  return (
    <Box className='portfolio' id='portfolio' sx={{minHeight:'700px',width:'100%',background:'white'}}>
        <Container sx={{pb:"4em"}}  maxWidth='lg'>
            <Box  sx={{py:'4em',textAlign:'center'}}>
                <Typography sx={{color:"white",fontWeight:'700',fontSize:{xs:'2em',sm:'3em',md:'3.5em'}}}>
                Our Organization
                </Typography>
                <Typography sx={{color:"white",fontWeight:'200',fontSize:{xs:'1em',sm:'1.2em'},mb:2}} className='clr3'>
                    Who We Are
                </Typography>
            </Box>
            <Box className='flex space-between wrap'>

         {projects.map((project,idx)=>{   return <Box
         key={project.title}
         className={`project-${idx}`}
         sx={{
          pb:{xs:4,sm:'auto'},
          mt: {xs:0,sm:idx % 2 === 0 ? 0 : 15}
          ,width:{xs:'99%',sm:'50%'},maxWidth:'500px'}}>
                
                <Box className='relative' sx={{maxWidth:'500px'}}>
                  
                  <Box className={`absolute img-hider-${idx}`} sx={{background:'#0f0f0f',height:'20%',top:0,width:'100%',maxWidth:'650px'}}/>
                  <img src={project.img} alt="Project Image" className="img" />
                </Box>
                <Box className='flex row' sx={{gap:'.5em'}}>
                    {
                      project.cate.map(cate=>{
                        return <Typography key={cate} sx={{fontWeight:"600",fontSize:'.9em',my:1}} className='clr'>
                      {cate}
                  </Typography>
                      })
                    }
                </Box>
                <a style={{color:'white'}}>

                  <Typography sx={{fontWeight:"600",fontSize:'.9em',my:.15}} className='clr3'>
                  {}
              </Typography>
                </a>
              <Box sx={{color:'white'}}>
                <a style={{color:'white',textDecoration:'none'}}>

                  <Typography sx={{fontWeight:'900',cursor:'pointer',fontSize:{xs:'1.8em',sm:'2.5em'}}}>
                    {project.title}
                  </Typography>
                </a>
                  <Typography className='clr3' sx={{fontWeight:"400",py:'.15em',fontSize:{xs:'.8em'}}}>
                      {project.description}
                  </Typography>
              </Box>
            </Box>})}
            </Box>
            <Box className='auto center'  sx={{pt:5,with:'100%'}}>
            <Link href='/contact'>

            <Btn >
              Get Your Own
            </Btn>
            </Link>
            </Box>
        </Container>
    </Box>
  )
}

export default Portfolio