import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'Vinay Raju Odayappan | Personal Portfolio',
  description: "Welcome to Vinay's portfolio website. Explore my latest projects, skills, and web development work.",
  keywords: ['Vinay Raju Odayappan', 'Frontend Developer', 'Web Developer', 'React', 'Next.js', 'Portfolio'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}