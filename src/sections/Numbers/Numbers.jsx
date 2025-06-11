import styles from './NumbersStyles.module.css';
import NumberCard from '../../common/NumberCard'

function Numbers() {
  return (
    <section id="numbers" className={styles.container}>
      <h1 className="sectionTitle">Numbers</h1>
      <div className={styles.numbersContainer}>
      <NumberCard num="4x" label="Sexton Scholar"/>
        <NumberCard num="10" label="technical certifications"/>
        <NumberCard num="7" label="personal projects"/>
        <NumberCard num="4" label="past employers"/>
      </div>
    </section>
  );
}

export default Numbers;
