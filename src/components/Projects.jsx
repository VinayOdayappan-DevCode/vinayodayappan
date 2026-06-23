import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "@/styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}