import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import style from './MainPage.module.scss';
import DashboardInfo from '../../components/MainPage/DashboardInfo/DashboardInfo';
import Projects from '../../components/MainPage/Projects/Projects';
import AboutMotion from '../../components/MainPage/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import About from '../../components/MainPage/About/About';

const animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const MainPage = () => {
  return (
    <>
      <div initial="hidden" whileInView="visible" className={style.wrapper}>
        <Navbar />
        <DashboardInfo />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
