import TransitionEffect from "@/components/TransitionEffect";
import About from "./about/page";
import Home from "./home/page";
import Projects from "./projects/page";
export default function HomePage() {
  return (
    <>
      <TransitionEffect/>
      <main>
        <Home/>
        <About/>
        <Projects/>
      </main>

    </>
  )
}