import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    title: "Portifolio em Next.js",
    description: "Project 1 description",
    image: "/project1.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Agencia de Marketing",
    description: "Project 2 description",
    image: "/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/landingpageNext",
    previewUrl: "https://landingpagenext.netlify.app",
  },
  {
    id: 3,
    title: "Todo List com React.js",
    description: "Project 3 description",
    image: "/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/to-do-list-react",
    previewUrl: "https://edsonkl.github.io/to-do-list-react/",
  },
  {
    id: 4,
    title: "Landing Page Academia",
    description: "Project 4 description",
    image: "/project4.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/EdsonKL/Landing-Page-Academia/tree/main/Landing",
    previewUrl: "https://main--merry-torrone-2458ad.netlify.app",
  },
  {
    id: 5,
    title: "Buscador de CEP",
    description: "Project 5 description",
    image: "/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/BuscadorDeCEP-Javascript",
    previewUrl: "https://main--thriving-melba-08af46.netlify.app",
  },
  {
    id: 6,
    title: "Calculadora.js",
    description: "Project 6 description",
    image: "/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdsonKL/Calculadora-Javascript/tree/main/src",
    previewUrl: "https://main--bucolic-bienenstitch-42aff8.netlify.app",
  },
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
