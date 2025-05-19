"use client";

import { Welcome } from "@/components/home/Welcome";
import { Status } from "@/components/home/Status";
import { Info } from "@/components/about/Info";
import Image from "next/image";
import { Skills } from "@/components/about/Skills";
import { Journey } from "@/components/experience/Journey";
import { Certificate } from "@/components/experience/Certificate";
import { ProjectLists } from "@/components/projects/ProjectLists";

export default function Home() {
  return (
    <main className="container">
      <section id="home" className="pt-28 pb-24 lg:pt-44 lg:pb-32">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full self-center md:px-4 lg:w-1/2">
            <Welcome />
            <Status />
          </div>
        </div>
      </section>
      <section id="about" className="pb-16 pt-32 lg:pb-28">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full self-center md:px-4 lg:w-1/2 text-justify">
            <Info />
          </div>
          <div className="w-full px-4 pt-4 self-center lg:w-1/2 shadow-lg border-2 border-borderColor rounded-md bg-tertiary">
            <Image
              src="/photo/mehmet.png"
              alt="Mehmet"
              width={400}
              height={400}
              className="w-auto sm:h-[400px] mx-auto"
            />
          </div>
        </div>
        <Skills />
      </section>
      <section id="experience" className="pb-16 pt-32 lg:pb-28">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full self-center md:px-4 lg:w-2/3 text-justify">
            <Journey />
          </div>
        </div>
        <Certificate />
      </section>
      <section id="projects" className="pb-16 pt-32 lg:pb-28">
        <ProjectLists />
      </section>
    </main>
  );
}
