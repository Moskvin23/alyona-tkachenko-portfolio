import { useState } from 'react';
import style from './CoachingBusinessProductsWebsite.module.scss';
import { SlArrowLeft } from 'react-icons/sl';
import { motion } from 'framer-motion';
import heroImage from '../../pages/CoachingBusinessProductsWebsitePage/Hero.png';
import overviewImage from '../../pages/CoachingBusinessProductsWebsitePage/image 101.png';
import frameImage from '../../pages/CoachingBusinessProductsWebsitePage/Frame 427319521.png';
import numberIcon from '../../pages/CoachingBusinessProductsWebsitePage/Number.png';
import numberIcon2 from '../../pages/CoachingBusinessProductsWebsitePage/Number (1).png';
import numberIcon3 from '../../pages/CoachingBusinessProductsWebsitePage/Number (2).png';
import homeDashboardImage from '../../pages/CoachingBusinessProductsWebsitePage/image 96.png';
import sessionsImage from '../../pages/CoachingBusinessProductsWebsitePage/image 97.png';
import clientsImage from '../../pages/CoachingBusinessProductsWebsitePage/image 98.png';
import companiesImage from '../../pages/CoachingBusinessProductsWebsitePage/image 99.png';
import assessmentsImage from '../../pages/CoachingBusinessProductsWebsitePage/image 100.png';
import designDevAlignmentImage from '../../pages/CoachingBusinessProductsWebsitePage/Design-Dev Alignment.png';
import designDevAlignmentImage1 from '../../pages/CoachingBusinessProductsWebsitePage/Design-Dev Alignment (1).png';
import designDevAlignmentImage2 from '../../pages/CoachingBusinessProductsWebsitePage/Design-Dev Alignment (2).png';
import websiteVideo from '../../pages/CoachingBusinessProductsWebsitePage/video_website_block.mp4';

const SEGMENT_IMAGES = {
  Home: homeDashboardImage,
  Sessions: sessionsImage,
  Clients: clientsImage,
  Companies: companiesImage,
  Assessments: assessmentsImage,
};

const textAnimation = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const SEGMENT_LABELS = ['Home', 'Sessions', 'Clients', 'Companies', 'Assessments'];

