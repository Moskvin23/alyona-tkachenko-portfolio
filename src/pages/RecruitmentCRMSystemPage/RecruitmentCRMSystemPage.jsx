import style from './RecruitmentCRMSystemPage.module.scss';
import RecruitmentCRMSystem from '../../components/RecruitmentCRMSystemPage/RecruitmentCRMSystem';
import Navbar from '../../components/Navbar/Navbar';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
const RecruitmentCRMSystemPage = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Navbar />
        <RecruitmentCRMSystem />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default RecruitmentCRMSystemPage;
