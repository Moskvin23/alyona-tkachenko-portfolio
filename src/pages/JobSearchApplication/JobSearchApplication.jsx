import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import JobSearchAppDashboard from '../../components/JobSearchAppDashboardPage/JobSearchAppDashboard';
import style from './JobSearchApplication.module.scss';
const JobSearchApplication = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Navbar />
        <JobSearchAppDashboard />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default JobSearchApplication;