const CoachingBusinessProductsWebsite = () => {
  const [activeSegment, setActiveSegment] = useState('Home');

  return (
    <>
      <a href="/" className={style.backLink}>
        <SlArrowLeft size={15} />
        Back
      </a>

      {/* Hero — зображення з Figma (Hero.png) */}
      <motion.section
        className={style.hero}
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}>
        <img src={heroImage} alt="Arete — the leader in performance coaching for financial firms" className={style.heroImageFull} />
      </motion.section>

      {/* Overview — білий фон, заокруглення зверху (CSS), накладається на Hero; контент видно одразу */}
      <section className={style.overview}>
        <div className={style.overviewContent}>
          <div className={style.overviewRow}>
            <h2 className={style.overviewTitle}>Overview</h2>
            <div className={style.overviewTextBlock}>
              <p className={style.overviewText}>
                An efficient and elegant platform has been designed for a premier performance coaching company. This platform will replace cumbersome spreadsheets with a unified system that streamlines their entire operations.
              </p>
              <p className={style.overviewText}>
                I have designed a central hub for the company's employees, ensuring it aligns with their vision and unique processes.
              </p>
            </div>
          </div>
          <div className={style.overviewImageWrap}>
            <img src={overviewImage} alt="Coaching platform dashboard" className={style.overviewImage} />
          </div>
        </div>
      </section>

      {/* Designs delivered — та сама ширина, що й Hero.png */}
      <motion.section
        className={style.designsDelivered}
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}>
        <img src={frameImage} alt="Designs delivered — Coach platform, Operations platform, Website" className={style.designsDeliveredImage} />
      </motion.section>

      {/* Coach platform — та сама сітка, що й Overview: заголовок зліва, текст справа */}
      <section className={style.coachPlatform}>
        <div className={style.coachPlatformContent}>
          <div className={style.coachPlatformRow}>
            <div className={style.coachPlatformTitleWrap}>
              <img src={numberIcon} alt="" className={style.coachPlatformNumberIcon} aria-hidden />
              <h3 className={style.coachPlatformTitle}>Coach platform</h3>
            </div>
            <div className={style.coachPlatformTextBlock}>
              <p className={style.coachPlatformSubtitle}>One-stop solution for Arete's coaches</p>
              <div className={style.coachPlatformText}>
                <p>
                  The platform helps coaches keep everything they need to know about their clients under one roof. Here, the coach monitors performance, and manages their clients and sessions. Automation of such routine tasks as assessment and learning materials assignment, saves up to 15% of coach's time.
                </p>
                <p>
                  The platform leaves no more space for manual file sifting or scrolling through files in their computer to find what is needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Сегментований контрол — перемикання по кліку */}
      <section className={style.segmentSection}>
        <div className={style.coachPlatformContent}>
          <div
            className={style.segmentControl}
            role="tablist"
            aria-label="Navigation">
            {SEGMENT_LABELS.map((label) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={activeSegment === label}
                className={activeSegment === label ? style.segmentActive : style.segmentItem}
                onClick={() => setActiveSegment(label)}>
                {label}
              </button>
            ))}
          </div>
          {SEGMENT_IMAGES[activeSegment] && (
            <div className={style.segmentContent}>
              <img
                src={SEGMENT_IMAGES[activeSegment]}
                alt={`Arete Coach platform — ${activeSegment}`}
                className={style.segmentContentImage}
              />
            </div>
          )}
        </div>
      </section>

      {/* Operations platform — під табами; відстань 150px задана .segmentSection padding-bottom */}
      <section className={`${style.coachPlatform} ${style.coachPlatformAfterSegment}`}>
        <div className={style.coachPlatformContent}>
          <div className={style.coachPlatformRow}>
            <div className={style.coachPlatformTitleWrap}>
              <img src={numberIcon2} alt="" className={style.coachPlatformNumberIcon} aria-hidden />
              <h3 className={style.coachPlatformTitle}>Operations platform</h3>
            </div>
            <div className={style.coachPlatformTextBlock}>
              <p className={style.coachPlatformSubtitle}>Sophisticated custom tool to operate the company</p>
              <div className={style.coachPlatformText}>
                <p>
                  Delivering high-quality training to demanding clients requires attention to every small detail. However, Arete was using conventional tools such as spreadsheets and file storage to meet their unique business requirements, which made their operations processes complex.
                </p>
                <p>
                  To address this, within the team we created the platform that allowed the Arete operations team to automate a significant portion of their work. With this platform, they can perform their tasks, manage coaches and clients, and generate reports or invoices within minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design-Dev Alignment — інвойсинг, 1:1 coaching */}
      <section className={style.designDevSection}>
        <div className={style.coachPlatformContent}>
          <img
            src={designDevAlignmentImage}
            alt="Invoicing in seconds — coaching sessions and invoice preview"
            className={style.designDevImage}
          />
        </div>
      </section>

      {/* Design-Dev Alignment (1) — In-depth reports; 24px між блоками */}
      <section className={style.designDevSection}>
        <div className={style.coachPlatformContent}>
          <img
            src={designDevAlignmentImage1}
            alt="In-depth reports — customizable reports and data visualization"
            className={style.designDevImage}
          />
        </div>
      </section>

      {/* Design-Dev Alignment (2) — Staff onboarding & management; останній блок — 80px знизу */}
      <section className={`${style.designDevSection} ${style.designDevSectionLast}`}>
        <div className={style.coachPlatformContent}>
          <img
            src={designDevAlignmentImage2}
            alt="Staff onboarding & management — coach profiles and performance"
            className={style.designDevImage}
          />
        </div>
      </section>

      {/* Website — той самий стиль що й Operations platform; відстань 150px зверху */}
      <section className={`${style.coachPlatform} ${style.coachPlatformAfterDesignDev}`}>
        <div className={style.coachPlatformContent}>
          <div className={style.coachPlatformRow}>
            <div className={style.coachPlatformTitleWrap}>
              <img src={numberIcon3} alt="" className={style.coachPlatformNumberIcon} aria-hidden />
              <h3 className={style.coachPlatformTitle}>Website</h3>
            </div>
            <div className={style.coachPlatformTextBlock}>
              <p className={style.coachPlatformSubtitle}>Professional design for demanding audience</p>
              <div className={style.coachPlatformText}>
                <p>
                  I tailored the design of Arete's website to the financial world audience. The interface provides easy access to important information. The color scheme reflects the seriousness and professionalism of the finance sector.
                </p>
                <p>
                  I incorporated videos and diagrams to keep users engaged and to help them quickly understand the company's offering.
                </p>
              </div>
            </div>
          </div>
          <div className={style.websiteVideoWrap}>
            <video
              src={websiteVideo}
              className={style.websiteVideo}
              playsInline
              muted
              loop
              autoPlay
              aria-label="Website design preview"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoachingBusinessProductsWebsite;
