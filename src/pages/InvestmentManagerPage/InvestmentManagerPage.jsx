import style from './InvestmentManagerPage.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import InvestmentManager from '../../components/InvestmentManagerPage/InvestmentManager';

const InvestmentManagerPage = () => {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <InvestmentManager />
      <Contact />
      <Footer />
    </div>
  );
};

export default InvestmentManagerPage;
