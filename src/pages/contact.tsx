import SMicons from '@/Components/SocialMedia/SMicons'
import Navbar from '@/Navbar/Navbar'
import {  Container,Box, Grid, TextField, Typography } from '@mui/material'
import Head  from 'next/head'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Btn from '@/Components/Btn/Btn'
import {BsFillSendFill} from 'react-icons/bs'
import ContactForm from '@/Components/ContactForm'
import Link from 'next/link'
const Index = () => {
 
  const form :any = useRef();
  const [status,
      setStatus] = useState(0)
  const [email,
      setEmail] = useState('')
  const sendMessage = async(e : any) => {

    e.preventDefault();

    if (!form.current) 
        return;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
        setStatus(400)
        return;
    }

    const req = await emailjs.sendForm(`service_eig2qxb`, 'template_gc3j6xq', form.current, '8qJYIm7toZyMq3yN_')
    const res = await req
    setStatus(res ? res?.status : 400)
    if (res?.status && form?.current) {
      form?.current?.reset()
    }
};

  return (
    <>
    <Head>
    <title>Contact Us | Azar Stores</title>
    <meta name="description" content="Contact our team today and get in touch with us for more information on our services. We're here to help and provide support to answer any questions you may have." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://ucarecdn.com/e6f28a23-c80e-4ddd-92b1-36b78f4f5aec/ico.png" />
  </Head>
  <Navbar dark/>
  <>
    <Grid container maxWidth='lg'  className='auto'  sx={{py:10}}>

        <Grid item xs={12} sm={6}>
    <Container >
        <Typography className='clr' sx={{fontSize:{xs:'2em'},my:3,fontWeight:'800'}}>
        Reach us at:
        </Typography>
        
        <Typography className='clr2' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>
            Lebanon/Beirut
        </Typography> 
        <Typography className='clr2' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>
        +961 81 25 80 45
        </Typography>
        <Typography className='clr2' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>   
        <Link href="mailto:azar.stores@gmail.com">
        azar.stores@gmail.com
        </Link> 
        </Typography>
        <Typography className='clr' sx={{fontSize:{xs:'2em'},my:3,fontWeight:'800'}}>
        Social media:
        </Typography>
        <SMicons color='black' sx={{'a':{borderColor:'black'},mt:2.5}}/>
    </Container>
        </Grid>   
    </Grid>

  </>
    </>
  )
}

export default Index