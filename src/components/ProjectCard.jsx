import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import styles from "@/styles/Projects.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={project.image} 
          alt={`${project.title} screenshot`}
          width={500} // Adjust based on your design max width
          height={200} // Matches your CSS height
          className={styles.image}
          priority={false}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {project.features && project.features.length > 0 && (
          <ul className={styles.features}>
            {project.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <div className={styles.tech}>
          {project.tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className={styles.actions}>
          {project.View && (
            <a 
              href={project.View} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.primary}
            >
              View <ArrowRight size={16} />
            </a>
          )}

        </div>
      </div>
    </div>
  );
}