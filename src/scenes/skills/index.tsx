import { SkillType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { sql } from "@/assets/images"
import {
  SiLinux,
  SiReact,
  SiJavascript,
  SiC,
  SiPython,
  SiGit,
  SiAmazonaws,
  SiAzuredevops,
  SiFirebase,
  SiNuxtdotjs,
  SiVuedotjs,
  SiR,
  SiRust,
  SiScala,
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { motion } from "framer-motion";
import { GrDatabase } from "react-icons/gr";
import { VscTerminalLinux } from "react-icons/vsc";
import { HiOutlineSparkles } from "react-icons/hi";
import Skills from "./Skills";

const iconType = "h-6 w-6 text-slate-200";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const skillGroups: { title: string; skills: Array<SkillType> }[] = [
  {
    title: "Languages & Data",
    skills: [
      { icon: <SiPython className={iconType} />, title: "Python" },
      { icon: <BiLogoJava className={iconType} />, title: "Java" },
      { icon: <SiJavascript className={iconType} />, title: "JavaScript" },
      { icon: <SiC className={iconType} />, title: "C" },
      { icon: <VscTerminalLinux className={iconType} />, title: "Bash" },
      { icon: <div className="h-6 w-6"><img alt="" src={sql} /></div>, title: "SQL" },
      { icon: <SiR className={iconType} />, title: "R" },
      { icon: <SiRust className={iconType} />, title: "Racket" },
      { icon: <SiScala className={iconType} />, title: "Scala" },
    ],
  },
  {
    title: "Frameworks & APIs",
    skills: [
      { icon: <SiReact className={iconType} />, title: "React" },
      { icon: <SiVuedotjs className={iconType} />, title: "Vue.js" },
      { icon: <SiNuxtdotjs className={iconType} />, title: "Nuxt.js" },
      { icon: <HiOutlineSparkles className={iconType} />, title: "LangChain" },
      { icon: <GrDatabase className={iconType} />, title: "REST APIs" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { icon: <SiAmazonaws className={iconType} />, title: "AWS" },
      { icon: <SiAzuredevops className={iconType} />, title: "Azure" },
      { icon: <SiFirebase className={iconType} />, title: "Firebase" },
      { icon: <SiGit className={iconType} />, title: "Git" },
      { icon: <SiLinux className={iconType} />, title: "Linux" },
    ],
  },
];

const Skill = ({ setSelectedPage }: Props) => {

  return (
    <section 
        id="skills" 
        className="bg-[#1b262c]"
    >
      <div className="mx-auto w-[min(100%,72rem)] px-4 py-16 md:px-0">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          <motion.div
            className="md:my-5 md:max-w-2xl"
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
            <p className="my-5 text-slate-300 md:text-lg">
              Languages, frameworks, and tools I've taken the time to learn and work with.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <section key={group.title} className="rounded-2xl border border-white/[0.12] bg-[#0f4c75]/35 p-5 sm:p-6">
                <h3 className="text-base font-semibold text-white sm:text-lg">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <Skills key={skill.title} icon={skill.icon} title={skill.title} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
