import { Button } from "@/components/ui/button";
import { Shield, Brain, Cog, Zap, Award, Users } from "lucide-react";

const skills = [
  {
    category: "Cybersecurity",
    icon: Shield,
    color: "from-red-500 to-pink-600",
    items: ["Biometric Authentication", "Session Security", "Certificate Management", "Cryptography"]
  },
  {
    category: "AI/ML",
    icon: Brain,
    color: "from-purple-500 to-blue-600", 
    items: ["Computer Vision", "Facial Recognition", "Machine Learning", "Neural Networks"]
  },
  {
    category: "Development",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    items: ["Full-stack Development", "React/Next.js", "API Integration", "Database Design"]
  }
];

const achievements = [
  {
    title: "Co-founder of NetFortress",
    description: "Revolutionary secure browser-based OS with biometric authentication",
    icon: Shield,
    year: "2024"
  },
  {
    title: "RBI FinTech Department Demo",
    description: "Showcased authentication system to Reserve Bank of India",
    icon: Users,
    year: "2024"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 glass-card rounded-full text-secondary font-medium mb-4">
            🧠 About Neel
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Building Tomorrow's Tech
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a final-year Computer Engineering student passionate about creating secure, AI-powered solutions that solve real-world problems. From cybersecurity to IoT, I bridge the gap between cutting-edge research and practical applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Story Section */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey began with a fascination for how technology can create safer, smarter digital experiences. This led me to co-found <span className="text-secondary font-semibold">NetFortress</span>, where we're revolutionizing browser security with biometric authentication and session-level protection.
                </p>
                
                <p>
                  What started as an authentication demo for the <span className="text-accent font-semibold">RBI FinTech Department</span> has evolved into a full-scale secure operating system. I believe the future of computing lies in seamless security that doesn't compromise user experience.
                </p>
                
                <p>
                  Beyond cybersecurity, I'm exploring the intersection of <span className="text-secondary font-semibold">AI/ML and IoT</span> through projects like Trixis Energy, creating intelligent systems that can adapt and optimize in real-time.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="font-semibold text-foreground mb-3">Current Focus Areas:</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm text-muted-foreground">• Secure Authentication Systems</div>
                  <div className="text-sm text-muted-foreground">• AI-Powered Analytics</div>
                  <div className="text-sm text-muted-foreground">• IoT Integration</div>
                  <div className="text-sm text-muted-foreground">• Startup Innovation</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Key Achievements</h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 glass-card rounded-lg">
                      <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <span className="text-xs text-secondary font-medium px-2 py-1 glass-card rounded">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Technical Expertise</h3>
              
              <div className="grid gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="glass-card p-6 rounded-xl hover-glow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">{skill.category}</h4>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {skill.items.map((item, i) => (
                          <div key={i} className="text-sm text-muted-foreground bg-white/5 px-3 py-2 rounded-lg">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education & Contact CTA */}
            <div className="glass-card p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-4 text-foreground">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground mb-6">
                Always excited to collaborate on innovative projects and discuss new opportunities in tech.
              </p>
              
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">Fr. Conceicao Rodrigues College of Engineering</p>
                  <p>Computer Engineering • Final Year</p>
                  <p>Bandra, Mumbai</p>
                </div>
                
                <Button variant="ai" size="lg" className="w-full">
                  <Users className="w-5 h-5" />
                  Schedule a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
