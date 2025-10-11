import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, Server, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Express, REST API",
    color: "from-secondary to-accent",
  },
  {
    icon: Database,
    title: "Database",
    description: "PostgreSQL, MongoDB, Redis",
    color: "from-accent to-primary",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first, Cross-browser",
    color: "from-primary to-secondary",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, Caching, CDN",
    color: "from-secondary to-primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Animations",
    color: "from-accent to-secondary",
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mening <span className="gradient-text">Ko'nikmalarim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zamonaviy texnologiyalar bilan professional dasturiy ta'minot yaratish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group p-6 bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
