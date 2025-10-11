import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "To'liq funksional onlayn do'kon tizimi React va Node.js bilan",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics va user management dashboard",
    tags: ["TypeScript", "React", "PostgreSQL", "WebSocket"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "AI Chat Application",
    description: "Sun'iy intellekt integratsiyalangan chat ilovasi",
    tags: ["React", "OpenAI", "Express", "Redis"],
    gradient: "from-accent to-primary",
  },
  {
    title: "Task Management System",
    description: "Jamoalar uchun vazifalarni boshqarish platformasi",
    tags: ["React", "Supabase", "Tailwind", "TypeScript"],
    gradient: "from-primary to-accent",
  },
  {
    title: "Real Estate Website",
    description: "Ko'chmas mulk qidirish va bron qilish tizimi",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Maps API"],
    gradient: "from-secondary to-primary",
  },
  {
    title: "Learning Management System",
    description: "Onlayn ta'lim platformasi video kurslari bilan",
    tags: ["React", "Node.js", "AWS S3", "MongoDB"],
    gradient: "from-accent to-secondary",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="projects">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mening <span className="gradient-text">Loyihalarim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Muvaffaqiyatli amalga oshirilgan loyihalarning ba'zilari
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group-hover:border-primary transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
