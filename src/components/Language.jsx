"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/Language.module.css";

export default function Language({ languages }) {
  const sectionRef = useRef();

  useEffect(() => {
    // Selected .card elements specifically so the heading doesn't break the stagger flow
    const cards = sectionRef.current.querySelectorAll(`.${styles.card}`);
    
    gsap.from(cards, {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  // Backup emoji pool in case the language data object does not have an emoji property
  const emojiPool = ["அ", "A", "अ", "अ"];

  return (
    <section ref={sectionRef} className={styles.languages}>
      <h2 className={styles.heading}>Languages Known</h2>

      <div className={styles.grid}>
        {languages.map((lang, index) => {
          // Fallback to pool if lang.emoji doesn't exist
          const cardEmoji = lang.emoji || emojiPool[index % emojiPool.length];
          
          return (
            <div 
              key={index} 
              className={styles.card}
              data-emoji={cardEmoji} /* Injects dynamic emoji to CSS */
            >
              <span className={styles.name}>{lang.name}</span>
              <span className={styles.level}>{lang.level}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}