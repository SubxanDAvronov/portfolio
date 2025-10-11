import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'uz', name: 'UZ', flag: 'circle-flags:uz' },
    { code: 'ru', name: 'RU', flag: 'circle-flags:ru' },
    { code: 'en', name: 'EN', flag: 'circle-flags:us' }
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => i18n.changeLanguage(lang.code)}
          className="gap-2 transition-all duration-300 hover:scale-105"
        >
          <Icon icon={lang.flag} width={20} height={20} />
          {lang.name}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
