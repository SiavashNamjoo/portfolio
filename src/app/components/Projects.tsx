import React from "react";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

export const projectsData = [
  {
    id: "modern-web",
    image: "../Img/Parsinoo.png",
    tags: ["Wordpress", "Elementor"],
    gradient: "from-primary/80 to-secondary/80",
    url: "https://Parsinoo.ir",
    repo: "#",
  },
  {
    id: "mobile-app",
    image: "../Img/esfahanplast.png",
    tags: ["Wordpress", "Elementor"],
    gradient: "from-secondary/80 to-accent/80",
    url: "https://esfahanplast.com",
    repo: "#",
  },
  {
    id: "design-system",
    image: "../Img/alafamasia.png",
    tags: ["tailwind", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    gradient: "from-accent/80 to-primary/80",
    url: "https://alafamasiacompany.ir",
    repo: "#",
  },
  {
    id: "tech-hub",
    image: "../Img/cobel.png",
    tags: ["Wordpress", "Elementor"],
    gradient: "from-primary/80 via-accent/80 to-secondary/80",
    url: "https://cobelcafe.ir",
    repo: "#",
  },
  {
    id: "dev-platform",
    image: "",
    tags: ["PHP", "Laravel", "JavaScript", "CSS"],
    gradient: "from-secondary/80 to-primary/80",
    url: "#",
    repo: "https://github.com/SiavashNamjoo/Control-management",
  },
  {
    id: "ai-app",
    image: "",
    tags: ["Python", "Node.js"],
    gradient: "from-accent/80 to-secondary/80",
    url: "#",
    repo: "https://github.com/SiavashNamjoo/webscrapper",
  },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-sm bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t("projects.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={t(`projects.items.${project.id}.title`)}
              description={t(`projects.items.${project.id}.description`)}
              image={project.image}
              tags={project.tags}
              gradient={project.gradient}
              url={project.url}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
