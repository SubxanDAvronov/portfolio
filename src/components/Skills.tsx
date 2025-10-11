import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: "solar:programming-bold-duotone",
      title: t('skills.frontend'),
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
      color: "from-primary to-primary-glow",
    },
    {
      icon: "solar:server-bold-duotone",
      title: t('skills.backend'),
      skills: ["Node.js", "Express", "REST API", "GraphQL", "Microservices"],
      color: "from-secondary to-accent",
    },
    {
      icon: "solar:database-bold-duotone",
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
      color: "from-accent to-primary",
    },
    {
      icon: "solar:smartphone-2-bold-duotone",
      title: "Mobile & UI",
      skills: ["Responsive Design", "PWA", "Figma", "Animations"],
      color: "from-primary to-secondary",
    },
    {
      icon: "solar:devices-bold-duotone",
      title: t('skills.tools'),
      skills: ["Git", "Docker", "VS Code", "Linux", "CI/CD"],
      color: "from-secondary to-primary",
    },
    {
      icon: "solar:user-hands-bold-duotone",
      title: t('skills.soft'),
      skills: ["Communication", "Problem Solving", "Team Work", "Leadership"],
      color: "from-accent to-secondary",
    },
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group p-6 bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={category.icon} width={32} height={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-muted/50 rounded-full text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
