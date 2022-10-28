import React from "react";
import Hero from "../assets/hero.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="explore" className="h-screen w-full bg-gradient-to-b bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pr-10">
            Software Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I am a developer with 2+ years experience in building software
            applications and responsive websites. My skillsets span through
            HTML, CSS, React and Javascript.
          </p>

          <div>
            <button
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={Hero}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full
            pl-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
