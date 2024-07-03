import HText from "@/shared/HText";
import { ProjectType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Project from "./Projects";
import { debuggies, packets, bunnies, fracture, salary } from "@/assets/images"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const projects: Array<ProjectType> = [
  {
    projectHeader: "Debugger",
    projectSubHeader:
      "Java Fundemental Debug Learning Application",
    projectDescription: `
      Impletmented using Java Slick2D library to create a user-friendly GUI to facilitate seamless interaction with a well-structured, appropriately sized environment. This includes employing 
parsing and command-line configuration for user interaction. Additionally, incorporated core debugging 
principles within the application to create engaging and interactive educational tools.
    `,
    projectImage: debuggies,
    projectLink: "https://github.com/wendytu2022/Debuggies",
  },
  {
    projectHeader: "Hot Packets",
    projectSubHeader:
      "Java Network Packet Simulation Tool",
    projectDescription: `
       Leveraged the Slick2D library to craft a front-end 
visualization interface, depicting data packet flow among interconnected systems, and fostering user 
interaction and comprehensive information display under tight deadlines. Crafted Command-Line interfaces 
inspired by Linux conventions adept at parsing abstracted, lemmatized NAT commands within the tool 
interface, ensuring efficient execution of user commands.
    `,
    projectImage: packets,
    projectLink: "https://github.com/shuyelin06/Hot-Packets",
  },
  {
    projectHeader: "Attacker Honeypot",
    projectSubHeader:
      "Linux Threat Actor Information Collection System",
    projectDescription: `
    Deployed self-recycling honeypots mimicking University 
systems, actively attracting and capturing 22,000 breaches. Employed NAT rules to enforce 
bans after access and deploy strategically varied filtering command sets to detect common 
commands used by potential attackers, including scripts and botnet attacks. Utilized Bash and Python 
collection scripts to efficiently parse and transform data into CSV formatted text files, enabling smooth 
statistical testing and analysis.
    `,
    projectImage: bunnies,
    projectLink: "https://github.com/annadai916/Honey-Bunny-Pot",
  },
  {
    projectHeader: "Bone Fracture Identifier",
    projectSubHeader:
      "TensorFlow Fracture Classification Model",
    projectDescription: `
    Using TensorFlow from Python library to combined sequential neural network models to have precise identification capabilities 
    of evident and non-evident bone fracture x-rays. Used Seaborn and Matplotlib to visualize resulting statistics of accuracy of validations
    and loss of validations per each Epoch. 
    `,
    projectImage: fracture,
    projectLink: "https://github.com/mhong124/FractureClassification",
  },
  {
    projectHeader: "Linkedln Jobs Salary Predictor",
    projectSubHeader:
      "Linkedln Salary Random Forest Regressor Tree Prediction Model",
    projectDescription: `
    Developed a educational tutorial of the complete data life cycle on Linkedln job dataset, providing methods of data curation, hypothesis testing, machine learning models, and data analysis. 
    Trained a Random Forest Regressor Model from sklearn using features curated with imputational methods as well as general data cleaning process and using a series of data visualization methods
     from seaborn and matplotlib.
    `,
    projectImage: salary,
    projectLink: "https://github.com/BrianXie-03/brianxie-03.github.io/blob/main/CMSC320_Final_Project.ipynb",
  },
  {
    projectHeader: "Fit",
    projectSubHeader:
      "Weight Training AI",
    projectDescription: `
    TBD
    `,
    projectImage: "dsa",
    projectLink: "dsa",
  },
  
];

const Projects = ({ setSelectedPage }: Props) => {

  return (
    <section 
      id="projects" 
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            transition={{ duration: 1 }}
            variants={{ hidden: {opacity: 0, scale: 0.9},
                        visible: {opacity: 1, scale: 1}}}
          >
            <HText>Projects</HText>
            <p className="my-5 text-base md:text-lg">
              Here are some my projects!
            </p>
          </motion.div>
          {/* PROJECTS */}
          <div className="sm:mx-auto sm:grid-cols-1 sm:gap-4 md:mx-auto md:grid md:grid-cols-3 md:gap-8 md:flex-grow">
            {projects.map((project: ProjectType) => (
                <div className="rounded-lg bg-lighter border-2 border-steel border-opacity-40">
                  <Project
                    key={project.projectHeader}
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