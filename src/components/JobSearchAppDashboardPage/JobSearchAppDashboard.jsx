import style from './JobSearchAppDashboard.module.scss';
import InvestmentManager1 from '../../assets/images/InvestmentManager1.png';
import InvestmentManager2 from '../../assets/images/InvestmentManager2.png';
import InvestmentManager3 from '../../assets/images/InvestmentManager3.png';
import InvestmentManager4 from '../../assets/images/InvestmentManager4.png';
import InvestmentManager5 from '../../assets/images/InvestmentManager5.png';
import InvestmentManager6 from '../../assets/images/InvestmentManager6.png';
import InvestmentManager7 from '../../assets/images/InvestmentManager7.png';
import InvestmentManager8 from '../../assets/images/InvestmentManager8.png';
import InvestmentManager9 from '../../assets/images/InvestmentManager9.png';
import { SlArrowLeft } from 'react-icons/sl';

const JobSearchAppDashboard = () => {
  return (
    <>
      <a href="/" className={style.backToMainPageButton}>
        <SlArrowLeft size={15} />
        Back
      </a>
      <section className={style.wrapper}>
        <p className={style.title}>Job-search app</p>
        <ul className={style.subsection}>
          <li>Human Resource</li>
          <li>Mobile app</li>
        </ul>
        <div className={style.descriptionWithTitle}>
          <p className={style.titleForDescription}>About project</p>
          <section className={style.twoDescriptions}>
            <p className={style.leftDescription}>
              The project involved designing a new mobile app for a job-search product . To ensure a
              comprehensive approach to design, I started with competitor research to understand the
              best practices and emerging trends. The visual style was designed to be modern,
              engaging, and visually appealing while also being professional and trustworthy. To
              bring unique and custom illustrations to the app, I collaborated with an artist.
            </p>
          </section>
        </div>
      </section>
      <section className={style.gridContainer}>
        <div className={style.gridItem}>
          <img alt="pic" src={InvestmentManager1} />
        </div>
        <div className={style.gridItem}>
          <img alt="pic" src={InvestmentManager2} />
        </div>
        <div className={style.gridItem}>
          <img alt="pic" src={InvestmentManager3} />
        </div>
        <div className={style.gridItem}>
          <img alt="pic" src={InvestmentManager4} />
        </div>
      </section>
      <div className={style.wrapper2}>
        <section className={style.subsection2}>
          <p className={style.title2}>Results</p>
          <section className={style.twoDescriptions}>
            <p className={style.description2}>
              New user interface was created to make the mobile app intuitive, visually appealing,
              and easy to use. The mobile app was designed to provide a seamless experience for
              users, making it easy for them to search for and apply to jobs while also building
              their professional profiles. The new mobile app is a user-friendly solution that helps
              job seekers find and apply for relevant job postings while also giving them the
              ability to manage their job applications and resumes.
            </p>
          </section>
        </section>
      </div>
      <section className={style.gridContainer2}>
        <div className={style.gridItem2}>
          <img alt="pic" src={InvestmentManager5} />
        </div>
        <div className={style.gridItem2}>
          <img alt="pic" src={InvestmentManager6} />
        </div>
        <div className={style.gridItem2}>
          <img alt="pic" src={InvestmentManager7} />
        </div>
        <div className={style.gridItem2}>
          <img alt="pic" src={InvestmentManager8} />
        </div>
        <div className={style.gridItem2}>
          <img alt="pic" src={InvestmentManager9} />
        </div>
      </section>
    </>
  );
};

export default JobSearchAppDashboard;
