import style from './Projects.module.scss';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Investment manager',
    image: 'https://i.postimg.cc/7PpDRhXP/Frame1.png',
    path: 'investmentManager',
  },
  {
    id: 2,
    title: 'Recruitment CRM system',
    image: 'https://i.postimg.cc/DmVCPtrF/Frame2.png',
    path: 'recruitmentCRMSystem',
  },
  {
    id: 3,
    title: 'Job-search application',
    image: 'https://i.postimg.cc/QdDDXzRR/Frame3.png',
    path: 'jobSearchApplication',
  },
  {
    id: 4,
    title: 'Theatre website',
    image: 'https://i.postimg.cc/wTLHYzbX/Frame4.png',
    path: 'websiteFirstTheatre',
  },
];

const Projects = () => {
  //   const API = 'localhost:4000/projects';
  const [isShown, setIsShown] = useState(false);
  // const [projects, setProjects] = useState([]);
  //   const fetchData = () => {
  //     return fetch()
  //       .then((response) => response.json(API))
  //       .then((data) => console.log(data))
  //       .then((data) => setProjects(data));
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div className={style.container} id="projects">
      <div>
        <p className={style.title}>Projects</p>
        <section className={style.twoSections}>
          {/* Left Side */}
          <section className={style.leftSection}>
            {projects.map((project) => (
              <div className={style.shadow}>
                <div
                  className={style.subsection}
                  onMouseEnter={() => setIsShown(project.id)}
                  onMouseLeave={() => setIsShown(0)}>
                  <a href={`/${project.path}`} className={style.link} key={project.id}>
                    <p key={project.id}>
                      <span>0{project.id}</span>
                      {project.title}
                    </p>
                    <HiOutlineArrowUpRight style={{ width: '20px' }} />
                  </a>
                </div>
              </div>
            ))}
          </section>
          {/* Right Side */}
          <section className={style.rightSection}>
            <div className={style.picture}>
              {!isShown ? (
                <img src={projects[0].image} alt="pic" />
              ) : (
                projects.map(
                  (project) => isShown === project.id && <img src={project.image} alt="pic" />,
                )
              )}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Projects;
