"use client";

import Swal from "sweetalert2";
import CustomButton from "../shared/CustomButton";
import Image from "next/image";

interface ICertif {
  name?: string;
  from?: string;
  issued?: string;
  credential?: string;
  img?: string;
  title: string;
  link: string;
}

export const Certificate = () => {
  const expertCerficiates = [
    {
      name: "Hi-Kod 2.0 Front-End Atölyesi",
      from: "Kodluyoruz",
      issued: "Issued November 2023",
      credential: "Credential ID 95882642720912",
      title: "Go to Credential Page💳",
      link: "https://verified.sertifier.com/tr/verify/95882642720912/",
      img: "/certif/kodluyoruz.png",
    },
    {
      name: "LinkedIn'de Etkili Profil Oluşturma",
      from: "Bilgi Teknolojileri ve İletişim Kurumu",
      issued: "Issued February 2025",
      credential: "Credential ID D2xh1O7j77",
      title: "Go to Credential Page💳",
      link: "https://drive.google.com/file/d/1uRAEB7R_LUN6QddYe1w_bdczfBGcDjP1/view?usp=sharing",
      img: "/certif/linkedin.jpg",
    },
  ];

  const otherCertificates = {
    title: "View all my Certificates🏆 ",
    link: "https://www.linkedin.com/in/mehmeettoprakk/details/certifications/",
  };

  const onHandleClick = (certif: ICertif) => {
    Swal.fire({
      title: certif.title,
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: `<a href=${certif.link} target="blank">Open it in new tab!🔥</a>`,
      icon: "info",
    });
  };

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <h1 className="font-bold text-transparent text-3xl mt-3 lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        My Certificate
      </h1>

      <p className="text-primary text-base my-3 lg:text-xl text-center">
        Here are 2 of my Expert Certifications, to see all of my certificates
        click{" "}
        <span
          onClick={() => onHandleClick(otherCertificates)}
          className="cursor-pointer text-slate-200 hover:text-white">
          here
        </span>
      </p>

      <div className="grid md:grid-cols-2 my-3 w-full lg:w-5/6 gap-6">
        {expertCerficiates.map((expert) => (
          <div
            key={expert.img}
            className="md:mx-4 mb-6 md:mb-0 border border-borderColor bg-tertiary rounded-md hover:shadow-lg hover:border-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 group">
            <div className="bg-black flex justify-center items-center border rounded-sm border-whites shadow-lg ">
              <Image
                src={expert.img}
                alt={expert.name || "Certificate"}
                width={400}
                height={300}
                className="w-full h-auto mx-auto rounded-sm"
              />
            </div>

            <div className="flex flex-col px-5">
              <p className="my-3 font-bold text-justify text-base lg:text-xl text-white group-hover:text-white">
                {expert.name}
              </p>
              <p className="mb-2 text-primary group-hover:text-white">
                {expert.from}
              </p>
              <p className="mb-2 text-primary group-hover:text-white">
                {expert.issued}
              </p>
              <p className="mb-2 text-primary group-hover:text-white">
                {expert.credential}
              </p>

              <CustomButton
                btnType="submit"
                title="Show Credential"
                containerStyles="w-full border-borderColor bg-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:shadow-lg trasition-all duration-300"
                textStyles="text-white"
                onClick={() => onHandleClick(expert)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
