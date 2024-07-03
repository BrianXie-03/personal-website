import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs"
import HText from "@/shared/HText";
import { SiLinkedin, SiGithub,  } from "react-icons/si" 
import { IoNewspaperOutline } from "react-icons/io5";
import resume from "/Brian Xie - Resume.pdf"
import { GoLinkExternal } from "react-icons/go";



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `bg-white mb-5 w-full rounded-lg bg-mint px-5 py-3 placeholder-gunmetal text-gunmetal`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contacts" className="bg-lighter"> 
      <div className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Contacts)}
        >
          {/* HEADER */}
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className="text-gunmetal">CONTACT ME</span>
            </HText>
            <p className="my-5">
              Reach out to me or find out more about me here.
            </p>
          </motion.div>

          {/* FORM AND IMAGE */}
          <div className="mt-10 justify-between gap-8 md:flex basis-1/2">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/d8bde7e2db3a4155af64e3bf773158d1"
                method="POST"
              >
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-gunmetal">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-gunmetal">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  placeholder="MESSAGE"
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-gunmetal">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-white px-20 py-3 transition duration-500 hover:text-white shadow-md"
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>
            {/* RIGHT SIDE */}
            <motion.div
                className="mt-16 basis-1/2 md:mt-0 md:mx-5 bg-white border-2 border-steel border-opacity-40 shadow-sm p-10 rounded-xl"
                initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-2xl font-bold">Informational Links!</div>
                <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext justify-center">
                    <a 
                        href="https://github.com/BrianXie-03?tab=repositories" 
                        className="rounded-md text-lg text-steel m-6"
                        target="_blank"
                    >
                        <div className="flex items-center">
                            <SiGithub className="w-8 h-8" />
                            <p className="text-gunmetal ml-2 whitespace-nowrap flex gap-1 align-text-top">Github<GoLinkExternal className="relative top-1" />
                            </p>
                        </div>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/brian-xie-612112251/" 
                        className="rounded-md text-lg text-steel m-6"
                        target="_blank"
                    >
                        <div className="flex items-center">
                            <SiLinkedin className="w-8 h-8" />
                            <p className="text-gunmetal ml-2 whitespace-nowrap flex gap-1 align-text-top">Linkedin<GoLinkExternal  className="relative top-1"/>
                            </p>
                        </div>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/brian-xie-612112251/" 
                        className="rounded-md text-steel text-lg m-6"
                    >
                        <div className="flex items-center">
                            <IoNewspaperOutline className="w-8 h-8" />
                            <p className="text-gunmetal ml-2">
                              <div className="text-center">
                                  <a href={resume} target="_blank" download="Brian Xie - Resume.pdf">
                                  {
                                    <p className="whitespace-nowrap flex gap-1 align-text-top">Resume <BsDownload className="relative top-1"/>
                                    </p>
                                  }
                                  </a>
                              </div>
                            </p>
                        </div>
                    </a>
                </div>
              <div>
                  Thank you for visiting my website! If you want to reach out to me, please do!
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;