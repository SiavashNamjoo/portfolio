import { Code2, Palette, Zap, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  { id: "development", icon: Code2, color: "from-primary to-secondary" },
  { id: "design", icon: Palette, color: "from-secondary to-accent" },
  { id: "performance", icon: Zap, color: "from-accent to-primary" },
  { id: "passion", icon: Heart, color: "from-primary via-secondary to-accent" },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-sm bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t("about.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("about.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl mb-2">{t(`about.skills.${skill.id}.title`)}</h3>
                <p className="text-muted-foreground">{t(`about.skills.${skill.id}.description`)}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed">
              {t("about.bio")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
