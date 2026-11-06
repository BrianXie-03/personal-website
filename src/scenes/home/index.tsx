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
    <section id="aboutme" className="relative py-20 md:py-24">
      <motion.div 
        className="mx-auto flex w-[min(100%,72rem)] flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:gap-12 md:px-0"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}  
      >
        <div className="max-w-xl md:max-w-[38rem]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x:-30 },
              visible: { opacity: 1, x: 0},
            }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              Computer Science • Applied Mathematics
            </p>
            <div className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              <p>Brian Xie</p>
            </div>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              <p>
                Hi, I’m Brian, a software engineer and researcher passionate about building thoughtful products and solutions. Aside from work, I’ve been exploring new hobbies and interests, including photography, video editing, and fitness.
              </p>
              <p>
                I’m currently employed as a Software Development Engineer at Publicis Sapient, working alongside clients to build thoughtful products and solutions. My interests lie in software development, research, and building products that make a positive impact on people’s lives.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-7 flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay: 0.15, duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x:-30 },
              visible: { opacity: 1, x: 0},
            }}  
          >
            <AnchorLink
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium uppercase tracking-[0.12em] text-slate-100 transition duration-300 hover:border-white/20 hover:bg-white/10"
              onClick={() => setSelectedPage(SelectedPage.Contacts)}
              href={`#${SelectedPage.Contacts}`}  
            >
              Contact
            </AnchorLink>
          </motion.div>
        </div>

        {(isAboveMediumScreens) ? (
          <div className="flex w-full max-w-[320px] justify-center md:justify-end">
            <img alt="Brian Xie" src={PersonalPhoto} className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/20"/>
          </div>
        ) : (
          <div className="flex w-full justify-center">
            <img alt="Brian Xie" src={PersonalPhoto} className="w-full max-w-[300px] rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/20"/>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Home;
