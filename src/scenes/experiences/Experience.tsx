import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
}

type Props = {
    icon: JSX.Element;
    title: string;
    time: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Experience = ({ icon, title, time, description, setSelectedPage }: Props) => {
  return (
    <motion.div 
        className="mt-2 px-5 py-4 text-center md:grid-cols-3"
        variants={childVariant}    
    >
        <div className="mb-1 flex justify-center">
            <div className="rounded-full border-2 border-steel border-opacity-50 p-2">
                {icon}
            </div>
        </div>
        <h4 className="font-bold text-xl underline">{title}</h4>
        <p className="font-bold">{time}</p>
        <p className="my-1 text-sm">{description}</p>
    </motion.div>
  )
}

export default Experience