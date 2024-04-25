"use client";
import React, { useState } from "react";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/send", {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    });
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
    console.log(response.data);
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 pt-32 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Vamos Conversar</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Eu estou sempre procurando novas oportunidades, meu Email está sempre
          disponivel. Se você tiver alguma dúvida ou apenas quiser dizer oi, eu
          irei lhe responder o quanto antes!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://www.github.com/edsonkl"} target="_blank">
            <Image src={GitHubIcon} alt="Github Icon" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/edson-mendes-85555a264"}
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="text-white block mb-1 text-sm font-medium"
              htmlFor="email"
            >
              Seu Nome
            </label>
            <input
              name="name"
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="name"
              placeholder="Luke Skywalker"
              required
            />
          </div>
          <div>
            <label
              className="text-white block mb-1 text-sm font-medium"
              htmlFor="email"
            >
              Seu Email
            </label>
            <input
              name="email"
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              placeholder="JhonDoe@email.com"
              required
            />
          </div>
          <div>
            <label
              className="text-white block mb-1  text-sm font-medium"
              htmlFor="subject"
            >
              Assunto
            </label>
            <input
              name="subject"
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              placeholder="Diga o assunto..."
              required
            />
          </div>
          <div className="mb-6 ">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Vamos falar sobre..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar Mensagem
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email Enviado com Sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
