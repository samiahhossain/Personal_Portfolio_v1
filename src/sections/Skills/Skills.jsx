import styles from './SkillsStyles.module.css';
import checkMarkDark from '../../assets/checkmark-dark.svg';
import checkMarkLight from '../../assets/checkmark-light.svg';
import ellipsisLight from '../../assets/ellipsis.png';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <p className={styles.label}>
        Checkmark indicates experience, ellipsis/none indicates learning that is
        ongoing or planned for the near future.
      </p>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={ellipsisLight} skill="C" />
        <SkillList src={ellipsisLight} skill="SQL" />
        <SkillList src={ellipsisLight} skill="PHP" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="React Native" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="JUnit" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Azure" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="JetBrains" />
        <SkillList src={checkMarkIcon} skill="VSCode" />
        <SkillList src={ellipsisLight} skill="Kali Linux" />
        <SkillList src={ellipsisLight} skill="Metasploit" />
        <SkillList src={ellipsisLight} skill="Wireshark" />
        <SkillList src={ellipsisLight} skill="Splunk" />
        <SkillList src={ellipsisLight} skill="Palo Alto" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="pandas" />
        <SkillList src={checkMarkIcon} skill="NumPy" />
        <SkillList src={checkMarkIcon} skill="Matplotlib" />
        <SkillList src={checkMarkIcon} skill="Transformers" />
        <SkillList src={checkMarkIcon} skill="Torch" />
        <SkillList src={checkMarkIcon} skill="Datasets" />
      </div>
    </section>
  );
}

export default Skills;
