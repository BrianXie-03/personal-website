import { SelectedPage } from '@/shared/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const childVariant = {
    hidden: {opacity: 0, y: 12},
    visible: {opacity: 1, y: 0},
}

type Props = {
    icon: JSX.Element;
    title: string;
    time: string;
    description?: string;
    progression?: Array<{ title: string; time?: string; description: string }>;
    setSelectedPage: (value: SelectedPage) => void;
};

const Experience = ({ icon, title, time, description, progression }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
        className="flex h-full flex-col px-5 py-5 text-left sm:px-7 sm:py-6"
        variants={childVariant}    
    >
        <div className="flex items-start gap-4 sm:gap-5">
            <div className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-200">
                {icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">{title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-400">{time}</p>
            </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          className="mt-4 w-fit text-sm font-semibold text-sky-200 underline underline-offset-4 hover:text-white"
        >
          {expanded ? 'Show less' : 'Learn more'}
        </button>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="mt-3 max-w-3xl overflow-hidden text-sm leading-7 text-slate-300 sm:text-base"
            >
              {progression ? (
                <ol className="relative ml-2 space-y-5 border-l border-[#3282b8]/70 pl-6">
                  {progression.map((step) => (
                    <li key={`${step.title}-${step.time}`} className="relative">
                      <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-[#bbe1fa] bg-[#0f4c75]" />
                      <h4 className="font-semibold text-[#bbe1fa]">{step.title}</h4>
                      {step.time && <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">{step.time}</p>}
                      <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{step.description}</p>
                    </li>
                  ))}
                </ol>
              ) : <p>{description}</p>}
            </motion.div>
          )}
        </AnimatePresence>
    </motion.div>
  )
}

export default Experience
