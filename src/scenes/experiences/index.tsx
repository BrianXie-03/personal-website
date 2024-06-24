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
        title: "blah",
        time: "August 2022 - May 2024",
        description:"blah",
    },
]

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
                <div>
                    <HText>Experience</HText>
                    <p className="my-5 text-sm">Here's a list of some of the experiences that I gain while I've been attending university!</p>
                </div>

                {/* EXPERIENCES */}
                <div className="mt-5 gap-8 items-center justify-between">
                {experience.map((experience: ExperienceType) => (
                     <div key={experience.title} className="w-full">
                     <div className="bg-white rounded-lg shadow-md">
                         {/* Adjust the content height inside the Experience component */}
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
            </div>
            </motion.div>
        </div>

    </section>
  )
}

export default Experiences