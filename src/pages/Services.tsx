import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  Brain, 
  Shield, 
  TrendingUp, 
  Calculator, 
  Database,
  Zap,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
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

  const mainServices = [
    {
      icon: BarChart3,
      title: "Real-Time Financial Dashboards & Business Intelligence",
      description: "Transform raw financial data into actionable insights with custom dashboards that provide real-time visibility into your business performance.",
      features: [
        "Interactive Power BI and Tableau dashboards",
        "Real-time KPI monitoring",
        "Automated reporting systems",
        "Cross-platform data integration",
        "Mobile-responsive analytics"
      ],
      value: "Reduce manual reporting time by 70% and improve decision-making speed",
      ideal: ["Fintech startups", "Financial institutions", "Investment firms"],
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Predictive Financial Modeling for Risk Management",
      description: "Leverage machine learning algorithms to forecast market trends, assess risks, and optimize investment strategies with unprecedented accuracy.",
      features: [
        "GARCH volatility forecasting",
        "Random Forest risk modeling",
        "Time series analysis",
        "Monte Carlo simulations",
        "Stress testing frameworks"
      ],
      value: "Improve risk-adjusted returns by 15-25% through predictive insights",
      ideal: ["Hedge funds", "Asset managers", "Risk departments"],
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Fraud Detection & Financial Security Analytics",
      description: "Protect your financial operations with AI-powered fraud detection systems that identify anomalies and prevent fraudulent activities in real-time.",
      features: [
        "Anomaly detection algorithms",
        "Transaction pattern analysis",
        "Real-time alert systems",
        "Compliance monitoring",
        "Behavioral analytics"
      ],
      value: "Prevent fraud losses and ensure regulatory compliance with 95%+ accuracy",
      ideal: ["Payment processors", "Banks", "E-commerce platforms"],
      color: "text-warning"
    },
    {
      icon: Calculator,
      title: "Fintech CPA Services",
      description: "Specialized accounting services for fintech companies including tax optimization, compliance, and financial strategy consulting.",
      features: [
        "Tax Optimization",
        "Regulatory Compliance",
        "Financial Planning",
        "Audit Support"
      ],
      value: "Streamline financial operations and reduce tax liabilities by up to 30%",
      ideal: ["Fintech startups", "Crypto exchanges", "Payment platforms", "Digital banks"],
      color: "text-info"
    }
  ];

  // Animation variants for key features
  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: i * 0.2 // Stagger each feature by 0.2 seconds
      }
    })
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Fintech CPA & Data Science
            <span className="text-accent block">Services</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            I deliver specialized solutions that fuse CPA precision with advanced data science- transforming operations, optimizing compliance, 
            and accelerating growth across today's dynamic financial landscape.
          </p>
          <Button 
            variant="cta" 
            size="xl" 
            onClick={() => scrollToSection('contact', '/contact')}
          >
            Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Service Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four pillars of financial technology excellence designed to optimize your operations
            </p>
          </div>
          
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title} // Unique key to reset animations per service
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }} // Allow re-animation on re-entering viewport
              >
                <motion.div
                  className="p-8 lg:p-12 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                >
                  <Card>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <service.icon className={`h-16 w-16 ${service.color} mb-6`} />
                        </motion.div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                          <p className="text-accent-foreground font-semibold">
                            <CheckCircle className="h-5 w-5 text-success inline mr-2" />
                            {service.value}
                          </p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Ideal for:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.ideal.map((target, targetIndex) => (
                              <Badge key={targetIndex} variant="outline">
                                {target}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={`${service.title}-${featureIndex}`} // Unique key per feature per service
                              custom={featureIndex}
                              variants={featureVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: false, amount: 0.5 }} // Replay when 50% of card is visible
                              className="flex items-start"
                            >
                              <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ... (Rest of the file: Additional Services, Process, CTA sections remain unchanged) */}
    </div>
  );
};

export default Services;