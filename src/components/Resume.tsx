import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Toshkent Axborot Texnologiyalari Universiteti",
    period: "2018 - 2022",
    description: "Dasturlash, algoritm va ma'lumotlar tuzilmasi, veb texnologiyalari bo'yicha chuqur bilim olganman.",
  },
  {
    degree: "Full Stack Development Bootcamp",
    school: "Online Coding Academy",
    period: "2022",
    description: "Zamonaviy veb texnologiyalari va eng yaxshi amaliyotlar bo'yicha intensiv ta'lim.",
  },
];

const experience = [
  {
    position: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Hozir",
    description: "Katta miqyosdagi veb ilovalarni ishlab chiqish va jamoa boshqaruvi.",
    achievements: [
      "5+ ta muvaffaqiyatli loyihani yetkazib berish",
      "Kodni optimallashtirish natijasida 40% tezlashish",
      "Junior dasturchilarni mentorligi",
    ],
  },
  {
    position: "Full Stack Developer",
    company: "Digital Agency Pro",
    period: "2022 - 2023",
    description: "Mijozlar uchun turli xil veb ilovalar va saytlar yaratish.",
    achievements: [
      "15+ ta mijoz loyihalarini yakunlash",
      "React va Node.js texnologiyalarini qo'llash",
      "API integratsiyalar va database dizayni",
    ],
  },
  {
    position: "Frontend Developer",
    company: "StartUp Ventures",
    period: "2021 - 2022",
    description: "Foydalanuvchi interfeyslari va responsive dizaynlar yaratish.",
    achievements: [
      "10+ ta landing page yaratish",
      "UI/UX yaxshilash bo'yicha ishlash",
      "Cross-browser muvofiqligi ta'minlash",
    ],
  },
];

const Resume = () => {
  return (
    <section className="py-20 px-4" id="resume">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mening <span className="gradient-text">Rezyumem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ta'lim va ish tajribam haqida ma'lumot
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Ta'lim</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
                  <p className="text-muted-foreground font-medium mb-3">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Ish Tajribasi</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-secondary"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.position}</h4>
                  <p className="text-muted-foreground font-medium mb-3">{item.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="space-y-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
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
