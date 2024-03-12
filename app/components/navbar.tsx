"use client";
import { useState } from "react";
import React from "react";

export default function Navbar() {
  const handleDarkModeToggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  function displayNav() {
    setMiniNavVisible(!miniNavVisible);
  }

  const [miniNavVisible, setMiniNavVisible] = useState(false);

  return (
    <nav className="h-16 fixed top-0 bg-white w-screen flex justify-between px-10 items-center dark:bg-lightgray/80 dark:text-white z-30">
      <h1 className="text-3xl font-sans font-extrabold text-black/70 dark:text-white">
        <p className="pb-2">
          <a href="#">mg</a>
        </p>
      </h1>
      <ul className="hidden md:flex justify-between gap-20 font-san">
        <a className="hover:text-tan dark:hover:text-tan" href="#">
          Projects
        </a>
        <a className="hover:text-tan dark:hover:text-tan" href="#">
          Contact
        </a>
        <a className="hover:text-tan dark:hover:text-tan" href="#">
          Resume
        </a>
        <button id="toggleDark" onClick={handleDarkModeToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="hover:text-tan dark:hover:text-tan w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
      </ul>

      <button id="hamburger" onClick={displayNav} className="w-6 h-6 md:hidden">
        {miniNavVisible ? (
          <svg
            id="cross"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      <div
        id="miniNav"
        className={`fixed z-40 top-16 md:hidden justify-center bg-white w-screen grid grid-rows-3 right-0 dark:bg-lightgray  ${
          miniNavVisible ? "block" : "hidden"
        }`}
      >
        <div className="row-span-1 h-16 flex items-center justify-center hover:text-tan dark:hover:text-tan">
          <a href="">About</a>
        </div>

        <div className="row-span-1 h-16 flex items-center hover:text-tan dark:hover:text-tan">
          <a href="">Resume</a>
        </div>

        <div className="row-span-1 h-16 flex items-center hover:text-tan dark:hover:text-tan">
          <a href="">Contact</a>
        </div>
        <button
          id="toggleDark"
          onClick={handleDarkModeToggle}
          className="flex justify-center items-center h-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="hover:text-tan dark:hover:text-tan w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
