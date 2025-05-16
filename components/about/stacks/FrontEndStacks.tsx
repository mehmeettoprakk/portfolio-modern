"use client";

import { toast } from "react-hot-toast";
import { SiNextdotjs, SiReact, SiBootstrap } from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoHtml5,
} from "react-icons/bi";

export const FrontEndStacks = () => {
  const stacks = [
    {
      title: "HTML5",
      icon: <BiLogoHtml5 />,
    },
    {
      title: "CSS3",
      icon: <BiLogoCss3 />,
    },
    {
      title: "JavaScript",
      icon: <BiLogoJavascript />,
    },
    {
      title: "TypeScript",
      icon: <BiLogoTypescript />,
    },
    {
      title: "React",
      icon: <SiReact />,
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      title: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      title: "Tailwind CSS",
      icon: <BiLogoTailwindCss />,
    },
  ];

  const onHandleClick = (title: string) => {
    toast.success(`Skilled in ${title}`, {
      icon: "🔥",
      style: {
        border: " 1px solid #3e3e3e",
        background: "#111",
        color: "#fff",
      },
    });
  };

  return (
    <>
      {stacks.map((stack) => (
        <div
          key={stack.title}
          className="p-3 md:p-4 border border-bordercolor bg-tertiary rounded-sm cursor-pointer transition-all duration-300 hover:border-transparent hover:shadow-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 group"
          onClick={() => onHandleClick(stack.title)}>
          <p
            key={stack.title}
            className="flex justify-center items-center text-gray-400 text-5xl group-hover:text-white transition-colors duration-300"
            title={stack.title}>
            {stack.icon}
          </p>
        </div>
      ))}
    </>
  );
};
