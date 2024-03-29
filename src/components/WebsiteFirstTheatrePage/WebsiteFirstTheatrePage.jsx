import style from './WebsiteFirstTheatrePage.module.scss';
import Website1 from '../../assets/images/Website1.png';
import Website2 from '../../assets/images/Website2.png';
import Website3 from '../../assets/images/Website3.png';
import Website4 from '../../assets/images/Website4.png';
import Website5 from '../../assets/images/Website5.png';
import Website6 from '../../assets/images/Website6.png';
import Website7 from '../../assets/images/Website7.png';
import WebSiteMobile1 from '../../assets/images/WebSiteMobile1.png';
import WebSiteMobile2 from '../../assets/images/WebSiteMobile2.png';
import WebSiteMobile3 from '../../assets/images/WebSiteMobile3.png';
import { SlArrowLeft } from 'react-icons/sl';
import { motion } from 'framer-motion';

const WebsiteFirstTheatrePage = () => {
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
  const textAnimation2 = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <a href="/" className={style.backToMainPage}>
        <SlArrowLeft size={15} />
        Back
      </a>
      <motion.section
        className={style.wrapper}
        variants={textAnimation}
        style={{ overflow: 'hidden' }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.9 }}
        animate={{ opacity: 0, scale: 1 }}
        viewport={{ amount: 0.1 }}>
        <p className={style.title}>Website “First Theatre”</p>
        <ul className={style.subsection}>
          <li>Website</li>
          <li>Theatre</li>
          <li>Ukrainian local project</li>
        </ul>
        <div className={style.descriptionWithTitle}>
          <p className={style.titleForDescription}>About project</p>
          <p className={style.description}>
            The design for the website of the Ukrainian theatre “The first theatre for children and
            youth” was a comprehensive process that involved audience analysis, competitor research,
            website architecture, and creating new visual style. The goal of the project was to
            create a visually stunning website that would appeal to families and children and
            showcase the culture and repertoire of the theatre.
          </p>
        </div>
      </motion.section>
      <motion.section
        className={style.gridContainer}
        variants={textAnimation2}
        style={{ overflow: 'hidden' }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.9 }}
        animate={{ opacity: 0, scale: 1 }}
        viewport={{ amount: 0.3 }}>
        <div className={style.gridItem}>
          <img alt="pic" src={Website1} />
        </div>
        <div className={style.gridItem}>
          <img src={Website2} alt="pic" />
        </div>
        <div className={style.gridItem}>
          <img src={Website3} alt="pic" />
        </div>
        <div className={style.gridItem}>
          <img src={Website4} alt="pic" />
        </div>
        <div className={style.gridItem}>
          <img alt="pic" src={Website5} />
        </div>
        <div className={style.gridItem}>
          <img alt="pic" src={Website6} />
        </div>
        <div className={style.gridItem}>
          <img alt="pic" src={Website7} />
        </div>
      </motion.section>
      <motion.div
        className={style.wrapper2}
        variants={textAnimation}
        style={{ overflow: 'hidden' }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.9 }}
        animate={{ opacity: 0, scale: 1 }}
        viewport={{ amount: 0.1 }}>
        <section className={style.subsection2}>
          <p className={style.title2}>Design process</p>
          <p className={style.description2}>
            To begin, an audience analysis was conducted to gain a deeper understanding of the
            target audience and their needs. A new visual style was created, which included a modern
            and visually appealing design that aligned with the theatre's historical roots. The new
            website was adapted to be responsive and optimized for different viewport sizes,
            including tablets and mobile devices. The design was intended to be engaging and
            immersive, capturing the attention of visitors and encouraging them to explore the site
            further.
          </p>
        </section>
      </motion.div>
      <motion.section
        className={style.gridContainer2}
        variants={textAnimation2}
        style={{ overflow: 'hidden' }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.9 }}
        animate={{ opacity: 0, scale: 1 }}
        viewport={{ amount: 0.1 }}>
        <div className={style.gridItem2}>
          <img alt="pic" src={WebSiteMobile1} className={style.gridRow2} />
        </div>
        <div className={style.gridItem2}>
          <img src={WebSiteMobile2} alt="pic" />
        </div>
        <div className={style.gridItem2}>
          <img src={WebSiteMobile3} alt="pic" />
        </div>
      </motion.section>
    </>
  );
};

export default WebsiteFirstTheatrePage;
