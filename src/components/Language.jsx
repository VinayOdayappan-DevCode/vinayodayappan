"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/Language.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Language({ languages }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll(`.${styles.card}`);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        `.${styles.heading}`,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Language cards animation
      gsap.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const emojiPool = ["அ", "A", "अ", "अ"];

  return (
    <section
      id="languages"
      ref={sectionRef}
      className={styles.languages}
    >
      <h2 className={styles.heading}>Languages Known</h2>

      <div className={styles.grid}>
        {languages?.map((lang, index) => {
          const cardEmoji =
            lang.emoji ||
            emojiPool[index % emojiPool.length];

          return (
            <div
              key={index}
              className={styles.card}
              data-emoji={cardEmoji}
            >
              <span className={styles.name}>
                {lang.name}
              </span>

              <span className={styles.level}>
                {lang.level}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}