import { motion } from "framer-motion";

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
  const previewDescription = projectDescription.split(/(?<=[.!?])\s+/).slice(0, 3).join(" ");

  return (
    <motion.div
      className="p-5 sm:p-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.75 }}
      transition={{ duration: 1 }}
      variants={{ hidden: {opacity: 0, scale: 0.9},
                  visible: {opacity: 1, scale: 1}}}
    >
      <div className="grid min-h-[34rem] grid-rows-[auto_12rem] items-start gap-5 md:min-h-[16rem] md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)] md:grid-rows-1 md:gap-8">
        <div>
          <a href={projectLink} target="_blank" rel="noreferrer">
            <p className="line-clamp-2 min-h-[3.5rem] text-xl font-semibold leading-snug text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white sm:text-2xl">{projectHeader}</p>
          </a>
          <p className="line-clamp-2 min-h-[3rem] pb-2 pt-2 text-sm font-medium text-slate-400 sm:text-base">
            {projectSubHeader}
          </p>
          <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            {previewDescription}
          </p>
        </div>
        <div className="flex h-48 justify-center md:h-52 md:justify-end">
          <img
            src={projectImage}
            alt={`${projectHeader} project screenshot`}
            className="h-full w-full rounded-xl border border-white/10 object-cover object-top md:max-w-[18rem]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
