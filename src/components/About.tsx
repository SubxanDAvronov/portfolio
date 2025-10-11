import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: "solar:code-2-bold-duotone",
      title: "Clean Code",
      gradient: "from-primary to-secondary",
    },
    {
      icon: "solar:rocket-2-bold-duotone",
      title: "Fast Development",
      gradient: "from-secondary to-accent",
    },
    {
      icon: "solar:book-bold-duotone",
      title: "Continuous Learning",
      gradient: "from-accent to-primary",
    },
    {
      icon: "solar:medal-star-bold-duotone",
      title: "Quality Focus",
      gradient: "from-primary to-accent",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="about">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="solar:user-speak-bold-duotone" width={32} height={32} className="text-primary" />
                <h3 className="text-2xl font-bold gradient-text">{t('about.intro')}</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.description')}</p>
                <p>{t('about.passion')}</p>
              </div>
              <Button className="mt-6 gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon icon="solar:download-bold" width={20} height={20} />
                {t('about.downloadCV')}
              </Button>
            </Card>
          </div>

          {/* Right side - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={item.icon} width={32} height={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
