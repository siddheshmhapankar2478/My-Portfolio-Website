import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import LaunchIcon from '@mui/icons-material/Launch';
export default function Home(){
  return (
    <>
          <div className="flex items-center justify-between w-full  min-h-screen bg-light dark:bg-dark dark:text-light">
            <div className="w-1/2 h-[80vh] flex justify-center">
              <Image src={"/images/home/developer-pic-1.png"} quality={100} alt={"My_Image"} className="w-full" width={300} height={300}/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center mb-6'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className={"!text-left my-2"}/>
              <p className="my-4 mr-20 text-base font-medium ">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className='flex items-center self-start my-4'>
                <Link href={"/resume.pdf"} target='_blank' className={"bg-dark text-light dark:bg-light dark:text-dark px-6 py-2 rounded-lg text-lg font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"} download={true}>               
                Resume <LaunchIcon/>
                </Link>
                <Link href={"mailto:siddheshmhapankar2478@gmail.com"} target='_blank' className={"bg-dark text-light dark:bg-light dark:text-dark px-6 py-2 rounded-lg text-lg font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark ml-10 dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"}>Contact</Link>
              </div>
            </div>
          </div>
        <div className="absolute right-12 bottom-4 inline-block w-24">
          {/* <Lightbulb className='w-24 text-yellow-300 scale-[14.50]'/> */}
        <Image src={"/images/svgs/miscellaneous_icons_1.svg"} quality={100} alt="lightbulb" width={300} height={300} className='w-full h-auto'></Image>
        </div>
    </>
  )
}
