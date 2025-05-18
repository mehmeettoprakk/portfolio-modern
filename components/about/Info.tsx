"use client";

import Swal from "sweetalert2";

import CustomButton from "../shared/CustomButton";

interface IContact {
  href: string;
  name: string;
  label: string;
}

export const Info = () => {
  const contacts = [
    {
      href: "https://github.com/mehmeettoprakk",
      name: "GitHub",
      label: "Go to my Github Profile 🚀",
    },
    {
      href: "https://www.linkedin.com/in/mehmeettoprakk/",
      name: "LinkedIn",
      label: "Go to my LinkedIn Profile ⚡",
    },
  ];

  const instagram = {
    href: "https://www.instagram.com/mehmeettoprakk/",
    name: "Instagram",
    label: "Go to my Instagram Profile 🪐",
  };

  const onHandleClick = (contact: IContact) => {
    Swal.fire({
      title: contact.label,
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: ` <a href=${contact.href} target="blank">  Open it in new tab!🔥 /a>`,
      icon: "info",
    });
  };

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        About Me{" "}
        <span className="block font-extrabold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Who am I?
        </span>
      </h1>

      <hr className="w-28 my-3 p-1 bg-gradient-to-r from-purple-500  to-red-500 border-none rounded-sm" />

      <div className=" lg:max-w-lg font-light text-primary text-lg leading-relaxed">
        <p className="my-3 text-gray-300 hover:text-white transition-colors duration-300">
          Hello! My name is Mehmet, a Web Developer based in Türkiye.
        </p>

        <p className="my-3 text-gray-300 hover:text-white transition-colors duration-300">
          I am a{" "}
          <span className=" text-pink-400  font-bold">
            {" "}
            Computer Engineering
          </span>{" "}
          student, close to gradution, with a strong focus on{" "}
          <span className="text-blue-400 font-bold">React </span> and{" "}
          <span className="text-green-400 font-bold">Next.js</span>. I&apos;m
          passionate about creating{" "}
          <span className="text-yellow-400">dynamic</span>,{" "}
          <span className="text-purple-400">responsive</span>, and{" "}
          <span className="text-red-400">user-friendly</span> web applications.
        </p>

        <p className="my-3 text-gray-300 hover:text-white transition-colors duration-300">
          <span>
            I&apos;m currently{" "}
            <span className="text-teal-400 font-bold">
              open to job opportunities
            </span>
            . Let&apos;s connect and build something amazing together! 🚀
          </span>
        </p>
      </div>

      <hr className="w-36 my-3 p-1 bg-gradient-to-r from-purple-500 to-red-500 border-none rounded-sm" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 lg:max-w-lg my-4 lg:my-0">
        {contacts.map((contact) => (
          <div key={contact.href}>
            <CustomButton
              btnType="submit"
              title={contact.name}
              containerStyles="!my-1 w-full border-none bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 shadow-md hover:shadow-lg transition-transform hover:scale-105"
              textStyles="text-white font-semibold"
              onClick={() => onHandleClick(contact)}
            />
          </div>
        ))}
        <div className="col-span-2 md:col-span-1">
          <CustomButton
            btnType="submit"
            title={instagram.name}
            to={instagram.href}
            containerStyles="!my-1 w-full border-none bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            textStyles="text-white font-semibold"
            onClick={() => onHandleClick(instagram)}
          />
        </div>
      </div>
    </>
  );
};
