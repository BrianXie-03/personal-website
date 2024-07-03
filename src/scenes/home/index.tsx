import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import PersonalPhoto from "@/assets/PersonalPhoto.jpg"
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="aboutme"
      className="gap-16 bg-lighter py-10 md:h-full md:py-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}  
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-4/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visable"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visable: { opacity: 1, x: 0},
            }}
          >
              <div className="text-6xl font-bold">
                <p>Brian Xie</p>
              </div>
            <p className="mt-4 text-lg">
              Hello, my name is Brian Xie and I am currently a rising junior at the University of Maryland College-Park, expected to graduate in Spring 2026.
              I am pursuing a Bachelors of Science in Computer Science: Machine Learning and Applied Mathematics alongside recieving a certification in
              Cybersecurity.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div 
            className="mt-6 flex"
            initial="hidden"
            whileInView="visable"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visable: { opacity: 1, x: 0},
            }}  
          >
            <AnchorLink
              className="text-lg font-bold text-gunmetal underline rounded-sm bg-mint shadow-sm py-2 px-6"
              onClick={() => setSelectedPage(SelectedPage.Contacts)}
              href={`#${SelectedPage.Contacts}`}  
            >
              Learn More
            </AnchorLink>
          </motion.div>

        </div>
        {/* IMAGE */}
        {
          (isAboveMediumScreens) ? (
            <div className="flex basis-4/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end border-steel">
              <img alt="home-personal" src={PersonalPhoto}/>
            </div>
          ) : (
            <div className="flex basis-4/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end py-4 border-steel">
              <img alt="home-personal" src={PersonalPhoto}/>
            </div>
          )
        }
      </motion.div>
    </section>
  )
}

export default Home;