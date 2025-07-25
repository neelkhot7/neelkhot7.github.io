import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              © 2025 Neel Khot. Built with React, TypeScript, and a passion for innovation.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <div className="text-xs text-muted-foreground">
                🛡️ Secured by NetFortress Technology
              </div>
              <div className="text-xs text-muted-foreground">
                🤖 Powered by AI
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
