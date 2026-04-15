import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AchievementsSection from "../components/AchievementsSection";
import CertificatesSection from "../components/CertificatesSection";
import CodingPracticeSection from "../components/CodingPracticeSection";
import EducationSection from "../components/EducationSection";
import HeroSection from "../components/HeroSection";
import InternshipSection from "../components/InternshipSection";
import LinkedInSection from "../components/LinkedInSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import Sidebar from "../components/Sidebar";
import SkillsSection from "../components/SkillsSection";
import portfolioData from "../data/portfolioData.json";

const navLinks = [
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Coding Practice", href: "#coding-practice" },
  { label: "Internship", href: "#internship" }
];

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    window.localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-mesh-light transition-colors duration-300 dark:bg-mesh-dark">
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((current) => !current)}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        links={navLinks}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-14 pt-24 sm:px-6">
        <HeroSection profile={portfolioData.profile} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid gap-8"
        >
          <EducationSection education={portfolioData.education} />
          <SkillsSection categories={portfolioData.skillCategories} />
          <ProjectsSection projects={portfolioData.projects} />
          <CertificatesSection certificates={portfolioData.certificates} />
          <AchievementsSection achievements={portfolioData.achievements} />
          <LinkedInSection profile={portfolioData.profile} />
          <CodingPracticeSection codingPractice={portfolioData.codingPractice} />
          <InternshipSection internship={portfolioData.internship} />
        </motion.div>
      </main>
    </div>
  );
}

export default HomePage;
