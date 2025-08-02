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

const Services = () => {
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

  const additionalServices = [
    {
      icon: Database,
      title: "Data Infrastructure Setup",
      description: "Design and implement scalable data pipelines for financial analytics.",
      value: "Reduce data processing time by 60%"
    },
    {
      icon: Zap,
      title: "API Development",
      description: "Custom financial APIs for seamless integration and automation.",
      value: "Accelerate integration timelines"
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Analyze and optimize financial processes for maximum efficiency.",
      value: "Increase operational efficiency by 40%"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive assessment of your current financial processes and data infrastructure"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom solution design tailored to your specific business needs and goals"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Agile development and deployment with continuous testing and optimization"
    },
    {
      step: "04",
      title: "Training & Support",
      description: "Comprehensive training and ongoing support to ensure successful adoption"
    }
  ];

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
              <Card key={index} className="p-8 lg:p-12 hover:shadow-glow transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <service.icon className={`h-16 w-16 ${service.color} mb-6`} />
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
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Specialized Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional services to complement your core financial operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 group">
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-sm font-medium text-success">{service.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Optimize Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our specialized fintech CPA and data science services 
            can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={() => scrollToSection('contact', '/contact')}
            >
              Get Started Today
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

export default Services;