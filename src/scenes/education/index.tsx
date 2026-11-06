import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Education = ({ setSelectedPage }: Props) => {
  return (
    <section id="education" className="mx-auto min-h-full w-[min(100%,72rem)] px-4 py-16 md:px-0">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Education)}>
        <div className="max-w-3xl">
          <HText>Education</HText>
          <p className="mt-5 text-base text-slate-300 md:text-lg">
            My education foundation had a significant impact on my career path and interests.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-xl font-medium text-white">University of Maryland, College Park</p>
          <p className="mt-4 text-lg text-slate-200">B.S. Computer Science: Machine Learning</p>
          <p className="text-lg text-slate-200">B.S. Applied Mathematics</p>

          <div className="mt-5 space-y-2 text-sm leading-relaxed text-slate-300 md:text-base">
            <p><span className="font-medium text-white">Graduation:</span> May 2026</p>
            <p><span className="font-medium text-white">Honors:</span> Banneker Key Full Ride Scholarship, ACES Honors Program</p>
            <p><span className="font-medium text-white">Coursework:</span> Machine Learning, Computer Vision, Cryptography, Computational Methods, Linear Optimization, Theory & Methods of Statistics, Data Structures and Algorithms, Application of Linear Algebra, Advanced Calculus</p>
          </div>
        </div>

        <div className="mt-12">
          <div className="max-w-3xl">
            <h3 className="font-montserrat text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Certifications
            </h3>
          </div>
          <h4 className="mt-6 text-base font-semibold text-white">Earned</h4>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl border border-white/[0.08] bg-[#10171d] px-5 py-4 text-sm font-medium leading-relaxed text-slate-200 sm:text-base">
              Cybersecurity Certification — University of Maryland
            </li>
          </ul>

          <h4 className="mt-6 text-base font-semibold text-white">In Progress</h4>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "AWS Certified Cloud Practitioner",
              "AWS Solutions Architect",
              "Google Cloud Associate Cloud Engineer",
              "Microsoft Azure Fundamentals",
              "Adobe Business Practitioner",
            ].map((certification) => (
              <li
                key={certification}
                className="rounded-xl border border-white/[0.08] bg-[#10171d] px-5 py-4 text-sm font-medium leading-relaxed text-slate-200 sm:text-base"
              >
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
