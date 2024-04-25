import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl}) {
  return (
    <div>
      <div
        className="h-52 md:h-62 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay justify-center gap-6 items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-1000">
          <Link
            href={gitUrl}
            target="_blank"
            className=" flex justify-center items-center h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link "
          >
            <CodeBracketIcon className="h-10 w-10 text-[ADB7BE] m-2 cursor-pointer  group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className=" flex justify-center items-center h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[ADB7BE] m-2 cursor-pointer  group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4">
        <h5 className="tex0t-xl font-semibold md-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
