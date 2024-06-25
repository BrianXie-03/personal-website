import { motion } from "framer-motion";

type Props = {
  icon: any;
  title: string;
};

const Skills = ({ icon, title }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.75 }}
      transition={{ duration: 1 }}
      variants={{ hidden: {opacity: 0, scale: 0.9},
                  visible: {opacity: 1, scale: 1}}}
      className="mt-5 rounded-full border-2 border-steel border-opacity-40 py-2 pt-10 text-center bg-gray-20"
    >
      <div className="mb-2 flex justify-center">
        <div className="rounded-full border-2 border-mint bg-primary-100 p-3">
          {icon}
        </div>
      </div>

      <h4 className="font-bold text-2xl text-gunmetal">{title}</h4>
    </motion.div>
  );
};

export default Skills;