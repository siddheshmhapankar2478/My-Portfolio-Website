
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse w-full min-h-screen bg-light dark:bg-dark dark:text-light lg:flex-col md:flex-col">
        <div className="w-full h-auto flex justify-center items-center">
          <Image src="/images/home/developer-pic-1.png" priority quality={100} alt="My Image" className="w-full" width={300} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="w-full flex flex-col items-center self-center mx-2 bg-pink-400">
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className="text-center my-2" />
          <p className="my-4 text-base font-medium text-center">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-start my-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="btn-download"
              download={true}
            >
              Resume <LaunchIcon />
            </Link>
            <Link
              href="mailto:siddheshmhapankar2478@gmail.com"
              target="_blank"
              className="btn-contact ml-10"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="w-24 h-24 absolute right-12 bottom-4 hidden lg:inline-block md:inline-block sm:inline-block">
        <Image src="/images/svgs/miscellaneous_icons_1.svg" priority quality={100} alt="lightbulb" width={300} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
    </>
  );
}
