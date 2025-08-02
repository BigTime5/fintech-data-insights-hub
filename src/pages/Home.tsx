import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Brain, 
  Calculator, 
  Database,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Target
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string, fallbackRoute?: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL without page reload
      window.history.replaceState(null, '', fallbackRoute || `/${sectionId}`);
    } else if (fallbackRoute) {
      // If section doesn't exist, navigate to the route
      navigate(fallbackRoute);
    }
  };

  const services = [
    {
      icon: BarChart3,
      title: "Real-Time Financial Dashboards",
      description: "Custom business intelligence solutions with interactive visualizations for instant insights.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Predictive Financial Modeling",
      description: "Advanced machine learning models for risk management and financial forecasting.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Fraud Detection Analytics",
      description: "AI-powered security systems to protect your financial operations from threats.",
      color: "text-warning"
    }
  ];

  const stats = [
    { number: "20+", label: "Projects Completed", icon: Target },
    { number: "89%", label: "ML Model Accuracy", icon: Brain },
    { number: "$500K+", label: "Cost Savings Generated", icon: TrendingUp },
    { number: "24/7", label: "Real-time Monitoring", icon: BarChart3 }
  ];

  const certifications = [
    "Certified Public Accountant (CPA)",
    "Python for Data Science",
    "Tableau Certified",
    "Power BI Expert",
    "Financial Risk Management"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  Fintech CPA + Data Scientist
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Where AI-driven insights meet
                <span className="text-accent block">financial mastery</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                Reshaping how fintech companies scale, comply, and compete globally. Data is the blueprint. Strategy is the outcome.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="cta" 
                  size="xl" 
                  onClick={() => scrollToSection('contact', '/contact')}
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
                  onClick={() => scrollToSection('portfolio', '/portfolio')}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-glow"></div>
                <img
                  src="uploads/339565af-8a3d-4736-b990-0b7a918d863e.png"
                  alt="Phinidy George - Fintech CPA and Data Scientist"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-card border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Strategic Finance & Data Intelligence for Fintech Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where accounting meets algorithms. Where data becomes strategy. I build financial solutions that perform, predict and scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300 group">
                <service.icon className={`h-12 w-12 ${service.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection('services', '/services')}
            >
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Certified Excellence in Finance & Technology
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-elegant">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how data-driven financial solutions can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={() => scrollToSection('contact', '/contact')}
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              onClick={() => scrollToSection('portfolio', '/portfolio')}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;