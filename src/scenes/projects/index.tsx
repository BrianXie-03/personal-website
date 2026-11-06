import HText from "@/shared/HText";
import { ProjectType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Project from "./Projects";
import { debuggies, packets, bunnies, fracture, salary } from "@/assets/images"
import brf from "@/assets/BRF.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const projects: Array<ProjectType> = [
  {
    projectHeader: "Satellite Data Analysis Tool",
    projectSubHeader: "Interactive comparison and visualization for satellite data",
    projectDescription: `Built an application interface that lets users load two netCDF4-format satellite data files, select variables with dropdowns, and compare the results side by side or as difference visualizations. The tool also supports optional quality-control bit analysis and statistical visualizations to help users inspect and interpret satellite measurements.`,
    projectImage: brf,
    projectLink: "https://github.com/BrianXie-03/Satellite-Data-Analysis",
  },
  {
    projectHeader: "Java Fundamentals Debug Learning Application",
    projectSubHeader: "Interactive educational game built with Java and Slick2D",
    projectDescription: `Developed a single-player educational game that combined Java, physics simulation, and interactive UI elements to teach debugging fundamentals. The project implemented diverse bug generation and movement algorithms, encouraging strategic problem-solving and hands-on understanding of programming concepts in a practical, game-based environment.`,
    projectImage: debuggies,
    projectLink: "https://github.com/wendytu2022/Debuggies",
  },
  {
    projectHeader: "Hot Packets",
    projectSubHeader: "Java network packet simulation tool",
    projectDescription: `Leveraged the Slick2D library to craft a front-end visualization interface that depicted data packet flow among interconnected systems while supporting user interaction and information display under tight deadlines. I also developed command-line interfaces inspired by Linux conventions to parse abstracted NAT commands, making the tool efficient and intuitive to use.`,
    projectImage: packets,
    projectLink: "https://github.com/shuyelin06/Hot-Packets",
  },
  {
    projectHeader: "Linux Threat Actor Information Collection System",
    projectSubHeader: "Self-recycling honeypot deployed to monitor attack behavior",
    projectDescription: `Deployed self-recycling honeypots that mimicked university systems and captured over 22,000 breach attempts across four weeks. Using custom Bash and Python scripts, I automated data collection and parsing to analyze attack patterns, identify botnet activity, and enforce permanent bans with NAT rules based on detected malicious behavior.`,
    projectImage: bunnies,
    projectLink: "https://github.com/annadai916/Honey-Bunny-Pot",
  },
  {
    projectHeader: "Bone Fracture Identifier",
    projectSubHeader: "TensorFlow fracture classification model",
    projectDescription: `Built a TensorFlow-based model to classify bone fracture x-rays using sequential neural networks, supporting both evident and non-evident fracture detection. I used Seaborn and Matplotlib to visualize validation accuracy and loss trends across epochs, helping interpret model performance and training behavior.`,
    projectImage: fracture,
    projectLink: "https://github.com/mhong124/FractureClassification",
  },
  {
    projectHeader: "LinkedIn Jobs Salary Predictor",
    projectSubHeader: "Salary prediction model using a LinkedIn job dataset",
    projectDescription: `Developed an educational walkthrough of the complete data lifecycle on a LinkedIn job dataset, covering curation, hypothesis testing, machine learning, and analysis. I trained a Random Forest Regressor model using cleaned features and visualized results with Seaborn and Matplotlib to understand the relationships between job attributes and salaries.`,
    projectImage: salary,
    projectLink: "https://github.com/BrianXie-03/brianxie-03.github.io/blob/main/CMSC320_Final_Project.ipynb",
  },
];

const Projects = ({ setSelectedPage }: Props) => {

  return (
    <section 
      id="projects" 
      className="overflow-hidden bg-[#1b262c]"
    >
      <div className="mx-auto min-h-full w-[min(100%,72rem)] px-4 py-16 md:px-0">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          <motion.div
            className="md:my-5 md:max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            transition={{ duration: 1 }}
            variants={{ hidden: {opacity: 0, scale: 0.9},
                        visible: {opacity: 1, scale: 1}}}
          >
            <HText>Projects</HText>
            <p className="my-5 text-base text-slate-300 md:text-lg">
              Selected work that I got the opportunity to work on and develop.
            </p>
          </motion.div>
          <div className="space-y-5">
            {projects.map((project: ProjectType) => (
                <div className="rounded-2xl border border-white/[0.12] bg-[#0f4c75]/35" key={project.projectHeader}>
                  <Project
                    projectHeader={project.projectHeader}
                    projectSubHeader={project.projectSubHeader}
                    projectDescription={project.projectDescription}
                    projectImage={project.projectImage}
                    projectLink={project.projectLink}
                  />
                </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
