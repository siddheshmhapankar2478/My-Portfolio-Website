"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/navigation'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import {motion} from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) => { 
  const router=useRouter();
  return(
  <Link href={href} className={`${className} relative group` }> {title}
    <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
    ${router.asPath===href ? 'w-full':'w-0'}`} >&nbsp;</span>
  </Link>
  );
}

const Navbar = () => {
  const [mode,setMode]=useThemeSwitcher();
  return (
    <header className=' w-full z-10 shadow-sm px-32 py-5 font-bold text-lg flex items-center justify-between gap-5 sticky top-0 left-0 right-0 bg-light dark:bg-dark dark:text-light '>
        <nav className='flex gap-5'>
            <CustomLink href="/" title="Home" className='mr-4'>Home</CustomLink>
            <CustomLink href="/about" title="About" className='mx-4'>About</CustomLink>
            <CustomLink href="/experience" title="Experience" className='mx-4'>Experience</CustomLink>
            <CustomLink href="/projects" title="Projects" className='mx-4'>Projects</CustomLink>
          </nav>
          <div className='absolute left-[50%] flex justify-center '>
            <Logo/>
          </div>
          <nav className="flex flex-wrap item-center justify-center scale-125 gap-2">
              <motion.a href="https://www.linkedin.com/in/siddheshmhapankar2478/" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><LinkedInIcon/></motion.a>
              <motion.a href="https://github.com/siddheshmhapankar2478" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><GitHubIcon/></motion.a>
              <motion.a href="mailto:siddheshmhapankar2478@gmail.com" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><MailIcon/></motion.a>
              <button className={`ml-3 flex items-center justify-center rounded-full p-2 border ${mode==="dark"?"border-light":"border-dark"}`} 
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                {mode === 'dark' ? <WbSunnyIcon className='fill-light' /> : <NightlightRoundIcon className='fill-dark'/>}
              </button>
          </nav>

    </header>
  )
}

export default Navbar