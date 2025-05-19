"use client";

import Swal from "sweetalert2";
import Image from "next/image";
import { SiReact, SiPython, SiOpenai, SiSharp, SiUnity } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoHtml5,
} from "react-icons/bi";

export const ProjectLists = () => {
  const projects = [
    {
      name: "News Summarizer",
      description:
        "News Summarizer and Classifier is a Python-based application utilizing NLP and Machine Learning to fetch real-time news from RSS feeds, summarize articles using Latent Semantic Analysis (LSA), and categorize them. It features an interactive CustomTkinter GUI for efficient analysis.",
      title: "Visit News Summarizer? ☄️",
      link: "https://github.com/mehmeettoprakk/news-summarizer",
      img: "/project/news.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Flappy Bird ",
      description:
        "Flappy Bird Clone is a Unity and C#-powered arcade game inspired by the classic Flappy Bird, offering a simple yet challenging experience. It features smooth controls, responsive physics, and engaging gameplay that tests players' reflexes as they navigate obstacles and aim for the highest score.",
      title: "Visit Flappy Bird? ☄️",
      link: "https://github.com/mehmeettoprakk/Flappy-Bird",
      img: "/project/bird.png",
      stacks: [
        {
          name: "C#",
          logo: <SiSharp className="text-white w-7 h-7" />,
        },
        {
          name: "Unity",
          logo: <SiUnity className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Downloader",
      description:
        "Downloader is a Java-based file download manager built using Java Swing and multithreading. It allows users to download multiple files simultaneously, with each download running on a separate thread. The application provides full control over the downloads, enabling users to pause, resume, and cancel individual downloads efficiently.",
      title: "Visit Downloader? ☄️",
      link: "https://github.com/mehmeettoprakk/Downloader",
      img: "/project/downloader.png",
      stacks: [
        {
          name: "Java",
          logo: <BiLogoJava className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Türkiye Yüzyılı",
      description:
        "Türkiye Yüzyılı is a static website built with HTML, CSS, and JavaScript, envisioning what Turkey might look like in the next century. The website presents an interactive and visually appealing experience, incorporating structured assets and responsive design to showcase future possibilities, innovations, and developments.",
      title: "Visit Türkiye Yüzyılı? ☄️",
      link: "https://github.com/mehmeettoprakk/turkiye_yuzyili",
      img: "/project/türkiye.png",
      stacks: [
        {
          name: "CSS",
          logo: <BiLogoCss3 className="text-white w-7 h-7" />,
        },
        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "HTML",
          logo: <BiLogoHtml5 className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Youtube Sentiment Analysis",
      description:
        "YouTube Sentiment Analysis is a Python-based NLP project that uses Word2Vec and LSTM models to classify YouTube comments as positive, negative, or neutral. It features a Tkinter-based GUI for user interaction and includes preprocessed datasets, model comparisons, and sentiment predictions.",
      title: "Visit Youtube Sentiment Analysis? ☄️",
      link: "https://github.com/mehmeettoprakk/youtube_sentiment_analysis",
      img: "/project/youtube.jpg",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "TFT News",
      description:
        "TFT News is a modern web application built with Next.js, TypeScript, and Tailwind CSS, offering a dynamic platform for displaying and managing news content. It follows a modular architecture with reusable components, efficient state management, and optimized performance, integrating API fetching for real-time updates and smooth navigation.",
      title: "Visit TFT News? ☄️",
      link: "https://github.com/mehmeettoprakk/news-site",
      img: "/project/blog.png",
      stacks: [
        {
          name: "React",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind CSS",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
        {
          name: "Javascript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-white w-7 h-7" />,
        },
      ],
    },
  ];

  const github = {
    title: "View all my Projects on GitHub🚀",
    link: "https://github.com/mehmeettoprakk",
  };

  const onHandleClick = (title: string, link: string) => {
    Swal.fire({
      title: title,
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: `<a href=${link} target="blank">Open it in a new tab!🔥</a>`,
      icon: "info",
    });
  };

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <h1 className="text-base font-medium text-primary md:text-xl text-center">
        Projects{" "}
        <span className="block font-bold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Showcase
        </span>
      </h1>

      <hr className="w-36 my-3 p-1 bg-gradient-to-r from-purple-500 to-red-500 border-none rounded-sm" />

      <p className="text-primary text-base my-6 lg:text-xl text-center">
        Here are some of my projects, to see all of them click
        <span
          onClick={() => onHandleClick(github.title, github.link)}
          className="cursor-pointer text-slate-200 hover:text-white underline">
          {" "}
          here
        </span>
        .
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-4/5">
        {projects.map((project) => (
          <div
            key={project.img}
            className="border border-borderColor bg-tertiary rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300 hover:border-transparent hover:bg-orange-500 group">
            <div
              className="relative bg-black flex justify-center items-center border rounded-t-lg border-borderColor cursor-pointer group"
              onClick={() => onHandleClick(project.title, project.link)}>
              <Image
                src={project.img}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-72 object-cover rounded-t-lg group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                  Click to Visit 🔗
                </span>
              </div>
            </div>
            <div className="flex flex-col px-5 py-4">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {project.name}
                </p>
                <div className="flex gap-x-2">
                  {project.stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="w-10 h-10 bg-black border border-borderColor rounded-md flex items-center justify-center hover:border-pink-500 transition-all duration-300"
                      title={stack.name}>
                      {stack.logo}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-justify text-base">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
