import style from './Footer.module.scss';
import { HiOutlineArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={style.container}>
      <div className={style.leftPart}>
        <p>© Alyona Tkachenko</p>
      </div>
      <div className={style.rightPart} onClick={scrollUp}>
        <div className={style.topWithArrow}>
          <p>Top</p> <HiOutlineArrowUp size={'20px'} className={style.arrowUp} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
