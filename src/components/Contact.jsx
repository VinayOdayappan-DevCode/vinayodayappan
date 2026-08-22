"use client";

import styles from "@/styles/Contact.module.css";

import { Mail } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      
      <h2 className={styles.heading}>
        Get In Touch
      </h2>

      <p className={styles.text}>
        Open to opportunities, collaborations, and building impactful products.
      </p>

      <div className={styles.card}>

        {/* EMAIL */}
        <a
          href="mailto:vinayrajuodayappan@gmail.com"
          className={`${styles.button} contact-link`}
        >
          <Mail size={20} />
          <span>Email</span>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/vinayrajuodayappan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} contact-link`}
        >
          <CiLinkedin size={22} />
          <span>LinkedIn</span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/VinayOdayappan-DevCode"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} contact-link`}
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </a>

      </div>
    </section>
  );
}