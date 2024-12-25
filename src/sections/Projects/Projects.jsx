import styles from './ProjectsStyles.module.css';
import TLDR from '../../assets/viberr.png';
import scribbleSpace from '../../assets/fresh-burger.png'
import ziShi from '../../assets/hipsster.png'
import invMonitor from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={invMonitor}
          link="https://github.com/samiahhossain/InvMonitor"
          h3="Inventory Monitor"
          p="Simulating Usage"
        />
        <ProjectCard
          src={TLDR}
          link="https://github.com/samiahhossain/TLDR_AI"
          h3="TL;DR AI"
          p="Intelligent Summarizer"
        />
        <ProjectCard
          src={scribbleSpace}
          link="https://github.com/samiahhossain/ScribbleSpace"
          h3="ScribbleSpace"
          p="Notes Application"
        />
        <ProjectCard
          src={ziShi}
          link="https://github.com/samiahhossain/ZiShi-s_Wardrobe"
          h3="ZiShi's Wardrobe"
          p="Clothing Catalogue"
        />
      </div>
    </section>
  );
}

export default Projects;
