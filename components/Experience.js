"use client"
import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position,company,companyLink,time,duration,work}) => {
    const ref=useRef(null);
    return (
        <li ref={ref} className='my-8 w-3/5 md:w-5/6 sm:w-5/6 mx-auto first:mt-0 last:mb-0 flex flex-col items-center justify-between bg-light dark:bg-dark dark:text-light'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
                <h3 className='font-bold capitalize text-2xl '>{position} <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {duration}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
}
const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgress} =useScroll({
        target:ref,
        offset:["start end","center start"]
    });
  return (
    <>
    <div className="mt-32">
        <h1 className="font-bold text-8xl mb-20  text-center w-full md:text-4xl sm:text-4xl">Experience</h1>
        <div ref={ref} className='w-3/4 mx-auto relative md:w-5/6 sm:w-5/6 '>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-8 md:left-4 sm:left-4 top-0 w-1 h-full bg-primary dark:bg-primaryDark origin-top'></motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position="Web Development Intern" company="LetsGrowMore" companyLink="https://letsgrowmore.in/" time="Aug 2021 - Sep 2021" duration="1 month" work="Created a single-page responsive web app with multiple sections for a sample company.
Developed an app with a loader functionality for better user interactions and displayed user information." />
            </ul>
        </div>
    </div>
    </>
  )
}

export default Experience