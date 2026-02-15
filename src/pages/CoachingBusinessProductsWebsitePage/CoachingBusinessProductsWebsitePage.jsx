import style from './CoachingBusinessProductsWebsitePage.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import CoachingBusinessProductsWebsite from '../../components/CoachingBusinessProductsWebsitePage/CoachingBusinessProductsWebsite';

const CoachingBusinessProductsWebsitePage = () => {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <CoachingBusinessProductsWebsite />
      <Contact />
      <Footer />
    </div>
  );
};

export default CoachingBusinessProductsWebsitePage;
