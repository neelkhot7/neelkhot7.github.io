import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Zap, MapPin, Users } from "lucide-react";
import netfortressPreview from "@/assets/netfortress-preview.jpg";
import trixisEnergy from "@/assets/trixis-energy.jpg";

const projects = [
  {
    id: 1,
    title: "NetFortress",
    subtitle: "Secure Browser-Based Operating System",
    description: "Revolutionary web OS with facial biometrics, certificate-based access, and hardened session-level security. Originally built as an authentication demo for the RBI FinTech Department.",
    image: netfortressPreview,
    tech: ["React", "WebAssembly", "Biometrics", "Cryptography"],
    features: ["Facial Recognition", "Certificate Auth", "Secure Sessions", "Web OS"],
    status: "Co-Founder",
    team: ["Neel Khot", "Rahel Pereira", "Prakash Biswas"],
    icon: Shield,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Trixis Energy",
    subtitle: "IoT-Integrated Wind Turbine",
    description: "Vertical axis wind turbine project with advanced IoT integration for smart energy management. Shortlisted for National Pitching Round at UDYAMOTSAV-2025.",
    image: trixisEnergy,
    tech: ["IoT", "Arduino", "Sensors", "Energy Systems"],
    features: ["Smart Monitoring", "Real-time Data", "Energy Optimization", "Remote Control"],
    status: "Shortlisted - National Round",
    team: ["Neel Khot", "Engineering Team"],
    icon: Zap,
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "ClearPath",
    subtitle: "Smart Water & Traffic Management",
    description: "Intelligent system for water management and emergency traffic routing using Google Maps API integration for real-time optimization.",
    image: "/api/placeholder/800/600",
    tech: ["Google Maps API", "Real-time Processing", "Smart Routing"],
    features: ["Water Management", "Traffic Optimization", "Emergency Routing", "API Integration"],
    status: "In Development",
    team: ["Neel Khot", "Development Team"],
    icon: MapPin,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 4,
    title: "SmartMall CRM",
    subtitle: "AI-Powered Customer Recognition",
    description: "Advanced CRM system with facial recognition capabilities for customer tracking and targeted marketing in retail environments.",
    image: "/api/placeholder/800/600", 
    tech: ["Computer Vision", "AI/ML", "CRM", "Analytics"],
    features: ["Facial Recognition", "Customer Analytics", "Targeted Marketing", "Real-time Tracking"],
    status: "Completed",
    team: ["Neel Khot", "AI Team"],
    icon: Users,
    color: "from-purple-500 to-pink-600"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 glass-card rounded-full text-secondary font-medium mb-4">
            🚀 Innovation Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge solutions in cybersecurity, AI/ML, IoT, and more. Each project represents a step towards building the future.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden hover-glow group animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 glass-card rounded-full text-xs font-medium text-secondary">
                      {project.status}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-secondary font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground mb-2">Team:</p>
                    <p className="text-sm text-foreground">{project.team.join(", ")}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="glass" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Button variant="ai" size="lg">
            <Github className="w-5 h-5" />
            Explore All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;