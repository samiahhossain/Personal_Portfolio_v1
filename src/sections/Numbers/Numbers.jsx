import styles from './NumbersStyles.module.css';
import NumberCard from '../../common/NumberCard'

function Numbers() {
  return (
    <section id="numbers" className={styles.container}>
      <h1 className="sectionTitle">Numbers</h1>
      <div className={styles.numbersContainer}>
      <NumberCard num="3x" label="Sexton Scholar"/>
        <NumberCard num="8" label="technical certifications"/>
        <NumberCard num="5" label="personal projects"/>
      </div>
    </section>
  );
}

export default Numbers;
