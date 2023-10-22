"use client"

import Link from 'next/link'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg flex justify-between px-32 py-6 bg-light dark:bg-dark dark:text-light'>
        <span>{new Date().getFullYear()} &nbsp;<CopyrightIcon/> &nbsp;All Rights Reserved</span>
        <div>
            Build With <span className='text-blue-400 text-2xl'><FavoriteIcon/></span> By &nbsp;<Link href={"https://www.linkedin.com/in/siddheshmhapankar2478/"} target="_blank" className='underline underline-offset-2'>Siddhesh</Link>
        </div>
        <Link href="https://www.linkedin.com/in/siddheshmhapankar2478/" target="_blank" className='underline underline-offset-2'>Say hello</Link>
    </footer>
  )
}

export default Footer