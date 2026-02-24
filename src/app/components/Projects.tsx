import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

export const projectsData = [
  {
    id: "modern-web",
    image:
      "https://images.unsplash.com/photo-1764601842171-3d6fba7c3830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxODc1NjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    gradient: "from-primary/80 to-secondary/80",
    url: "#",
    repo: "#",
  },
  {
    id: "mobile-app",
    image:
      "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzE5MjM5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Firebase", "UI/UX"],
    gradient: "from-secondary/80 to-accent/80",
    url: "#",
    repo: "#",
  },
  {
    id: "design-system",
    image:
      "https://images.unsplash.com/photo-1756723903184-32fed816ea5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MTkyMTcyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "Design Tokens", "Documentation"],
    gradient: "from-accent/80 to-primary/80",
    url: "#",
    repo: "#",
  },
  {
    id: "tech-hub",
    image:
      "https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxOTIzNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-primary/80 via-accent/80 to-secondary/80",
    url: "#",
    repo: "#",
  },
  {
    id: "dev-platform",
    image:
      "https://images.unsplash.com/photo-1672385245363-f4e7ed05a63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3MTkzMDYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["WebSockets", "Redis", "Docker"],
    gradient: "from-secondary/80 to-primary/80",
    url: "#",
    repo: "#",
  },
  {
    id: "ai-app",
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE5MjA4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "TensorFlow", "REST API"],
    gradient: "from-accent/80 to-secondary/80",
    url: "#",
    repo: "#",
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
