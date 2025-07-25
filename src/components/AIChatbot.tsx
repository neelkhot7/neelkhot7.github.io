import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Mic, Bot } from "lucide-react";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "Hi! I'm Neel's AI assistant. Ask me anything about his projects, skills, or experiences! 🤖",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const predefinedQuestions = [
    "What's NetFortress?",
    "Tell me about Neel's skills",
    "Show me his recent projects",
    "What's his experience with AI/ML?",
    "How can I contact Neel?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const newUserMessage = {
      type: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    // Simulate AI response
    const aiResponse = {
      type: "ai", 
      content: getAIResponse(inputMessage),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage, aiResponse]);
    setInputMessage("");
  };

  const getAIResponse = (question: string) => {
    const q = question.toLowerCase();
    
    if (q.includes("netfortress")) {
      return "NetFortress is Neel's flagship project - a secure, browser-based operating system! 🛡️ It features facial biometrics, certificate-based access, and hardened session-level security. Originally built as an authentication demo for the RBI FinTech Department, it's now evolved into a full Web OS. Neel co-founded this with Rahel Pereira and Prakash Biswas.";
    }
    
    if (q.includes("skills") || q.includes("tech")) {
      return "Neel is a tech polymath! 🚀 His expertise spans:\n• Cybersecurity & Authentication Systems\n• AI/ML & Computer Vision\n• IoT & Embedded Systems\n• Full-stack Development\n• Blockchain & Cryptography\n\nHe's particularly passionate about building secure, AI-powered solutions for real-world problems.";
    }
    
    if (q.includes("projects")) {
      return "Neel has some amazing projects! 🎯\n\n🛡️ NetFortress - Secure Web OS\n⚡ Trixis Energy - IoT Wind Turbine (National Round shortlisted!)\n🗺️ ClearPath\n👥 SmartMall CRM \nEach project showcases his ability to apply cutting-edge tech to solve real problems!";
    }
    
    if (q.includes("ai") || q.includes("ml") || q.includes("machine learning")) {
      return "Neel is deeply passionate about AI/ML! 🧠 He's implemented:\n• Computer Vision for facial recognition in NetFortress\n• SmartMall CRM\n• ClearPath\n\nHe's always exploring the latest in AI to build smarter, more intuitive systems.";
    }
    
    if (q.includes("contact") || q.includes("reach")) {
      return "Ready to connect with Neel? 📧\n\n📧 Email: neelkhot@outlook.com\n📱 Phone: +91 7158072136\n💻 GitHub: github.com/neelkhot7\n💼 LinkedIn: linkedin.com/in/neelkhot\n\nHe's always excited to discuss new opportunities and collaborations!";
    }
    
    if (q.includes("education") || q.includes("college")) {
      return "Neel is currently a Final Year Computer Engineering student at Fr. Conceicao Rodrigues College of Engineering in Bandra! 🎓 He's been applying his classroom knowledge to real-world projects and startups, bridging the gap between theory and practice.";
    }
    
    return "That's a great question! 🤔 I'm trained on Neel's portfolio data, but I might not have all the details you're looking for. Feel free to reach out to Neel directly at neelkhot@outlook.com for more specific information, or try asking about his projects, skills, or experiences!";
  };

  const handleQuestionClick = (question: string) => {
    setInputMessage(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            variant="ai"
            size="lg"
            className="rounded-full w-16 h-16 shadow-2xl hover:shadow-secondary/50 animate-pulse-glow"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </div>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] z-50 glass-card rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-secondary to-accent p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Neel's AI Assistant</h3>
                <p className="text-xs text-white/80">Ask me anything!</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto h-[400px] bg-background/50">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'glass-card text-foreground'
                  }`}
                >
                  {message.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-secondary" />
                      <span className="text-xs text-secondary font-medium">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-white/10">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="space-y-2">
                {predefinedQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full text-left p-2 glass-card rounded-lg text-xs hover:bg-white/10 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="p-4 border-t border-white/10 bg-background/80">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me about Neel..."
                className="flex-1 px-3 py-2 glass-card rounded-lg text-sm bg-transparent border-white/20 focus:border-secondary focus:outline-none"
              />
              <Button onClick={() => {}} variant="ghost" size="sm">
                <Mic className="w-4 h-4" />
              </Button>
              <Button onClick={handleSendMessage} variant="ai" size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
