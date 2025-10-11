const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-muted/20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold gradient-text">Full Stack Developer</h3>
          <p className="text-muted-foreground">
            Zamonaviy va professional veb ilovalar yaratish
          </p>
          <div className="flex justify-center gap-6 pt-4">
            {["GitHub", "LinkedIn", "Twitter", "Telegram"].map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                {social}
              </a>
            ))}
          </div>
          <div className="pt-8 text-sm text-muted-foreground">
            © 2024 Full Stack Developer. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
