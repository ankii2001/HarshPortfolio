import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects?.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-8 md:p-52 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className="w-9/12 h-auto md:w-5/12 md:h-auto"
              alt=""
            />

            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className="text-center text-3xl md:text-4xl">
                <span className="font-semibold underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length} :
                </span>{" "}
                <br className="flex md:hidden" />
                <span className="font-bold">{project?.title}</span>
                <div className="flex items-center space-x-2 justify-center mt-3">
                  {project?.technologies.map((technology) => (
                    <img
                      className="h-10 w-10"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt=""
                    />
                  ))}
                </div>
              </h4>
              <p className="text-lg text-center md:text-justify">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[36%] bg-[#F7AB0A]/10 left-0 h-[400px] md:h-[280px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
