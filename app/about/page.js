import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import aboutImage from "../../public/images/about/header-img.svg"
import Image from 'next/image'
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
    return (
        <>

        <TransitionEffect/>
        <main className="w-full min-w-full min-h-screen flex flex-col items-center  dark:bg-dark dark:text-light mt-32">
                <AnimatedText text={"Passion Fuels Purpose"}></AnimatedText>
                <div className='w-3/5 h-full font-medium flex lg:flex-col-reverse md:flex-col-reverse  justify-center lg:w-3/4 md:w-3/4 sm:w-3/4 '>
                    <div className='w-3/5 flex flex-col  items-start justify-start lg:w-full md:w-full sm:w-full '>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:mx-auto md:mx-auto sm:mx-auto'>Biography</h2>
                        <p className='font-medium my-4'>I&rsquo;m Siddhesh Mhapankar, a passionate frontend developer with hands-on experience in crafting captivating web applications. </p>
                        <p className='font-medium my-4'>My journey began with creating a single-page responsive web app, and I&rsquo;ve since ventured into enhancing user interactions and developing feature-rich web solutions.</p>
                        <p className='font-medium my-4'>With a strong educational foundation in Computer Science and a knack for cutting-edge technologies, I take pride in building elegant and efficient web experiences. Let&rsquo;s bring your web projects to life together!</p>
                    </div>
                    <div className='w-2/5  sm:mx-auto lg:mx-auto md:mx-auto md:w-3/4 sm:w-3/4'>
                        <Image src={aboutImage} priority  alt={"About_Page_Image"} className="w-full mx-auto h-auto"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>
        </main>
    
        </>
      )
}

export default About