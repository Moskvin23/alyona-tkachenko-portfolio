import React, { useState } from 'react';
import style from './Navbar.module.scss';
import starForNavbar from '../../assets/icons/StarForNavbar.svg';
import { VscClose } from 'react-icons/vsc';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <header className={style.navbar}>
        {/* Left Side */}
        <a href="/">
          <div className={style.leftSide}>
            <img src={starForNavbar} alt="Some icon" />
            <p>Alyona Tkachenko</p>
          </div>
        </a>
        <nav>
          {/* Right Side */}
          <ul className={navbar ? [style.menu, style.active].join(' ') : [style.menu]}>
            <li>
              <Link
                to="projects"
                className={style.Link}
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
                onClick={() => setNavbar(!navbar)}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={style.Link}
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1000}
                onClick={() => setNavbar(!navbar)}>
                About
              </Link>
            </li>
            <li>
              <Link
                className={style.Link}
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1200}
                onClick={() => setNavbar(!navbar)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div onClick={() => setNavbar(!navbar)} className={style.mobileButton}>
          {navbar ? (
            <VscClose style={{ position: 'fixed', right: '30px' }} size={30} />
          ) : (
            <RxHamburgerMenu size={30} />
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
