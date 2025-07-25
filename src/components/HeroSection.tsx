import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import neelAvatar from "@/assets/neel-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="AI Tech Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-animated opacity-40" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary rounded-full animate-pulse-glow float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* AI Avatar */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden glass-card p-1 animate-pulse-glow">
              <img 
                src={neelAvatar} 
                alt="Neel Khot" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-bounce">
              <div className="w-3 h-3 bg-accent-foreground rounded-full" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 glass-card rounded-full text-secondary font-medium mb-4">
              🤖 AI-Powered Portfolio Experience
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold glow-text">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Neel Khot
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              Computer Engineering Student & 
              <span className="text-accent font-semibold"> AI Innovator</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Co-founder of <span className="text-secondary font-semibold">NetFortress</span> • 
              Building the future of secure, AI-powered digital experiences
            </p>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>Third Year @ Fr. Conceicao Rodrigues College of Engineering, Bandra</p>
              <p>Specializing in Cybersecurity, AI/ML, IoT & Embedded Systems</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Button variant="ai" size="lg" className="group">
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              Ask AI About Me
            </Button>
            <Button variant="glass" size="lg">
              <Github className="w-5 h-5" />
              View Projects
            </Button>
            <Button variant="glow" size="lg">
              <Mail className="w-5 h-5" />
              Let's Connect
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a href="mailto:neelkhot@outlook.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              neelkhot@outlook.com
            </a>
            <a href="tel:+917158072136" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              +91 7158072136
            </a>
            <a href="https://github.com/neelkhot" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Github className="w-4 h-4" />
              neelkhot
            </a>
            <a href="https://linkedin.com/in/neelkhot" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Linkedin className="w-4 h-4" />
              neelkhot
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;