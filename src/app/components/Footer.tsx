import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
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
            Made with <Heart size={16} className="text-secondary fill-secondary" /> by Your Name
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
