import style from './DashboardInfo.module.scss';
import star from '../../../assets/icons/Star 4.svg';
import { HiOutlineX } from 'react-icons/hi';
import { useRef, useState } from 'react';

const DashboardInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>
          <img src={star} alt="some icon" className={style.img1} />
          I'm a<span> UI/UX designer </span>
          passionate about delivering intuitive, functional and compelling and compelling
          interactive solutions
          <img src={star} alt="some icon" className={style.img2} />
        </p>
      </div>
    </div>
  );
};

export default DashboardInfo;
