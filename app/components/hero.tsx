"use client"
import React from "react";
import Image from "next/image";
import { useEffect,useState } from "react";

const images = [
  '/images/me.jpg',
  '/images/sunsetkuta.jpg',
  '/images/redbridge.jpg',
  '/images/temple.jpg',
  '/images/mountain.jpg',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section>
      <div className="grid items-center h-screen bg-cover bg-center bg-pearl dark:bg-gray z-10 grid-cols-1 md:grid-cols-5 dark:text-white/70 text-black/70">
        <div className="flex md:col-span-2 justify-center mx-10 pt-20 md:pt-0">
        <div className="relative w-full h-96 md:h-52 overflow-hidden rounded">
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out transform ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <Image src={imageUrl} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 mx-10 sm:pb-0 pb-9">
          <p className="pb-4 sm:text-4xl text-s">Hi there! I am</p>
          <h1 className="mb-4 sm:text-6xl text-4xl font-semibold">Michael Girikallo</h1>
          <p className="sm:text-xl text-xs">
           currently a 3<sup>rd</sup> year student studying Software Engineering at the
            University of New South Wales.
          </p>
        </div>
      </div>
    </section>
  );
}
