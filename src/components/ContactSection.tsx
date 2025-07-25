import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 glass-card rounded-full text-secondary font-medium mb-4">
            🤝 Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Ready to Innovate Together?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to collaborate on a project, discuss opportunities, or just want to chat about the future of tech - I'm always excited to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover-glow">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:neelkhot@outlook.com" className="text-secondary hover:text-secondary/80 transition-colors">
                      neelkhot@outlook.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover-glow">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+917158072136" className="text-accent hover:text-accent/80 transition-colors">
                      +91 7158072136
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-semibold text-foreground mb-4">Connect on Social</h4>
                <div className="flex gap-5">
                  <a 
                    href="https://github.com/neelkhot7" 
                    className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-glow group"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/neelkhot" 
                    className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-glow group"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <form className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 glass-card rounded-lg bg-transparent border-white/20 focus:border-secondary focus:outline-none text-foreground placeholder-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 glass-card rounded-lg bg-transparent border-white/20 focus:border-secondary focus:outline-none text-foreground placeholder-muted-foreground"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 glass-card rounded-lg bg-transparent border-white/20 focus:border-secondary focus:outline-none text-foreground placeholder-muted-foreground"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    className="w-full px-4 py-3 glass-card rounded-lg bg-transparent border-white/20 focus:border-secondary focus:outline-none text-foreground placeholder-muted-foreground resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button variant="ai" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
          </div>
        </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Building the Future of Secure Tech
            </h3>
            <p className="text-muted-foreground mb-6">
              Join me in creating innovative solutions that make technology safer, smarter, and more accessible for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="ai" size="lg">
                <Mail className="w-5 h-5" />
                Start a Project
              </Button>
              <Button variant="glass" size="lg">
                <Github className="w-5 h-5" />
                Explore Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
