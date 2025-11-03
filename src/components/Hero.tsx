import { Button } from "@/components/ui/button";
import profileImage from "@/assets/image.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden" id="home">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Salom, Men
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Full Stack</span>
                <br />
                Developer
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Zamonaviy veb ilovalar yaratuvchi dasturchi. React, Node.js, TypeScript va boshqa 
                texnologiyalar bilan professional dasturiy ta'minot ishlab chiqaruvchi.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Loyihalarni Ko'rish
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Bog'lanish
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">1.5+</div>
                <div className="text-sm text-muted-foreground">Yillik Tajriba</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">17+</div>
                <div className="text-sm text-muted-foreground">Tugallangan Loyihalar</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Mijozlar Mamnuniyati</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="animate-slide-in-right flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-2 rounded-3xl backdrop-blur-sm">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full max-w-md rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-xl animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-2xl shadow-xl animate-float opacity-80" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
