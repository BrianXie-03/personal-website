import { ExperienceType, SelectedPage } from '@/shared/types'
import HText from '@/shared/HText'
import { motion } from 'framer-motion';
import Experience from './Experience';
import { technica } from "@/assets/images";
import ps from "@/assets/ps.png";
import umd from "@/assets/umd.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const currentExperience: Array<ExperienceType> = [
    {
        icon: <div className="h-6 w-6"><img alt="Publicis Sapient" src={ps} className="h-full w-full object-contain" /></div>,
        title: "Junior Associate SDE | Publicis Sapient",
        time: "September 2026 - Present",
        progression: [
            {
                title: "Junior Associate SDE · Full-time",
                time: "September 2026 - Present",
                description: "Returned to Publicis Sapient as a full-time Junior Associate Software Development Engineer.",
            },
            {
                title: "Software Engineer Intern",
                time: "June 2025 - August 2025",
                description: "Developed a financial chatbot integrated into a client website using LangChain (RAG), Firebase, Azure, and OpenAI. Refined prompts with licensed professional feedback, conducted unit and user testing, and collaborated in daily Agile standups.",
            },
        ],
    },
];

const pastExperience: Array<ExperienceType> = [
    {
        icon: <div className="h-6 w-6">
                <img alt="technica" src={technica}/>
              </div>,
        title: "Senior Technology Advisor | Technica",
        time: "January 2026 - October 2026",
        progression: [
            {
                title: "Senior Technology Advisor",
                time: "January 2026 - October 2026",
                description: "Advised and assisted the new Technology Director.",
            },
            {
                title: "Technology Director",
                time: "January 2025 - November 2025",
                description: "Led a team of 8 engineers for the largest hackathon for underrepresented genders, supporting 1,500+ hackers. Built and deployed event registration applications using Nuxt.js and AWS services.",
            },
            {
                title: "Operations Organizer",
                time: "March 2024 - November 2024",
                description: "Planned event operations and negotiated with vendors for the venue, power, Wi-Fi, sound, and AV.",
            },
            {
                title: "Volunteer",
                time: "October 2023",
                description: "Helped set up the venue and guided attendees during the event.",
            },
        ],
    },
    {
        icon: <div className="h-6 w-6"><img alt="University of Maryland" src={umd} className="h-full w-full object-contain" /></div>,
        title: "Data Analysis Intern | Earth System Science Interdisciplinary Center",
        time: "January 2025 - June 2025",
        description: "Developed GUI-based satellite data analysis tools using PyQt and Python to automate ground observation retrieval and cross-reference datasets for validation, enabling efficient multi-researcher usage. Optimized data processing pipelines to improve accuracy and reduce manual effort on large-scale satellite datasets.",
    },
    {
        icon: <div className="h-6 w-6">
                <img alt="University of Maryland" src={umd} className="h-full w-full object-contain" />
              </div>,
        title: "Teaching and Grading Assistant | University of Maryland",
        time: "August 2025 - December 2025",
        description: "Developed and evaluated instructional problem solutions for 35 students in Applications of Linear Algebra, delivering detailed grading feedback and clarifying mathematical concepts while reinforcing core learning outcomes.",
    },
];

const container ={
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08},
    }
}

const Experiences = ({setSelectedPage}: Props) => {
    
  return (
    <section
        id="experiences"
        className="mx-auto min-h-full w-[min(100%,72rem)] px-4 py-16 md:px-0"
    >
        <div className="md:my-5">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}  
            >
                <motion.div>
                    <HText>Experiences</HText>
                    <p className="my-5 text-slate-300 md:text-lg">A snapshot of the software, research, and teaching work I’ve come across.</p>
                </motion.div>

                <div className="mt-8">
                    <h3 className="mb-4 text-lg font-semibold text-white sm:text-xl">Current</h3>
                    <div className="space-y-5">
                        {currentExperience.map((role) => (
                            <div key={role.title} className="h-full w-full rounded-2xl border border-white/[0.12] bg-[#0f4c75]/35 shadow-sm shadow-black/10">
                                <Experience icon={role.icon} title={role.title} time={role.time} description={role.description} progression={role.progression} setSelectedPage={setSelectedPage} />
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div 
                    className="mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1, margin: "0px 0px 240px 0px"}}
                    variants={container}
                >
                    <h3 className="mb-4 text-lg font-semibold text-white sm:text-xl">Past</h3>
                    <div className="space-y-5">
                        {pastExperience.map((experience: ExperienceType) => (
                            <div key={experience.title} className="h-full w-full rounded-2xl border border-white/[0.12] bg-[#0f4c75]/35 shadow-sm shadow-black/10">
                                <Experience
                                    icon={experience.icon}
                                    title={experience.title}
                                    time={experience.time}
                                    description={experience.description}
                                    progression={experience.progression}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default Experiences
