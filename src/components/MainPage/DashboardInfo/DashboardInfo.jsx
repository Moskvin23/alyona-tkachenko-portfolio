import style from './DashboardInfo.module.scss';
import star from '../../../assets/icons/Star 4.svg';
import { motion } from 'framer-motion';
const DashboardInfo = () => {
  const textAnimation = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7 }}
      animate={{ opacity: 0, scale: 1 }}
      viewport={{ amount: 0.3 }}
      className={style.container}>
      <div className={style.text}>
        <p>
          <img src={star} alt="some icon" className={style.img1} />
          I'm a<span> UI/UX designer </span>
          passionate about delivering intuitive, functional and compelling and compelling
          interactive solutions
          <img src={star} alt="some icon" className={style.img2} />
        </p>
      </div>
    </motion.div>
  );
};

export default DashboardInfo;
