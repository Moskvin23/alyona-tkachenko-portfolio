import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import WebsiteFirstTheatrePage from '../../components/WebsiteFirstTheatrePage/WebsiteFirstTheatrePage';
import style from './WebsiteFirstTheatre.module.scss';

const WebsiteFirstTheatre = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Navbar />
        <WebsiteFirstTheatrePage />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default WebsiteFirstTheatre;
