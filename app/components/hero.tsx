import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-row justify-evenly h-screen bg-cover bg-center bg-pearl dark:bg-black z-10">
        <div className="w-200 h-200 pt-16">
          <Image
            src="/images/pose1.jpg"
            alt="Mountain Batur"
            width={200}
            height={200}
            layout="fixed"
          />
        </div>
        <div className="ml-8 mt-48">
          <h1 className="text-white mb-4 text-6xl font-semibold">Hi there!</h1>
          <p className="text-white">
            Currently a third year student studying Software Engineering at the
            University of New South Wales.
          </p>
        </div>
      </div>
    </section>
  );
}
