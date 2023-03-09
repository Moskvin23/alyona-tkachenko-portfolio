import React from 'react';
import { RxArrowRight } from 'react-icons/rx';
import style from './About.module.scss';
import './About.module.scss';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const About = () => {
  function joinAll(...classes) {
    return classes.join(' ');
  }

  return (
    <>
      <div className={style.container} id="about">
        <div className={style.wrapper}>
          <p className={style.title}>About</p>
          <section className={style.mainTitle}>
            <p>
              I'm
              <span> Alyona,</span> a designer based in Lviv, Ukraine. I am focusing on solving
              complex problems, building
              <span> sustainable products</span> and services.
            </p>
          </section>
          <section className={style.description}>
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
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
