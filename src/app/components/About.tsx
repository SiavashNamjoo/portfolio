import { Code2, Palette, Zap, Heart } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Building robust and scalable applications with modern technologies and best practices.",
    color: "from-primary to-secondary",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful and intuitive interfaces that users love to interact with.",
    color: "from-secondary to-accent",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency to deliver the best user experience.",
    color: "from-accent to-primary",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to continuous learning and delivering high-quality solutions that make an impact.",
    color: "from-primary via-secondary to-accent",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-sm bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What I Do Best
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with creative vision to build exceptional digital products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate developer and designer with expertise in creating digital experiences that combine 
              aesthetic appeal with functional excellence. With a focus on modern web technologies and user-centric design, 
              I strive to build solutions that not only meet but exceed expectations. Every project is an opportunity 
              to push boundaries and create something remarkable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
