import styles from './ProjectsStyles.module.css';
import TLDR from '../../assets/paper.jpeg';
import scribbleSpace from '../../assets/notes.webp'
import ziShi from '../../assets/zishi.webp'
import invMonitor from '../../assets/stock.jpeg'
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
          p="Simulating the usage of materials across different teams that have different permissions."
        />
        <ProjectCard
          src={TLDR}
          link="https://github.com/samiahhossain/TLDR_AI"
          h3="TL;DR AI"
          p="Intelligent summarizer that extracts the main point from large pieces of text."
        />
        <ProjectCard
          src={scribbleSpace}
          link="https://github.com/samiahhossain/ScribbleSpace"
          h3="ScribbleSpace"
          p="Dynamic notes application that allows for notes to be saved, edited, searched for, and deleted."
        />
        <ProjectCard
          src={ziShi}
          link="https://github.com/samiahhossain/ZiShi-s_Wardrobe"
          h3="ZiShi's Wardrobe"
          p="Clothing store website showcasing the catalogue in a clean and organized fashion."
        />
      </div>
    </section>
  );
}

export default Projects;
