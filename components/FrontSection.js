import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import logo from "../public/logo.jpg";
const FrontSection = () => {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-orange-500 font-medium dark:text-orange-500 md:text-6xl">
          Abhay Sharma
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Web & Software Developer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
          Freelancer providing services for programming and design content
          needs. Join me down below and let's get cracking!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="https://www.twitter.com">
          <AiFillTwitterCircle className="cursor-pointer hover:text-blue-500 ease-out duration-500" />
        </a>
        <a href="https://www.linkedin.com/in/abhay-sharma-136bba215/">
          <AiFillLinkedin className="cursor-pointer hover:text-blue-500 ease-out duration-500" />
        </a>
        <a href="https://www.youtube.com">
          <AiFillYoutube className="cursor-pointer hover:text-red-500 ease-out duration-500" />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 sm:h-55 sm:w-55">
        <Image src={logo} alt="image" layout="fill" objectFit="cover" />
      </div>
    </>
  );
};

export default FrontSection;
