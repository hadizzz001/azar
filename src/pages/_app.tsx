import Footer from '@/Footer/Footer'
// import Navbar from '@/Navbar/Navbar'
import '@/styles/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import Script from 'next/script'


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
export default function App({ Component, pageProps }: AppProps) {
  return <>
 
 
  <Component {...pageProps} />
  <Footer/>
  </>
}
