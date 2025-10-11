import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.ecommerce'),
      description: t('projects.ecommerceDesc'),
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-primary to-secondary",
      icon: "solar:shop-2-bold-duotone",
    },
    {
      title: t('projects.dashboard'),
      description: t('projects.dashboardDesc'),
      tags: ["TypeScript", "React", "PostgreSQL", "Charts"],
      gradient: "from-secondary to-accent",
      icon: "solar:chart-2-bold-duotone",
    },
    {
      title: t('projects.social'),
      description: t('projects.socialDesc'),
      tags: ["React", "WebSocket", "Express", "Redis"],
      gradient: "from-accent to-primary",
      icon: "solar:chat-dots-bold-duotone",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="projects">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} p-4 flex items-center justify-center mb-4`}>
                  <Icon icon={project.icon} width={32} height={32} className="text-white" />
                </div>
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
                    className="flex-1 group-hover:border-primary transition-colors duration-300 gap-2"
                  >
                    <Icon icon="mdi:github" width={18} height={18} />
                    {t('projects.sourceCode')}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white gap-2"
                  >
                    <Icon icon="solar:eye-bold" width={18} height={18} />
                    {t('projects.viewProject')}
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
