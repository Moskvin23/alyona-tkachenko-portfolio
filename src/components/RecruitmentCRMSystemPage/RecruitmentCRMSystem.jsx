import style from './RecruitmentCRMSystem.module.scss';
import RecruitmentCRM1 from '../../assets/images/RecruitmentCRM1.png';
import RecruitmentCRM2 from '../../assets/images/RecruitmentCRM2.png';
import RecruitmentCRM3 from '../../assets/images/RecruitmentCRM3.png';
import RecruitmentCRM4 from '../../assets/images/RecruitmentCRM4.png';
import RecruitmentCRM5 from '../../assets/images/RecruitmentCRM5.png';
import RecruitmentCRM6 from '../../assets/images/RecruitmentCRM6.png';
import RecruitmentCRM7 from '../../assets/images/RecruitmentCRM7.png';
import RecruitmentCRM8 from '../../assets/images/RecruitmentCRM8.png';
import RecruitmentCRM9 from '../../assets/images/RecruitmentCRM9.png';
import RecruitmentCRM10 from '../../assets/images/RecruitmentCRM10.png';
import RecruitmentCRM11 from '../../assets/images/RecruitmentCRM11.png';
import { SlArrowLeft } from 'react-icons/sl';

const RecruitmentCRMSystem = () => {
  return (
    <>
      <a href="/" className={style.backToMainPageButton}>
        <SlArrowLeft size={15} />
        Back
      </a>
      <section className={style.wrapper}>
        <p className={style.title}>Recruitment CRM system</p>
        <ul className={style.subsection}>
          <li>CRM system</li>
          <li>Human Resource</li>
          <li>Recruitment</li>
          <li>Chrome Extension</li>
        </ul>
        <div className={style.titleWithDescription}>
          <p className={style.descriptionTitle}>About project</p>
          <p className={style.description}>
            The CRM system is a sophisticated web portal that has been specifically designed for a
            recruitment company. Its main purpose is to streamline the recruitment process, making
            it more efficient and effective. The system has been created to provide a centralized
            location for all candidate and client information. By doing this, recruiters can easily
            manage their pipelines, track the progress of each candidate, and make better-informed
            decisions about which candidates to pursue.
          </p>
        </div>
      </section>
      <section className={style.gridContainer}>
        <div className={style.gridItem}>
          <img alt="pic" src={RecruitmentCRM1} />
        </div>
        <div className={style.gridItem}>
          <img src={RecruitmentCRM2} alt="pic" />
        </div>
        <div className={style.gridItem}>
          <img src={RecruitmentCRM3} alt="pic" />
        </div>
        <div className={style.gridItem}>
          <img src={RecruitmentCRM4} alt="pic" />
        </div>
        <div className={style.gridItem}>
          <img alt="pic" src={RecruitmentCRM5} />
        </div>
      </section>
      <div className={style.wrapper2}>
        <section className={style.subsection2}>
          <p className={style.title2}>Design process</p>
          <section className={style.twoDescriptions}>
            <p className={style.description2}>
              The design process involved several steps: to begin with, competitor research was
              conducted to understand best practices in the industry. A new visual style was
              created, which included a complex design system with a variety of visual elements that
              were carefully crafted to ensure the portal was both visually appealing and easy to
              use. A new logo and identity were also created to help reinforce the brand and
              distinguish the recruitment company from its competitors.
            </p>
            <p className={style.description2}>
              The new web portal was designed with the user in mind, featuring a user-friendly
              interface that allows recruiters to easily navigate and access candidate and client
              data. Also, a chrome extension was created to help users gather data from LinkedIn.
              This extension makes it easy for recruiters to quickly and efficiently gather
              information about potential candidates, improving the efficiency of the recruitment
              process.
            </p>
          </section>
        </section>
      </div>
      <section className={style.gridContainer2}>
        <div className={style.gridItem2}>
          <img alt="pic" src={RecruitmentCRM6} />
        </div>
        <div className={style.gridItem2}>
          <img src={RecruitmentCRM7} alt="pic" />
        </div>
        <div className={style.gridItem2}>
          <img src={RecruitmentCRM8} alt="pic" />
        </div>
        <div className={style.gridItem2}>
          <img src={RecruitmentCRM9} alt="pic" />
        </div>
        <div className={style.gridItem2}>
          <img alt="pic" src={RecruitmentCRM10} />
        </div>
        <div className={style.gridItem2}>
          <img alt="pic" src={RecruitmentCRM11} />
        </div>
      </section>
    </>
  );
};

export default RecruitmentCRMSystem;
