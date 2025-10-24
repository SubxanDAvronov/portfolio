import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Footer = () => {
  const { t } = useTranslation();

  const socials = [
    { name: "GitHub", icon: "mdi:github", url: "https://github.com/SubxanDAvronov" },
    { name: "LinkedIn", icon: "mdi:linkedin", url: "https://www.linkedin.com/in/subxoniddin-davronov-864775394/" },
    { name: "Twitter", icon: "mdi:twitter", url: "https://x.com/Davronov2206" },
    { name: "Telegram", icon: "ic:baseline-telegram", url: "https://t.me/Davronov_01s" },
  ];

  return (
    <footer className="py-12 px-4 border-t border-border bg-muted/20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Icon icon="solar:code-square-bold-duotone" width={32} height={32} className="text-primary" />
            <h3 className="text-2xl font-bold gradient-text">{t('footer.title')}</h3>
          </div>
          <p className="text-muted-foreground">
            {t('footer.description')}
          </p>
          <div className="flex justify-center gap-4 pt-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 rounded-lg border border-border hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <Icon icon={social.icon} width={20} height={20} />
              </a>
            ))}
          </div>
          <div className="pt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t('footer.title')}. {t('footer.rights')}.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
