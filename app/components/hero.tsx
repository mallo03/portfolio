import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="grid items-center h-screen bg-cover bg-center bg-pearl dark:bg-gray z-10  grid-cols-1 md:grid-cols-5 dark:text-white/70 text-black/70">
        <div className="flex md:col-span-2 justify-center mx-10  pt-20 md:pt-0">
          <Image
            src="/images/mountainbatur.jpg"
            alt="Mountain Batur"
            width={400}
            height={700}
            layout="fixed" 
            className="border-2 border-black/70 dark:border-white/70"
          />
        </div>
        <div className="md:col-span-3 mx-10">
          <p className="pb-4 md:text-4xl text-xs">Hi there! I am</p>
          <h1 className=" mb-4 md:text-6xl font-semibold">Michael Girikallo</h1>
          <p className="md:text-xl text-xs">
           Currently a 3<sup>rd</sup> year student studying Software Engineering at the
            University of New South Wales
          </p>
        </div>
      </div>
    </section>
  );
}
