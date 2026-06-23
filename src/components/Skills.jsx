"use client";

import styles from "@/styles/Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <h3 className={styles.title}>Frontend</h3>
          <div className={styles.tags}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Next.js</span>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.title}>Backend</h3>
          <div className={styles.tags}>
            <span>Firebase</span>
            <span>Auth</span>
            <span>Firestore</span>
            <span>Realtime DB</span>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.title}>Tools</h3>
          <div className={styles.tags}>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>

      </div>
    </section>
  );
}