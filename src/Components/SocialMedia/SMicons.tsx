import { Box } from '@mui/material';
import React from 'react'
import {FaFacebook ,FaInstagram,FaWhatsapp} from 'react-icons/fa';
const sm = [
    {
        Icon:FaInstagram,
        href:'https://www.instagram.com/azar_stores'
    },
    {Icon:FaWhatsapp,href:'https://wa.me/96181258045'},
    {

    Icon:FaFacebook,   href:'https://www.facebook.com/profile.php?id=100068023655531'
}]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    <Box className='row flex' sx={{maxWidth:'200px',...sx}}>

    {sm.map((item)=>{
      return <a key={item.href} className='center flex auto rounded smIcon pointer align-center gap white' href={`${item.href}`} target='_blank' rel={'noneferrer'}>

            <item.Icon color={color || 'white'} size='2em'/>
         </a>
    })}
    </Box>
  )
}

export default SMicons