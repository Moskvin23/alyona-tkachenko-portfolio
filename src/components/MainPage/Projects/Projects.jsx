import style from './Projects.module.scss';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
  const textAnimation = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };
  const textAnimation2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className={style.container} id="projects">
      <div>
        <p className={style.title}>Projects</p>
        <section className={style.twoSections}>
          {/* Left Side */}
          <section className={style.leftSection}>
            {projects.map((project) => (
              <motion.div
                variants={textAnimation}
                // style={{ overflow: 'hidden' }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                animate={{ opacity: 0, scale: 1 }}
                viewport={{ amount: 0.3 }}
                className={style.shadow}>
                <div
                  className={style.subsection}
                  onMouseEnter={() => setIsShown(project.id)}
                  onMouseLeave={() => setIsShown(0)}>
                  <a href={`/${project.path}`} className={style.link} key={project.id}>
                    <motion.p
                      variants={textAnimation}
                      style={{ overflow: 'hidden' }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.7 }}
                      animate={{ opacity: 0, scale: 1 }}
                      viewport={{ amount: 0.3 }}
                      key={project.id}>
                      <span>0{project.id}</span>
                      {project.title}
                    </motion.p>
                    <HiOutlineArrowUpRight style={{ width: '20px' }} />
                  </a>
                </div>
              </motion.div>
            ))}
          </section>
          {/* Right Side */}
          <section className={style.rightSection}>
            <motion.div
              variants={textAnimation}
              style={{ overflow: 'hidden' }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              animate={{ opacity: 0, scale: 1 }}
              viewport={{ amount: 0.2 }}
              className={style.picture}>
              {!isShown ? (
                <img src={projects[0].image} alt="pic" />
              ) : (
                projects.map(
                  (project) =>
                    isShown === project.id && (
                      <motion.img
                        variants={textAnimation2}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.9 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        viewport={{ amount: 0.2 }}
                        src={project.image}
                        alt="pic"
                      />
                    ),
                )
              )}
            </motion.div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Projects;
