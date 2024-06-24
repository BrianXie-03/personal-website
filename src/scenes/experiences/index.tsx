import { ExperienceType, SelectedPage } from '@/shared/types'
import HText from '@/shared/HText'
import { motion } from 'framer-motion';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Experience from './Experience';
import aces from "@/assets/aces.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const experience: Array<ExperienceType> = [
    {
        icon: <div className="h-10 w-10">
                <img alt="aces" src={aces}/>
              </div>,
        title: "Advance Cybersecurity Experience for Students (ACES)",
        time: "August 2022 - May 2024",
        description:"I had the privilege of being selected to attend the University of Maryland College-Park ACES Honors Program where I delved into the importance of Cybersecurity. During this program, I gained insight into cybersecurity's applications, significance, and frameworks.",
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Undergraduate Research Intern",
        time: "June 2023 - Present",
        description: "Devise effective solutions to optimize and enhance the speed of virtual machines by conducting comprehensive experimentation to troubleshoot performance and booting issues. Identify compatibility issues across multiple API versions and Ubuntu distributions, employing diverse repair methods to ensure reliable file transfers and system availability",
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Algorithm Problem Developer Intern",
        time: "August 2023 - August 2023",
        description:"Leveraged a deep understanding of programming concepts and instructional design principles to create engaging and effective evaluation problems. Designed a comprehensive curriculum under a tight deadline, ensuring it covers all essential fundamental skills",
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "title",
        time: "time",
        description:"description",
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "title",
        time: "time",
        description:"description",
    },
];

const container ={
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2},
    }
}

const Experiences = ({setSelectedPage}: Props) => {
  return (
    <section
        id="experiences"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        {/* HEADER */}
        <div className="md:my-5">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}  
            >
                <motion.div>
                    <HText>Experience</HText>
                    <p className="my-5 text-sm">Here's a list of some of the experiences that I gain while I've been attending university!</p>
                </motion.div>

                {/* EXPERIENCES */}
                <motion.div 
                    className="mt-5 gap-8 items-center justify-between"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    variants={container}
                    

                >
                {experience.map((experience: ExperienceType) => (
                     <div key={experience.title} className="w-full">
                        <div className="bg-ice bg-opacity-40 rounded-lg shadow-lg">
                            <Experience
                                icon={experience.icon}
                                title={experience.title}
                                time={experience.time}
                                description={experience.description}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                ))}
                </motion.div>
            </motion.div>
        </div>

    </section>
  )
}

export default Experiences