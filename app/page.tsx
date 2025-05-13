"use client";

import { Welcome } from "@/components/home/Welcome";
import { Status } from "@/components/home/Status";

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
    </main>
  );
}
