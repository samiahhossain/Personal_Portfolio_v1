import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <p className={styles.description}>
        I am an undergraduate computer science student at Dalhousie University, currently in my second year. I began my journey in tech in high school, when I taught myself basic web development. I was drawn to the control, flexibility, and customizability I had with the ability to code and use technical tools effectively.
        Fast forward to today, I am most excited about full stack software development and cybersecurity, but I also possess skills and knowledge in cloud computing, artificial intelligence, data analytics, DevOps, and web design. 
        <br /><br />
        I am always working to gain new skills and expand on the ones I already have. Read on to see what I have learnt and accomplished so far.
      </p>
    </section>
  );
}

export default About;
