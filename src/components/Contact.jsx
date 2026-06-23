"use client";

import styles from "@/styles/Contact.module.css";
import { Mail } from 'lucide-react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Get In Touch</h2>

      <p className={styles.text}>
        Open to opportunities, collaborations, and building impactful products.
      </p>

      <div className={styles.card}>
        <a href="mailto:vinayrajuodayappan@gmail.com" className={styles.button}>
          <Mail size={20} /> Email
        </a>

        <a
          href="https://linkedin.com/in/vinayrajuodayappan"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <CiLinkedin size={22} /> LinkedIn
        </a>

        <a
          href="https://github.com/VinayOdayappan-DevCode"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <FaGithub size={20} /> GitHub
        </a>
      </div>
    </section>
  );
}