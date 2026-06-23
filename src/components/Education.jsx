import styles from "@/styles/Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.heading}>Education</h2>

      <div className={styles.timeline}>
        
        <div className={styles.item}>
          <div className={styles.circle}></div>
          <div className={styles.content}>
            <span className={styles.year}>2024 – 2028</span>
            <h3>BS in Data Science and Applications</h3>
            <p>Indian Information of technology Madras</p>
            <span className={styles.tag}>Currently Pursuing</span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.circle}></div>
          <div className={styles.content}>
            <span className={styles.year}>2022 – 2024</span>
            <h3>Higher Secondary Education (11th & 12th Grade)</h3>
            <p>Miraj Mahavidyalaya, Miraj</p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.circle}></div>
          <div className={styles.content}>
            <span className={styles.year}>2011 – 2022</span>
            <h3>Secondary Education (Foundational & 10th Grade)</h3>
            <p>MTDK School, Miraj</p>
          </div>
        </div>

      </div>
    </section>
  );
}