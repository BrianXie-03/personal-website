import { ExperienceType, SelectedPage } from '@/shared/types'
import HText from '@/shared/HText'
import { motion } from 'framer-motion';
import Experience from './Experience';
import { aces, technica } from "@/assets/images";
import { HiOutlineDesktopComputer } from "react-icons/hi";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const experience: Array<ExperienceType> = [
    {
        icon: <div className="h-6 w-6">
                <img alt="aces" src={aces}/>
              </div>,
        title: "Advance Cybersecurity Experience for Students (ACES)",
        time: "August 2022 - May 2024",
        description:"I had the privilege of being selected to attend the University of Maryland College-Park ACES Honors Program where I delved into the importance of Cybersecurity. During this program, I gained insight into cybersecurity's applications, significance, and frameworks. I was able to finish the certification with a capstone honeypot project that collected attacker behaviors.",
    },
    {
        icon: <HiOutlineDesktopComputer  className="h-6 w-6" />,
        title: "Undergraduate Research Intern",
        time: "June 2023 - Present",
        description: "Devise effective solutions to optimize and enhance the speed of virtual machines by conducting comprehensive experimentation to troubleshoot performance and booting issues. Identify compatibility issues across multiple API versions and Ubuntu distributions, employing diverse repair methods to ensure reliable file transfers and system availability.",
    },
    {
        icon: <HiOutlineDesktopComputer  className="h-6 w-6" />,
        title: "Algorithm Problem Developer Intern",
        time: "August 2023 - August 2023",
        description:"Leveraged a deep understanding of programming concepts and instructional design principles to create engaging and effective evaluation problems. Designed a comprehensive curriculum under a tight deadline, ensuring it covers all essential fundamental skills",
    },
    {
        icon: <div className="h-6 w-6">
                <img alt="technica" src={technica}/>
              </div>,
        title: "Technica",
        time: "March 2023 - Present",
        description:"Worked for the Utilities team, where I actively communicated with various power, Wi-Fi, and A/V service providers to obtain and compare quotes. My role involved negotiating to optimize costs and ensuring all provided services met the necessary requirements and standards for events. Additionally, I coordinated and managed service agreements to guarantee smooth execution for the event.",
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
                    <p className="my-5 md:text-lg">Here's a list of some of the experiences that I gain while I've been attending university!</p>
                </motion.div>

                {/* EXPERIENCES */}
                <motion.div 
                    className="mt-5 gap-8 items-center justify-between"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    variants={container}
                >
                    <div className="md:mx-auto md:grid md:grid-cols-2 md:gap-8 pd-5 sm:py-5">
                        {experience.map((experience: ExperienceType) => (
                            <div key={experience.title} className="w-full flex border-2 border-steel border-opacity-40 bg-lighter rounded-lg shadow-lg">
                                <Experience
                                    icon={experience.icon}
                                    title={experience.title}
                                    time={experience.time}
                                    description={experience.description}
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