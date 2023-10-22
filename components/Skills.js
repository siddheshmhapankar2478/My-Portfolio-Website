"use client"

import React from 'react'
import {motion} from "framer-motion"

const SkillNames=({name,x,y})=>{
    return(
            <motion.div className='flex justify-center items-center absolute rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light' 
            whileHover={{scale:1.1}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y,transition:{duration:1.5}}}
            viewport={{once:true}}>
            {name}
            </motion.div>
    );
}
const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
            <motion.div className='flex justify-center items-center absolute rounded-full font-semibold  p-8 shadow-dark bg-dark dark:text-dark dark:shadow-light dark:bg-light text-white cursor-pointer ' whileHover={{scale:1.1}}>
            Web
            </motion.div>
            <SkillNames name={"HTML"} x="18vw" y="2vw"/>
            <SkillNames name={"CSS"} x="-18vw" y="-3vw"/>
            <SkillNames name={"Javascript"} x="10vw" y="-13vw"/>
            <SkillNames name={"ReactJS"} x="-20vw" y="9vw"/>
            <SkillNames name={"NextJS"} x="-10vw" y="-14vw"/>
            <SkillNames name={"MongoDB"} x="20vw" y="-18vw"/>
            <SkillNames name={"MySQL"} x="36vw" y="7vw"/>
            <SkillNames name={"Tailwind CSS"} x="31vw" y="-5vw"/>
            <SkillNames name={"C++"} x="23vw" y="12vw"/>
            <SkillNames name={"C"} x="-7vw" y="18vw"/>
            <SkillNames name={"Java"} x="5vw" y="14vw"/>
            <SkillNames name={"Python"} x="-28vw" y="15vw"/>
            <SkillNames name={"Git"} x="-20vw" y="-18vw"/>
            <SkillNames name={"Github"} x="-28vw" y="-8vw"/>
        </div>
    </>
  )
}

export default Skills