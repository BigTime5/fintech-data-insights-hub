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
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Custom Ripple Button Component
const RippleButton = ({ children, variant, size, onClick, className = "" }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      {children}
    </Button>
  );
};

// Counting Number Component
const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60 fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <motion.span>{count}</motion.span>;
};

const Home = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string, fallbackRoute?: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      window.history.replaceState(null, '', fallbackRoute || `/${sectionId}`);
    } else if (fallbackRoute) {
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
    { number: "20+", label: "Projects Completed", icon: Target, count: 20 },
    { number: "89%", label: "ML Model Accuracy", icon: Brain, count: 89 },
    { number: "$500K+", label: "Cost Savings Generated", icon: TrendingUp, count: 500 },
    { number: "24/7", label: "Real-time Monitoring", icon: BarChart3, count: null }
  ];

  const certifications = [
    "Certified Public Accountant (CPA)",
    "Python for Data Science",
    "Tableau Certified",
    "Power BI Expert",
    "Financial Risk Management"
  ];

  const tagline = "Where AI-driven insights meet financial mastery";
  const taglinePart1 = "Where AI-driven insights meet";
  const taglinePart2 = "financial mastery";

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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {taglinePart1.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="text-accent block">
                    {taglinePart2.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (taglinePart1.length + index) * 0.05, duration: 0.3 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </motion.div>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                Reshaping how fintech companies scale, comply, and compete globally. Data is the blueprint. Strategy is the outcome.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <RippleButton 
                  variant="cta" 
                  size="xl" 
                  onClick={() => scrollToSection('contact', '/contact')}
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </RippleButton>
                <RippleButton 
                  variant="outline" 
                  size="xl" 
                  className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
                  onClick={() => scrollToSection('portfolio', '/portfolio')}
                >
                  View Portfolio
                </RippleButton>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-glow"></div>
                <img
                  src="uploads/339565af-8a3d-4736-b990-0b7a918d863e.png"
                  alt="Phinidy George - Fintech CPA and Data Scientist"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-card border-4 border-white/20"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.count ? (
                      stat.label.includes("Cost Savings") ? (
                        <>$<CountUp end={stat.count} />K+</>
                      ) : stat.label.includes("ML Model") ? (
                        <><CountUp end={stat.count} />%</>
                      ) : (
                        <><CountUp end={stat.count} />+</>
                      )
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {stat.number}
                      </motion.span>
                    )}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-glow transition-all duration-300 group">
                  <service.icon className={`h-12 w-12 ${service.color} mb-6 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <RippleButton 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection('services', '/services')}
            >
              Explore All Services
            </RippleButton>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-elegant">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              </motion.div>
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
            <RippleButton 
              variant="cta" 
              size="xl" 
              onClick={() => scrollToSection('contact', '/contact')}
            >
              Schedule Consultation
            </RippleButton>
            <RippleButton 
              variant="outline" 
              size="xl" 
              className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              onClick={() => scrollToSection('portfolio', '/portfolio')}
            >
              View Case Studies
            </RippleButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;