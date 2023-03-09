import style from './Contact.module.scss';
import { motion } from 'framer-motion';

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
const Contact = () => {
  return (
    <motion.div id="contact" className={style.container}>
      <p className={style.nameOfSection}>Contact</p>
      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7 }}
        animate={{ opacity: 0, scale: 1 }}
        viewport={{ amount: 0.3 }}
        style={{ overflow: 'hidden' }}
        variants={textAnimation}
        className={style.containerForSections}>
        <p className={style.sayHello}>Say Hello!</p>
        <section className={style.twoSections}>
          <section className={style.leftSection}>
            <div className={style.leftPart}>
              <p className={style.titlesForSections}>Mail me</p>
              <div className={style.leftTitle}>
                <ul>
                  <li>alyonatkachenko067@gmail.com</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className={style.rightPart}>
              <p className={style.titlesForSections}>Follow me</p>
              <div>
                <ul className={style.rightTitle}>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/in/alona-tkachenko-7261251bb">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/aloshk_a">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.behance.net/alyonatkac7d9e?tracking_source=search_users|alona%20tkachenko">
                      Behance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </motion.section>
      <div className={style.shadow}></div>
    </motion.div>
  );
};

export default Contact;
