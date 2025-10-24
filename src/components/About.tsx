import { Card } from "@/components/ui/card";
import { Award, BookOpen, Code2, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Toza va tushunarli kod yozish",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Rocket,
    title: "Fast Development",
    description: "Tez va samarali ishlab chiqish",
    gradient: "from-secondary to-accent",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Doimiy o'rganish va rivojlanish",
    gradient: "from-accent to-primary",
  },
  {
    icon: Award,
    title: "Quality Focus",
    description: "Sifatga e'tibor qaratish",
    gradient: "from-primary to-accent",
  },
];

const About = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="about">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Men <span className="gradient-text">Haqimda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zamonaviy texnologiyalar bilan ishlashni yaxshi ko'radigan Full Stack Developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Men haqimda qisqacha</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Men zamonaviy veb texnologiyalari bilan ishlaydigan Full Stack Developer man. 
                  1.5+ yillik tajribaga ega bo'lib, ko'plab muvaffaqiyatli loyihalarni amalga oshirganman.
                </p>
                <p>
                  Frontend va Backend texnologiyalarida chuqur bilimga egaman. React, TypeScript, 
                  Node.js, PostgreSQL va boshqa zamonaviy texnologiyalar bilan professional 
                  darajada loyihalar qilaman.
                </p>
                <p>
                  Har bir loyihaga kreativ va texnik mukammallik bilan yondashaman. 
                  Mijozlarning ehtiyojlarini tushunish va ularga eng yaxshi yechimlarni taqdim 
                  etish mening asosiy maqsadim.
                </p>
              </div>
            </Card>
          </div>

          {/* Right side - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-border hover:border-primary/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up">
          {[
            { value: "50+", label: "Loyihalar" },
            { value: "30+", label: "Mijozlar" },
            { value: "3+", label: "Yillik Tajriba" },
            { value: "100%", label: "Mamnuniyat" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
