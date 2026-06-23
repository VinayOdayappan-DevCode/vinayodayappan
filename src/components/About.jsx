"use client";

import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>

      <div className={styles.card}>
        <p className={styles.text}>
          I’m a <span>Frontend Developer</span> focused on building modern, scalable, and 
          high-performance web applications. I enjoy developing real-time systems, dashboards, 
          and interactive interfaces that solve real-world problems.
        </p>

        <p className={styles.text}>
          Currently pursuing a <span>BS in Data Science</span> at <span>IIT Madras</span>, 
          I actively build projects involving real-time data, AI integrations, and scalable 
          frontend architectures.
        </p>
      </div>
    </section>
  );
}