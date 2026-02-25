import React from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-sm bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            {t("hero.title")}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white hover:opacity-90 transition-opacity"
          >
            {t("hero.cta")}
          </button>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-muted-foreground" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
