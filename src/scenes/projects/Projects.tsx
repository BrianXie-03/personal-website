import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si"

type Props = {
  projectHeader: string;
  projectSubHeader: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
};

const Projects = ({
  projectHeader,
  projectSubHeader,
  projectDescription,
  projectImage,
  projectLink,
}: Props) => {

  return (
    <motion.div
      className="md:my-0 p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.75 }}
      transition={{ duration: 1 }}
      variants={{ hidden: {opacity: 0, scale: 0.9},
                  visible: {opacity: 1, scale: 1}}}
    >
      {/* Project Title */}
      <div className="flex justify-between align-top">
        <a href={projectLink}>
            <p className="text-2xl underline font-bold text-steel">{projectHeader}</p>
        </a>
      </div>
      {/* Subheader */}
      <p className="text-lg font-bold pb-4 text-outer">
        {projectSubHeader}
      </p>
      {/* Description */}
      <div className="items-center text-md pb-6">
          {projectDescription}
      </div>
      {/* Image */}
      <img
          src={projectImage}
          alt="project_image"
          className="rounded-xl"
        ></img>
    </motion.div>
  );
};

export default Projects;