"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         SECTION REVEAL
      ===================================================== */

      const sections = [
        "#about",
        "#projects",
        "#skills",
        "#education",
        "#languages",
        "#contact",
        "#footer",
      ];

      sections.forEach((selector) => {
        const section = document.querySelector(selector);

        if (!section) return;

        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =====================================================
         SECTION HEADINGS
      ===================================================== */

      gsap.utils.toArray("section h2").forEach((heading) => {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =====================================================
         PROJECT CARDS
      ===================================================== */

      gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =====================================================
         SKILL CARDS
      ===================================================== */

      gsap.utils.toArray(".skill-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =====================================================
         EDUCATION TIMELINE
      ===================================================== */

      gsap.utils.toArray(".timeline-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =====================================================
         LANGUAGE TAGS
      ===================================================== */

      gsap.fromTo(
        ".language-tag",
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: "#languages",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =====================================================
         CONTACT LINKS
      ===================================================== */

      gsap.fromTo(
        ".contact-link",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =====================================================
         FOOTER
      ===================================================== */

      const footer = document.querySelector("#footer");

      if (footer) {
        gsap.fromTo(
          footer,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      /* =====================================================
         REFRESH SCROLLTRIGGER
      ===================================================== */

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}