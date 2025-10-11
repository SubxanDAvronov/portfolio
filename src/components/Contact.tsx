import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Bog'lanish</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Loyihangiz bo'yicha gaplashish uchun men bilan bog'laning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">developer@example.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                  <p className="text-muted-foreground">+998 90 123 45 67</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Manzil</h3>
                  <p className="text-muted-foreground">Toshkent, O'zbekiston</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Ijtimoiy Tarmoqlar</h3>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter", "Telegram"].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    {social}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-slide-in-right">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ismingiz</label>
                <Input
                  placeholder="Ismingizni kiriting"
                  className="border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  className="border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Xabar</label>
                <Textarea
                  placeholder="Xabaringizni yozing..."
                  rows={6}
                  className="border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Xabar Yuborish
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
