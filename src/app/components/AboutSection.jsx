"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import AboutImage from "../../../public/about.jpg";
import TabButton from "./TabButton";
import { motion } from "framer-motion";


const TAB_DATA = [
  {
    title: "Front-end",
    id: "front",
    content: (
      <ul className="list-disc pl-2 md:text-sm lg:text-base">
        <li>Next.js</li>
        <li>React.js</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Jest</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Back-end",
    id: "back",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("front");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.div initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>

      <section id="about" className="text-white pt-10">
        <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap16 sm:py-16 xl:16">
          <Image src={AboutImage} width={530} height={530} />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl  font-bold text-white mb-4">Sobre mim</h2>
            <p className="text-base md:text-sm lg:text-lg ">
              Olá, eu sou um desenvolvedor Front-end com paixão por criar
              aplicações interativas e responsivas. Adoro estar aprendendo e
              sempre estou procurando formas de expandir meu conhecimento e
              habilidades. Sempre animado para trabalhar com outros
              desenvolvedores para criar aplicações incriveis.
            </p>
            <div className="flex flex-row   justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("front")}
                active={tab == "front"}
              >
                {" "}
                Front-end{""}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("back")}
                active={tab == "back"}
              >
                {" "}
                Back-end{" "}
              </TabButton>
            </div>
            <div className="mt-8 md:mt-4">
              {TAB_DATA.find((t) => t.id == tab).content}
            </div>
          </div>
        </div>
      </section>
    </motion.div>

  );
}

export default AboutSection;
