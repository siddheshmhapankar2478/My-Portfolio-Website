"use client"
import About from "./about/page";
import Home from "./home/page";
import Projects from "./projects/page";
import { useEffect } from "react";
export default function HomePage() {
  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }},[]);
  return (
    <main>
      <Home/>
      <About/>
      <Projects/>
    </main>
  )
}