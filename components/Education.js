"use client"
import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion';
import LiIcon from './LiIcon';
const Details = ({type,time,place,info}) => {
    const ref=useRef(null);
    return (
        <li ref={ref} className='my-8 w-3/5 md:w-5/6 sm:w-5/6 mx-auto first:mt-0 flex flex-col justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
                <h3 className='font-bold capitalize text-2xl '>{type}</h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
}
const Education = () => {
    const ref=useRef(null);
    const {scrollYProgress} =useScroll({
        target:ref,
        offset:["start end","center start"]
    });
  return (
    <div className="mt-32 lg:mb-[800px] 2xl:mb-[600px] md:mt-32 sm:mt-32 md:mb-60 sm:mb-96 ">
        <h1 className="font-bold text-8xl mb-20 text-center w-full md:text-4xl sm:text-4xl">Education</h1>
        <div ref={ref} className='w-3/4 mx-auto relative md:w-5/6 sm:w-5/6 '>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-8 md:left-4 sm:left-4 top-0 w-1 h-full bg-primary dark:bg-primaryDark origin-top'></motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4 '>
                <Details type="Bachelor Of Engineering In Computer Science" time="2019-2023" place="Terna Engineering College(Mumbai University)" info="Relevant courses included Data Structures and Algorithms, Database Management System, Operating Systems, Machine Learning and Artificial Intelligence. Graduated in 2023 with 9.27CGPA."  />
                <Details type="Class XII | HSC" time="2018-2019" place="Shivai Junior College" info="Relevant courses included Physics Chemistry Mathematics Computer Science. Graduated in 2019 with 70.77%."  />
                <Details type="Class X | SSC" time="2016-2017" place="Sri Ma Vidyalaya" info="Graduated in 2017 with 91.80%."  />
            </ul>
        </div>
    </div>
  )
}

export default Education