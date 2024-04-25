"use client";

import Image from "next/image";
import React from "react";
import avatar from "../../../public/avatar.png";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-12"
      >
        <div className="col-span-7 place-self-center text-center sm:text-center md:text-left  md:max-w-max">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
              Olá, eu sou{" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Edson",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " Desenvolvedor",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-base lg:text-xl mb-6">
            Desenvolvedor Front-end. Desenvolvo interfaces modernas e de alta
            qualidade, concentrado em performance, animações, responsividade e
            SEO.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4  bg-gradient-to-br from-emerald-500 via-cyan-700 to-blue-900 hover:bg-slate-200 text-white">
              Contato
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-emerald-500 via-cyan-700 to-blue-900 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Baixar CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full mt-4 md:mt-0 bg-[#181818] w-[250px] h-[250px] md:w-[250px] md:h-[250px]  lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={avatar}
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
