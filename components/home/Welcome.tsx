import { Link } from "react-scroll";

import { Typewriter } from "react-simple-typewriter";

export const Welcome = () => {
  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        Hi, My Name is{" "}
        <span className="block font-bold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Mehmet.
        </span>
      </h1>

      <hr className="w-28 my-3 p-1 bg-gradient-to-r from-purple-500 to-red-500 border-none rounded-sm" />

      <h2 className="font-light text-primary text-lg mb-5 lg:text-2xl mt-2">
        I am a{" "}
        <span className="text-white font-semibold">
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1500}
            words={[
              "Software Developer.",
              "Frontend Developer.",
              "Backend Developer.",
              "Next Developer.",
              "React Developer.",
              "Javascript Developer.",
              "Programer.",
            ]}
          />
        </span>
      </h2>

      <p className="text-primary max-w-lg text-justify font-mono">
        &quot; Our greatest glory is not in never falling, but in rising every
        time we fall.&quot;
        <span className="block text-slate-200 mt-1"> - Confucius</span>
      </p>

      <div className="grid grid-cols-2 my-3 gap-x-2 lg:max-w-lg">
        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
          <button
            type="button"
            className="w-full my-4 py-3 px-6 rounded-md font-semibold border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 hover:shadow-lg transition-all duration-300">
            <span className="text-white">About Me</span>
          </button>
        </Link>

        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          <button
            type="button"
            className="w-full my-4 py-3 px-6 rounded-md font-semibold border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 hover:shadow-lg transition-all duration-300">
            <span className="text-white">Get In Touch</span>
          </button>
        </Link>
      </div>
    </>
  );
};
