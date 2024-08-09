import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    title: "Portifolio em Next.js",
    description:
      "Projeto criado para apresentar minha qualidades e habilidades, além de praticar mais funcionalidades front-end como: Next, Tailwind, envio de emails e etc",
    image: "/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/PortifolioOFC",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Agencia de Marketing",
    description:
      "Landing Page criada para aprimorar funcionalidades de front-end, gerenciamento de envio de e-mails e SASS",
    image: "/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/landingpageNext",
    previewUrl: "https://landingpagenext.netlify.app",
  },
  {
    id: 3,
    title: "Site Para um Jogo",
    description: "Site desenvolvido no programa Trilhas-Inova. Projeto realizado por uma equipe que liderei e coloquei em prática várias skills necessárias no mercado de trabalho",
    image: "/project3.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/EdsonKL/frontend-secti",
    previewUrl: "https://frontend-secti.vercel.app/",
  },
  {
    id: 4,
    title: "Cultura Maranhense",
    description:
      "Site desenvolvido no programa Trilhas-Inova. Utilizei React para desenvolver um site de cultura do Maranhão, com foco em design responsivo e componentes reutilizáveis",
    image: "/projeto4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/Calculadora-Javascript/tree/main/src",
    previewUrl: "https://main--bucolic-bienenstitch-42aff8.netlify.app",
  },
  {
    id: 5,
    title: "Todo List com React.js",
    description:
      "Uma lista de afazeres desenvolvido com React, para treinar conceitos dessa biblioteca tão usada no mercado atualmente",
    image: "/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/to-do-list-react",
    previewUrl: "https://edsonkl.github.io/to-do-list-react/",
  },
  {
    id: 6,
    title: "Buscador de CEP",
    description:
      "Projeto criado para poder buscar informações do CEP inserido, usando a API do ViaCEP para acessar os dados",
    image: "/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/BuscadorDeCEP-Javascript",
    previewUrl: "https://main--thriving-melba-08af46.netlify.app",
  }
];

function ProjectsSection() {
  return (
    
    <section id="projects" className=" pt-10">
      <h2 className="text-center pt-12 text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-6 lg:grid-cols-3 ">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            description={project.description}
            previewUrl={project.previewUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
}
export default ProjectsSection;
