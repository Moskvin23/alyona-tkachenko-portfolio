import style from './InvestmentManager.module.scss';
import { SlArrowLeft } from 'react-icons/sl';
import pic1 from '../../assets/images/Pic1.png';
import pic2 from '../../assets/images/Pic2.png';
import pic3 from '../../assets/images/Pic3.png';
import pic4 from '../../assets/images/Pic4.png';
import pic5 from '../../assets/images/Pic5.png';
import pic6 from '../../assets/images/Pic6.png';
import pic7 from '../../assets/images/Pic7.png';
import pic8 from '../../assets/images/Pic8.png';
import pic9 from '../../assets/images/Pic9.png';
import pic10 from '../../assets/images/Pic10.png';
import pic11 from '../../assets/images/Pic11.png';
import pic12 from '../../assets/images/Pic12.png';
import pic13 from '../../assets/images/Pic13.png';
import pic14 from '../../assets/images/Pic14.png';
import pic15 from '../../assets/images/Pic15.png';
import pic16 from '../../assets/images/Pic16.png';
import pic17 from '../../assets/images/Pic17.png';

const InvestmentManager = () => {
  return (
    <>
      <>
        <a href="/" className={style.backToMainPageButton}>
          <SlArrowLeft size={15} />
          Back
        </a>
        <section className={style.wrapper}>
          <p className={style.title}>Investment manager</p>
          <ul className={style.subsection}>
            <li>Fintech</li>
            <li>Web & Mobile app</li>
            <li>Personal finance manager</li>
          </ul>
          <div className={style.titleWithDescription}>
            <p className={style.titleForDescription}>About project</p>
            <section className={style.twoDescriptions}>
              <p className={style.leftDescription}>
                The application is designed to educate and empower users to manage their finances
                like wealthy individuals do. The newly revamped design provides a personalized
                experience that maximizes user progress through an integrated educational resources,
                such as articles, videos, and webinars, that help to demystify personal finance and
                promote financial literacy. With the new design, users can manually track their
                balance sheet accounts, including assets and liabilities, using the proven TWF
                methodology.
              </p>
              <p className={style.rightDescription}>
                They can also set earned and unearned income goals, identify freedom and lifestyle
                numbers, track their progress, eliminate debt quickly, and utilize rules-based
                systems to build a comprehensive compound asset growth forecasting. Overall, the
                application offers a powerful tool for users to take control of their financial
                lives and achieve their goals. With its intuitive design and comprehensive features,
                it enables users to make informed financial decisions and build a strong financial
                foundation for the future.
              </p>
            </section>
          </div>
        </section>
        {/* <section className={style.gridContainer}>
          <div className={style.gridItem}>
            <img alt="pic" src={pic1} />
          </div>
          <div className={style.gridItem}>
            <img alt="pic" src={pic2} />
          </div>
          <div className={style.gridItem}>
            <img alt="pic" src={pic3} />
          </div>
        </section>
        <section className={style.container}>
          <section className={style.underContainer}>
            <div className={style.wrapper2}>
              <div className={style.descriptionWithTitle}>
                <p className={style.titleForDescription}>Proccess</p>
                <section className={style.twoDescriptions}>
                  <p className={style.leftDescription}>
                    To ensure that the investment manager's web portal remained competitive and
                    up-to-date, competitor research was conducted to identify best practices and
                    emerging trends in the industry. This led to the rebuilding of the information
                    architecture to make it more user-friendly and intuitive. The new structure
                    involved analyzing user data and feedback, identifying user needs, and
                    restructuring the platform accordingly.
                  </p>
                  <p className={style.rightDescription}>
                    A new, clean, and modern visual style was created, including a color palette,
                    typography, and illustrations that aligned with the investment manager's brand
                    identity. Finally, a new user interface design was developed, featuring
                    intuitive navigation menus and interactive elements to enhance user engagement
                    and usability.
                  </p>
                </section>
              </div>
            </div>
            <section className={style.gridContainer2}>
              <div className={style.gridItem2}>
                <img alt="pic" src={pic4} />
              </div>
              <div className={style.gridItem2}>
                <img alt="pic" src={pic5} />
              </div>
              <div className={style.gridItem2}>
                <img alt="pic" src={pic6} />
              </div>
              <div className={style.gridItem2}>
                <img alt="pic" src={pic7} />
              </div>
              <div className={style.gridItem2}>
                <img alt="pic" src={pic8} />
              </div>
              <div className={style.gridItem2}>
                <img alt="pic" src={pic9} />
              </div>
              <div className={style.gridItem2}>
                <img alt="pic" src={pic10} />
              </div>
              <div className={style.gridItem2}>
                <img alt="pic" src={pic11} />
              </div>
            </section>
          </section>
        </section> */}
        <div className={style.wrapper3}>
          <section className={style.descriptionWithTitle}>
            <p className={style.titleForDescription}>Results</p>
            <p className={style.description}>
              Deliverables for the project included a totally redesigned web portal that
              incorporated all of the improvements made during the project. The new web portal was
              more intuitive, visually appealing, and easier to use. The project also involved
              creating a design system that would ensure consistency in design across all platforms
              and devices. Additionally, a new logo was designed that aligned with the investment
              manager's brand identity and the new visual style.
            </p>
          </section>
        </div>
        <section className={style.gridContainer3}>
          <div className={style.gridItem3}>
            <img alt="pic" src={pic12} />
          </div>
          <div className={style.gridItem3}>
            <img alt="pic" src={pic13} />
          </div>
          <div className={style.gridItem3}>
            <img alt="pic" src={pic14} />
          </div>
          <div className={style.gridItem3}>
            <img alt="pic" src={pic15} />
          </div>
          <div className={style.gridItem3}>
            <img alt="pic" src={pic16} />
          </div>
          <div className={style.gridItem3}>
            <img alt="pic" src={pic17} />
          </div>
        </section>
      </>
    </>
  );
};

export default InvestmentManager;
