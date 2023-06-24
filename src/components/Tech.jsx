import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My learning so far</p>
        <h2 className={styles.sectionHeadText}>Tech stack and skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-40 flex flex-col items-center">
          <BallCanvas icon={technology.icon} />
          <p className="mt-2 text-center font-bold">{technology.name}</p>
        </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");