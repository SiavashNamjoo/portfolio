import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <Twitter size={20} />
            </a>
          </div>

          <p className="text-muted-foreground flex items-center gap-2">
            {t("footer.madeWith")} <Heart size={16} className="text-secondary fill-secondary" /> {t("footer.byName")}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
