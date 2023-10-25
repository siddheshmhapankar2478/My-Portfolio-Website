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
  const [isOpen,setIsOpen]=useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <header className='min-w-full w-full z-10 shadow-sm px-32 py-5 font-bold text-lg flex items-center  gap-5 sticky top-0 left-0 right-0 bg-light dark:bg-dark dark:text-light lg:px-0 md:px-0 sm:px-0 xs:px-0'>
        {/* Mobile View */}
        <div className=' w-full flex-col sticky top-0 left-0 right-0  py-0 hidden lg:block md:block sm:block'>
        {
          (isOpen===true)?(
            <div className='w-full min-h-[100vh] hidden mx-[51%] lg:block md:block sm:block transition-all duration-300 ease-in-out  '>
              <button className='absolute left-0 top-0 pl-32 md:pl-8 sm:pl-8 xs:pl-8  flex-col justify-center items-center' onClick={handleClick}><CloseIcon/></button>
              <nav className='w-full flex flex-col gap-5  mt-12 justify-center items-center lg:mx-auto '>
                <button onclick={handleClick}><CustomLink href="/" title="Home" className='my-4 '>Home</CustomLink></button>
                <button onclick={handleClick}><CustomLink href="/about" title="About" className='my-4 '>About</CustomLink></button>
                <button onclick={handleClick}><CustomLink href="/experience" title="Experience" className='my-4 '>Experience</CustomLink></button>
                <button onclick={handleClick}><CustomLink href="/projects" title="Projects" className='my-4 '>Projects</CustomLink></button>
              </nav>
              <nav className="flex flex-col my-4 scale-125 justify-center items-center sm:flex-wrap md:flex-wrap lg:flex-wrap ">
                  <button onclick={handleClick}><motion.a href="https://www.linkedin.com/in/siddheshmhapankar2478/" target='_blank' className="w-6 my-4" whileHover={{y:-4}} whileTap={{scale:0.9}}><LinkedInIcon/></motion.a></button>
                  <button onclick={handleClick}><motion.a href="https://github.com/siddheshmhapankar2478" target='_blank' className="w-6 my-4" whileHover={{y:-4}} whileTap={{scale:0.9}}><GitHubIcon/></motion.a></button>
                  <button onclick={handleClick}><motion.a href="mailto:siddheshmhapankar2478@gmail.com" target='_blank' className="w-6 my-4" whileHover={{y:-4}} whileTap={{scale:0.9}}><MailIcon/></motion.a></button>
                  <button className={` flex my-4 items-center justify-center rounded-full border  ${mode==="dark"?"border-light":"border-dark"}`} 
                    onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                    {mode === 'dark' ? <WbSunnyIcon className='fill-light' /> : <NightlightRoundIcon className='fill-dark'/>}
                  </button>

              </nav>
            </div>
            ):
          (
            <div className='hidden lg:block md:block sm:block transition-all duration-300 ease-in-out'>
              <button className='  flex-col justify-center items-center pl-32 md:pl-8 sm:pl-8 xs:pl-8 ' onClick={handleClick}><MenuIcon/></button>
            </div>)
        }
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 py-2 z-10 flex items-center justify-center  '>
              <Logo/>
        </div>
          <div className="w-full flex justify-between">
            <nav className='flex gap-4  lg:hidden md:hidden sm:hidden z-10 '>
              <CustomLink href="/" title="Home" className=''>Home</CustomLink>
              <CustomLink href="/about" title="About" className=''>About</CustomLink>
              <CustomLink href="/experience" title="Experience" className=''>Experience</CustomLink>
              <CustomLink href="/projects" title="Projects" className='' >Projects</CustomLink>
            </nav>

            <nav className="flex  flex-wrap w-fit  items-center justify-end scale-125 float-right lg:hidden md:hidden sm:hidden ">
                <motion.a href="https://www.linkedin.com/in/siddheshmhapankar2478/" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><LinkedInIcon/></motion.a>
                <motion.a href="https://github.com/siddheshmhapankar2478" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><GitHubIcon/></motion.a>
                <motion.a href="mailto:siddheshmhapankar2478@gmail.com" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><MailIcon/></motion.a>
                <button className={`flex items-center justify-center rounded-full p-1 scale-75 border ${mode==="dark"?"border-light":"border-dark"}`} 
                  onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                  {mode === 'dark' ? <WbSunnyIcon className='fill-light' /> : <NightlightRoundIcon className='fill-dark'/>}
                </button>
            </nav>
          </div>

    </header>
  )
}

export default Navbar