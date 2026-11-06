import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
import resume from "/Brian Xie - Resume.pdf";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="contacts" className="py-16">
      <div className="mx-auto w-[min(100%,72rem)] px-4 md:px-0">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Contacts)}
        >
          <div className="max-w-2xl">
            <HText>Contact</HText>
            <p className="mt-4 text-base text-slate-300 md:text-lg">
              I’m always open to conversations about software, research, and building thoughtful products.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href="https://github.com/BrianXie-03?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-slate-100 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="flex items-center gap-3">
                <SiGithub className="h-5 w-5" />
                GitHub
              </span>
              <GoLinkExternal className="h-4 w-4 text-slate-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/brian-xie-612112251/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-slate-100 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="flex items-center gap-3">
                <SiLinkedin className="h-5 w-5" />
                LinkedIn
              </span>
              <GoLinkExternal className="h-4 w-4 text-slate-400" />
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              download="Brian Xie - Resume.pdf"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-slate-100 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="flex items-center gap-3">
                <IoNewspaperOutline className="h-5 w-5" />
                Resume
              </span>
              <GoLinkExternal className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
