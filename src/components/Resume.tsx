import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Resume = () => {
  const { t } = useTranslation();

  const education = [
    {
      period: "2018 - 2022",
      icon: "solar:diploma-bold-duotone"
    },
    {
      period: "2022",
      icon: "solar:code-circle-bold-duotone"
    },
  ];

  const experience = [
    {
      period: "2023 - " + new Date().getFullYear(),
      icon: "solar:star-bold-duotone"
    },
    {
      period: "2022 - 2023",
      icon: "solar:widget-2-bold-duotone"
    },
    {
      period: "2021 - 2022",
      icon: "solar:programming-bold-duotone"
    },
  ];

  return (
    <section className="py-20 px-4" id="resume">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t('resume.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('resume.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon icon="solar:graduation-bold" width={24} height={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">{t('resume.education')}</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon icon="solar:calendar-bold-duotone" width={20} height={20} className="text-primary mt-1" />
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon={item.icon} width={24} height={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        {index === 0 ? t('resume.university') : t('resume.courses')}
                      </h4>
                      <p className="text-muted-foreground font-medium mb-3">
                        {index === 0 ? t('resume.degree') : t('resume.webDev')}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Icon icon="solar:case-round-bold" width={24} height={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">{t('resume.experience')}</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-secondary"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon icon="solar:calendar-bold-duotone" width={20} height={20} className="text-secondary mt-1" />
                    <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon={item.icon} width={24} height={24} className="text-secondary mt-1" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        {index === 0 ? t('resume.senior') : index === 1 ? t('resume.fullstack') : t('resume.frontend')}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 ? t('resume.seniorDesc') : index === 1 ? t('resume.fullstackDesc') : t('resume.frontendDesc')}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
