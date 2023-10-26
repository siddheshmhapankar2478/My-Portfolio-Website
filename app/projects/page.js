import AnimatedText from '@/components/AnimatedText';
import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import fodd_delivery_thumbnail from "../../public/images/projects/fodd_delivery_thumbnail.png";
import inventory_management_thumbnail from "../../public/images/projects/inventory_management_thumbnail.png";

const CardProject = ({ type, title, summary, image, link, githubLink }) => {
  return(
    <article className='w-full flex flex-col justify-center items-center rounded-2xl p-2 card border-solid border-dark  border-[15px] border-t-2 border-l-2 mb-8 rounded-br-2xl bg-light dark:bg-dark dark:text-light dark:border-light mx-auto'>
      <div className='w-full flex justify-center mx-auto h-fit'>
        <Link href={link} target='_blank'>
          <Image priority src={image} alt={title} className='w-full h-auto cursor-pointer rounded-lg' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </Link>
      </div>
      <div className='w-full flex flex-col'>
        <span className='text-primary dark:text-primaryDark font-medium text-lg mt-2 pl-2'>{type}</span>
        <div className='w-full flex flex-col items-start pl-2'>
          <Link href={link} target='_blank' className='hover:underline underline-offset-4'>
            <h2 className='w-full my-2 text-2xl font-bold'>{title}</h2>
          </Link>
          <div className='w-full text-xs'>
            <p>
              {summary}
            </p>
          </div>
          <div className='flex items-center justify-center my-3'>
            <Link href={githubLink} target='_blank' className='scale-[220%] bg-light  dark:bg-dark dark:text-light ml-2 '><GithubIcon/></Link>
            <Link href={link} target='_blank' className='bg-dark text-light dark:bg-light dark:text-dark px-3 py-1 rounded-lg text-md font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light ml-6'>Live Demo</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
const FeaturedProject = ({ type, title, summary, image, link, githubLink }) => {
  return (
    <article className='w-full flex items-center rounded-2xl p-4 card border-solid border-dark  border-[15px]  border-t-2 border-l-2 mb-16 rounded-br-2xl bg-light dark:bg-dark dark:text-light dark:border-light'>
      <div className='w-2/5'>
        <Link href={link} target='_blank'>
          <Image priority src={image} alt={title} className='w-full h-auto m-2  cursor-pointer rounded-lg' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </Link>
      </div>
      <div className='w-3/5 flex flex-col m-2'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl mt-4 ml-6 '>{type}</span>
        <div className='w-full flex flex-col items-start pl-6'>
          <Link href={link} target='_blank' className='hover:underline underline-offset-4'>
            <h2 className='w-full my-2 text-4xl font-bold'>{title}</h2>
          </Link>
          <div className='w-full'>
            <ul>
              {summary.map((summ, index) => {
                return (
                  <li key={index}>{summ}</li>
                );
              })}
            </ul>
          </div>
          <div className='flex items-center justify-center my-5'>
            <Link href={githubLink} target='_blank' className='scale-[300%] ml-10 bg-light  dark:bg-dark dark:text-light '><GithubIcon/></Link>
            <Link href={link} target='_blank' className='bg-dark text-light dark:bg-light dark:text-dark px-6 py-2 rounded-lg text-lg font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light ml-10'>Live Demo</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
const Projects = () => {
  return (
    <>

    <Head>
      <title>Portfolio Website | Projects</title>
      <meta name="description" content="Generated by create next app" />
    </Head>
    <main className="w-5/6 my-16 md:my-4 sm:my-4 mx-auto flex flex-col items-center justify-center">
      <AnimatedText text="Imagination Trumps Knowledge!" className={"mb-16 md:mb-4 sm:mb-4"}/>
      <div className='grid gridcols-12 gap-24'>
        <div className='col-span-12 lg:col-span-6 xl:col-span-8 md:hidden sm:hidden'>
          <FeaturedProject type="Featured Project" title="Food Delivery Web App" summary={["Created a food delivery web app with real-time cart functionality for ordering from restaurants.","Implemented a user-friendly menu browsing experience with a shimmer effect and dynamic item management using Redux.","Utilized HTML, Tailwind CSS, and React with Parcel bundler to enhance the app's accessibility and styling, ensuring a seamless user interface."]} image={fodd_delivery_thumbnail} link="https://siddhesh-food-delivery-app.netlify.app/" githubLink="https://github.com/siddheshmhapankar2478/A_Food_Delivery_Web_App"/>
          <FeaturedProject type="Featured Project" title="Inventory Management System" summary={[" Developed an inventory management web app for real-time stock tracking and total cost evaluation.","Implemented CRUD operations, allowing users to add, delete, and update items as needed.","Utilized MongoDB, Next.js, and Tailwind CSS to enhance functionality and user interface."]} image={inventory_management_thumbnail} link="https://siddhesh-atomstock.vercel.app/" githubLink="https://github.com/siddheshmhapankar2478/Inventory_Management_System"/>
        </div>
        <div className='hidden md:block sm:block'>
          <CardProject type="Featured Project" title="Food Delivery Web App" summary={["Created a food delivery web app with real-time cart functionality for ordering from restaurants.","Implemented a user-friendly menu browsing experience with a shimmer effect and dynamic item management using Redux.","Utilized HTML, Tailwind CSS, and React with Parcel bundler to enhance the app's accessibility and styling, ensuring a seamless user interface."]} image={fodd_delivery_thumbnail} link="https://siddhesh-food-delivery-app.netlify.app/" githubLink="https://github.com/siddheshmhapankar2478/A_Food_Delivery_Web_App"/>
          <CardProject type="Featured Project" title="Inventory Management System" summary={[" Developed an inventory management web app for real-time stock tracking and total cost evaluation.","Implemented CRUD operations, allowing users to add, delete, and update items as needed.","Utilized MongoDB, Next.js, and Tailwind CSS to enhance functionality and user interface."]} image={inventory_management_thumbnail} link="https://siddhesh-atomstock.vercel.app/" githubLink="https://github.com/siddheshmhapankar2478/Inventory_Management_System"/>
        </div>

      </div>
    </main>
    </>
  )
}

export default Projects;