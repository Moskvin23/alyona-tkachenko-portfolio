import React from 'react';
import { RxArrowRight } from 'react-icons/rx';
import style from './About.module.scss';
import './About.module.scss';
import { motion } from 'framer-motion';

const About = () => {
  function joinAll(...classes) {
    return classes.join(' ');
  }
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
      <div className={style.container} id="about">
        <motion.div
          variants={textAnimation}
          style={{ overflow: 'hidden' }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          animate={{ opacity: 0, scale: 1 }}
          viewport={{ amount: 0.1 }}
          className={style.wrapper}>
          <p className={style.title}>About</p>
          <motion.section
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            animate={{ opacity: 0, scale: 1 }}
            viewport={{ amount: 0.1 }}
            className={style.mainTitle}>
            <p>
              I'm
              <span> Alyona,</span> a designer based in Lviv, Ukraine. I am focusing on solving
              complex problems, building
              <span> sustainable products</span> and services.
            </p>
          </motion.section>
          <motion.section
            variants={textAnimation2}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            animate={{ opacity: 0, scale: 1 }}
            viewport={{ amount: 0.5 }}
            className={style.description}>
            <p className={style.textDescription}>
              I specialize in creating visually appealing and functional user experiences focusing
              on results and quality. I'm passionate about interaction, UX, research, and
              human-centred design. My driving force is understanding people and resolving their
              pains and fears by finding solutions through intuitive design and insightful
              interaction. I have a baggage of interactive experience, including user testing,
              building and managing scalable design systems, competitor research, responsive design,
              and end-to-end experiences for web and mobile.
            </p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/13H6KGoXdkDvfJMPUEKOSXvBTZLncr3bo/view?usp=sharing">
              <button className={joinAll(style.button, style.hbFillRightBg)}>
                Check out my CV
                <RxArrowRight />
              </button>
            </a>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
};

export default About;
