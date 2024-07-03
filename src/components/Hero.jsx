import { HERO_CONTENT } from "../constants";
import Profile_pic from "../assets/ganesh_image.jpg";
import { motion } from "framer-motion";
import resume from "../assets/GaneshResume.pdf";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-36 ">
        <div className="flex flex-wrap ">
          <div className="w-full lg:w-1/2 ">
            <div className=" flex flex-col items-center lg:items-start ">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className=" pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl  "
              >
                Ganesh Bobade
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent "
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className=" my-2 max-w-xl py-6 front-light tracking-tighter "
              >
                {HERO_CONTENT}
              </motion.p>
              <motion.a
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                View Resume
              </motion.a>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 lg:p-8 ">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={Profile_pic}
                height={550}
                width={500}
                alt="Ganesh Bobade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
