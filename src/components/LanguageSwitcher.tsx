import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'uz', name: "O'zbek", flag: 'circle-flags:uz' },
    { code: 'ru', name: 'Русский', flag: 'circle-flags:ru' },
    { code: 'en', name: 'English', flag: 'circle-flags:us' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Icon icon={currentLanguage.flag} width={20} height={20} />
          {currentLanguage.name}
          <Icon icon="solar:alt-arrow-down-bold" width={16} height={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="gap-2 cursor-pointer"
          >
            <Icon icon={lang.flag} width={20} height={20} />
            {lang.name}
            {i18n.language === lang.code && (
              <Icon icon="solar:check-circle-bold" width={16} height={16} className="ml-auto text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
