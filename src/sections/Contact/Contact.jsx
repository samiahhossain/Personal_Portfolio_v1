import styles from './ContactStyles.module.css';
import emailLight from '../../assets/email-light.png';
import emailDark from '../../assets/email-dark.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme } = useTheme();
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactContainer}>
        <a href="https://linkedin.com/in/samiahh">
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
        <p>Connect and/or chat with me on LinkedIn!</p>
        <a href="mailto:samiah.hossain@dal.ca">
          <img src={emailIcon} alt="email icon" className={styles.email} />
        </a>
        <p>Email me at samiah.hossain@dal.ca.</p>
      </div>
    </section>
  );
}

export default Contact;
