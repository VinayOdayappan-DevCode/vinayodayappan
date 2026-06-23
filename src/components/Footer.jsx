import styles from "@/styles/Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { Mail } from 'lucide-react';
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.logo}>V. Vinay</span>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Vinay | Made with ❤️ By Vinay
          </p>
        </div>

        {/* RIGHT SOCIALS */}
        <div className={styles.socials}>
          <a href="https://github.com/VinayOdayappan-DevCode" target="_blank">
            <FaGithub size={18} />
          </a>

          <a href="https://linkedin.com/in/vinayrajuodayappan" target="_blank">
            <CiLinkedin size={18} />
          </a>

          <a href="mailto:vinayrajuodayappan@gmail.com">
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}