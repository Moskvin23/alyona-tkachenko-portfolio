import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import InvestmentManagerPage from './pages/InvestmentManagerPage/InvestmentManagerPage';
import JobSearchApplication from './pages/JobSearchApplication/JobSearchApplication';
import MainPage from './pages/MainPage/MainPage';
import RecruitmentCRMSystemPage from './pages/RecruitmentCRMSystemPage/RecruitmentCRMSystemPage';
import WebsiteFirstTheatre from './pages/WebsiteFirstTheatrePage/WebsiteFirstTheatre';
import style from './App.module.scss';
function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/investmentManager" element={<InvestmentManagerPage />} />
          <Route path="/jobSearchApplication" element={<JobSearchApplication />} />
          <Route path="/recruitmentCRMSystem" element={<RecruitmentCRMSystemPage />} />
          <Route path="/websiteFirstTheatre" element={<WebsiteFirstTheatre />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
