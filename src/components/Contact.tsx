import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Contact = () => {
  const { t } = useTranslation();

  const socials = [
    { name: "GitHub", icon: "mdi:github", url: "https://github.com/SubxanDAvronov", color: "hover:text-[#333]" },
    { name: "LinkedIn", icon: "mdi:linkedin", url: "https://www.linkedin.com/in/subxoniddin-davronov-864775394/", color: "hover:text-[#0077b5]" },
    { name: "Twitter", icon: "mdi:twitter", url: "https://x.com/Davronov2206", color: "hover:text-[#1DA1F2]" },
    { name: "Telegram", icon: "ic:baseline-telegram", url: "https://t.me/Davronov_01s", color: "hover:text-[#0088cc]" },
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:letter-bold" width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.email')}</h3>
                  <a href="http://little.picasso.01S@gmail.com"><p className="text-muted-foreground">little.picasso.01s@gmail.com</p></a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:phone-bold" width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.phone')}</h3>
                  <p className="text-muted-foreground">+998 90 744 06 22</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:map-point-bold" width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.address')}</h3>
                  <p className="text-muted-foreground">{t('contact.location')}</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold text-lg mb-4">{t('contact.social')}</h3>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 rounded-xl border border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <Icon icon={social.icon} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-slide-in-right">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Icon icon="solar:user-bold" width={18} height={18} />
                  {t('contact.name')}
                </label>
                <Input
                  placeholder={t('contact.namePlaceholder')}
                  className="border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Icon icon="solar:letter-bold" width={18} height={18} />
                  {t('contact.emailLabel')}
                </label>
                <Input
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  className="border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Icon icon="solar:document-text-bold" width={18} height={18} />
                  {t('contact.message')}
                </label>
                <Textarea
                  placeholder={t('contact.messagePlaceholder')}
                  rows={6}
                  className="border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
              >
                <Icon icon="solar:plain-3-bold" width={20} height={20} />
                {t('contact.send')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
