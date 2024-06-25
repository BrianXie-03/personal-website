import { SkillType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import sql from "@/assets/sql.jpg"
import {
  SiLinux,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiC,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiOcaml,
  SiRust,
  SiTensorflow,
  SiPandas,
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { motion } from "framer-motion";
import Skills from "./Skills";


const iconType = "h-6 w-6 text-black";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const skills: Array<SkillType> = [
    {
      icon: <BiLogoJava className={iconType} />,
      title: "Java",
    },
    {
      icon: <SiC className={iconType} />,
      title: "C",
    },
    {
      icon: <SiPython className={iconType} />,
      title: "Python",
    },
    {
        icon: <SiRust className={iconType} />,
        title: "Rust",
    },
    {
      icon: <SiOcaml className={iconType} />,
      title: "OCaml",
    },
    {
      icon: <SiJavascript className={iconType} />,
      title: "Javascript",
    },
    {
      icon: <SiTypescript className={iconType} />,
      title: "Typescript",
    },
    {
      icon: <SiHtml5 className={iconType} />,
      title: "HTML",
    },
    {
      icon: <SiCss3 className={iconType} />,
      title: "CSS",
    },
    {
      icon: <SiTensorflow className={iconType} />,
      title: "TensorFlow",
    },
    {
      icon: <SiPandas className={iconType} />,
      title: "Pandas",
    },
    {
      icon: <SiReact className={iconType} />,
      title: "React",
    },
    {
      icon: <SiTailwindcss className={iconType} />,
      title: "Tailwind CSS",
    },
    {
      icon: <SiLinux className={iconType} />,
      title: "Linux OS",
    },
    {
        icon: <div className="h-6 w-6 text-primary-500">
                <img alt="aces" src={sql}/>
              </div>,
        title: "SQL",
      },
  ];

const Skill = ({ setSelectedPage }: Props) => {

  return (
    <section 
        id="skills" 
        className="bg-ice bg-opacity-40"
    >
      <div className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.2},
                }
            }}
          >
            <HText>Skills</HText>
            <p className={`my-5 md:text-lg`}>
              Some technologies I'm familiar with.
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            className="items-center justify-between gap-3 sm:grid sm:grid-cols-3 md:grid md:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill: SkillType) => (
                <div key={skill.title} className="w-full">
                    <Skills
                        icon={skill.icon}
                        title={skill.title}
                    />
                </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;