"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/Hero.module.css";
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Download } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(); // Added to control the overall visibility instantly
  const titleRef = useRef();
  const subtitleRef = useRef();
  const descRef = useRef();
  const buttonsRef = useRef();
  const imageRef = useRef();
  const techRef = useRef();
  const roleRef = useRef();

  useEffect(() => {
    // 1. Instantly make the container visible now that GSAP is ready to take over
    gsap.set(heroRef.current, { opacity: 1 });

    const elements = [
      titleRef.current,
      subtitleRef.current,
      descRef.current,
      imageRef.current,
      techRef.current,
    ];

    // 2. Set up initial animation states
    gsap.set(elements, {
      opacity: 0,
      y: 30,
    });

    if (buttonsRef.current) {
      gsap.set(buttonsRef.current.children, {
        opacity: 0,
        y: 20,
      });
    }

    // 3. Run the timeline smoothly
    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

    if (buttonsRef.current) {
      tl.to(
        buttonsRef.current.children,
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    tl.to(
      imageRef.current,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    ).to(
      techRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "-=0.3"
    );

    // Mouse Move Parallax
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x,
          y,
          duration: 0.5,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Typing Logic
    let roleIndex = 0;
    let typingInterval;
    let timeoutId;

    const roles = [
      "IITM Student",
      "Frontend Developer",
      "Problem Solver",
      "Tech Enthusiast",
    ];

    const typeRole = () => {
      const el = roleRef.current;
      if (!el) return;

      const text = roles[roleIndex];
      let i = 0;

      el.textContent = "";

      typingInterval = setInterval(() => {
        if (!el) return;

        el.textContent = text.slice(0, i);
        i++;

        if (i > text.length) {
          clearInterval(typingInterval);

          timeoutId = setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            typeRole();
          }, 1200);
        }
      }, 50);
    };

    typeRole();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(typingInterval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    /* We start with opacity: 0 inline so the browser renders absolute blankness until GSAP starts */
    <section id="home" ref={heroRef} className={styles.hero} style={{ opacity: 0 }}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.badge}>👋 Hi, I'm</span>

          <h1 ref={titleRef} className={styles.title}>
            Vinay <span className={styles.highlight}>Raju Odayappan</span>
          </h1>

          <h2 ref={subtitleRef} className={styles.subtitle}>
            I am a <span ref={roleRef} className={styles.typing}></span>
          </h2>

          <p ref={descRef} className={styles.description}>
            Frontend Developer focused on building modern, scalable, and high-performance web applications.
            Experienced in developing real-time interfaces, dashboards, and interactive user experiences.
          </p>

          <div className={styles.meta}>
            <span><MapPin /> Sangli, Maharashtra, India</span>
            <span><Mail /> vinayrajuodayappan@gmail.com</span>
          </div>

          <div ref={buttonsRef} className={styles.buttons}>
            <button
              className={styles.gradientBtn}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work <ArrowRight size={16} />
            </button>

            <a href="/CV/Vinay-Resume.pdf" download className={styles.outlineBtn}>
              Download CV <Download size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={imageRef} className={styles.right}>
          <div className={styles.imageCard}>
            <img src="/images/profile.png" alt="https://linkedin.com/in/vinayrajuodayappan" />

            <div ref={techRef} className={styles.techBox}>
              <p>Tech Stack</p>
              <div>
                <span>React</span>
                <span>Next.js</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}