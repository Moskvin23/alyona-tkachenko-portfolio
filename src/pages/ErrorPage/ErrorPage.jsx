import Navbar from '../../components/Navbar/Navbar';
import style from './ErrorPage.module.scss';
import star from '../../assets/icons/Star 4.svg';
import { RxArrowRight } from 'react-icons/rx';

const ErrorPage = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Navbar />
        <section className={style.errorSection}>
          <div className={style.errorTitle}>
            404
            <img src={star} alt="star" />
          </div>
          <div className={style.errorText}>We couldn't find the page you're looking for.</div>
          <a href="/">
            <button className={style.errorButton}>
              Go home <RxArrowRight />
            </button>
          </a>
        </section>
      </div>
    </>
  );
};

export default ErrorPage;
