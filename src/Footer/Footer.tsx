import SMicons from '@/Components/SocialMedia/SMicons';
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


const pages = [{href:'/',title:'Home'}, {title:'Services',href:'/services'}, {title:'Pricing',href:'#pricing'},{title:'Portfolio',href:'#portfolio'},{href:'/blog',title:'Blog'},{href:'#contact',title:'Contact'}];

const Footer = () => {
  const router = useRouter()
    return (
    <footer className='footer bg2'>
        <Grid  className=' auto flex space-between' container sx={{maxWidth:'xl',padding:'2em 1em',width:'100%',minHeight:'300px'}}>
        <Grid item xs={12} sm={6} md={4}>
            
        <Link

            className='logo'
            href="/" 
          > 
              <img src={  'https://ucarecdn.com/fd8aa309-447b-435d-b49d-4e51fe00885d/logo.png'
             } 
             className='img' alt="onbeirut logo" />
          </Link>
          <Typography component='h1' className='clr3' sx={{fontWeight:'100',maxWidth:'450px',mt:1}}>
          Our experienced team of IT professionals , food wholesalers, taxi, digital business expert and import export. We provide ongoing support to help you achieve success. 
          </Typography>
          <SMicons sx={{mt:2}}/>

        </Grid>
         
        <Grid item xs={12} sm={6} md={3} lg={2}>

        <Typography sx={{color:"white",fontSize:'1.5em',fontWeight:'700',pb:'.25em'}} className='clr4'>Contact Us</Typography>
        
        <Typography sx={{color:"white",fontSize:{xs:'1em',md:'1.3em'},fontWeight:'500',pb:'.25em'}} >+961 81 25 80 45</Typography>
        <Typography sx={{color:"white",fontSize:{xs:'1em',md:'1.3em'},fontWeight:'500',pb:'.25em'}} >azar.stores@gmail.com</Typography>
 
        </Grid>
         
        </Grid>
        </footer>
  )
}

export default Footer