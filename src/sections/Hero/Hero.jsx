import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of Samiah Hossain"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h2>Hi there, my name is</h2>
        <h1>
          Samiah
          <br />
          Hossain
        </h1>
        {/* <h2>Tech Lover.</h2> */}
        <span>
          <a href="https://github.com/samiahhossain" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://linkedin.com/in/samiahh" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Developing and analyzing all things tech.
        </p>
        {/* EITHER POPUP OR EMAIL TEMPLATE */}
        <a href="mailto:samiah.hossain@dal.ca">
          <button className="hover">Request Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
