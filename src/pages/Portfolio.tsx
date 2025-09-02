import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Users, Shield, TrendingUp, PieChart, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// CountUp Component with enhanced animations
const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
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

  return (
    <motion.span
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

const projects = [
  {
    id: 1,
    title: "YouTube Analytics Dashboard",
    subtitle: "Excel to Power BI Data Pipeline",
    description: "Comprehensive analytics dashboard analyzing top UK YouTubers for marketing campaign optimization. Built end-to-end ETL pipeline and interactive visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Power BI", "SQL Server", "Excel", "DAX"],
    metrics: [
      { label: "Potential Net Profit", value: 1.28, display: "$1.28M" },
      { label: "Data Processing", value: 100, display: "100 YouTuber records" },
      { label: "Top YouTubers Identified", value: 10, display: "10" }
    ],
    results: "Enabled $1.28M net profit via influencer marketing with Mister Max",
    liveLink: "https://bigtime5.github.io/",
    category: "Business Intelligence",
    icon: BarChart3,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Telecom Churn Prediction",
    subtitle: "Machine Learning & Analytics Platform",
    description: "End-to-end churn analysis solution combining SQL ETL, Python ML models, and Power BI visualizations to identify at-risk customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Python", "Random Forest", "SQL Server", "Power BI"],
    metrics: [
      { label: "Predicted Churners", value: 378, display: "378" },
      { label: "Churn Rate Analyzed", value: 27, display: "27%" },
      { label: "Potential Monthly Savings", value: 35, display: "$35K+" }
    ],
    results: "Identified 378 at-risk customers, saving $35K/month via targeted retention campaigns",
    liveLink: "https://bigtime5.github.io/churn-analytics-powerbi-sql-ml/",
    category: "Predictive Analytics",
    icon: Users,
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "SafariHub Recommender System",
    subtitle: "Django Web Application",
    description: "Full-stack recommender system for Kenyan tourism, using NLP and KNN for personalized hotel and destination suggestions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Django", "Python", "scikit-learn", "NumPy", "Pandas"],
    metrics: [
      { label: "Recommendation Accuracy", value: 89, display: "89%" },
      { label: "Model Type", value: null, display: "Tuned KNN with NLP" },
      { label: "Supports Real-Time Updates", value: null, display: "Yes" }
    ],
    results: "Enhanced travel experiences with personalized recommendations for Kenyan hotels and destinations",
    githubLink: "https://github.com/BigTime5/SafariHub",
    category: "Recommender Systems",
    icon: MapPin,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Stock Volatility API",
    subtitle: "Financial Forecasting System",
    description: "Advanced stock volatility prediction API using GARCH(1,1) for real-time financial market analysis and risk assessment.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "GARCH", "SQLite"],
    metrics: [
      { label: "Validated Volatility Bands", value: null, display: "±2 SD" },
      { label: "Stocks Tracked", value: null, display: "AMZN, WMT" },
      { label: "Risk-Adjusted Return", value: 10, display: "Up to 10%" }
    ],
    results: "Real-time volatility predictions enabling better risk management for financial portfolios",
    githubLink: "https://github.com/BigTime5/stock-forecasting-api",
    category: "Financial Analytics",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: 5,
    title: "Pizza Sales Analytics",
    subtitle: "End-to-End Business Intelligence",
    description: "Comprehensive sales analytics dashboard providing insights into customer behavior, product performance, and revenue optimization strategies.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    technologies: ["Power BI", "SQL", "Data Modeling", "DAX"],
    metrics: [
      { label: "Potential Annual Gain", value: 11.7, display: "$11.7K" },
      { label: "Sales Records Analyzed", value: 48620, display: "48,620" },
      { label: "Report Automation", value: 100, display: "100%" }
    ],
    results: "Reduced analysis time and identified $978/month in savings via product discontinuation and promotions",
    liveLink: "https://bigtime5.github.io/end-to-end-pizza-report/",
    category: "Business Intelligence",
    icon: PieChart,
    color: "from-amber-500 to-yellow-600"
  }
];

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with staggered animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real-world projects demonstrating the power of fintech CPA expertise combined with data science
          </motion.p>
        </motion.div>

        {/* Projects with enhanced animations */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`overflow-hidden hover:shadow-2xl transition-all duration-700 group ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex backdrop-blur-sm border-0 bg-background/60`}
              >
                {/* Image Section with Enhanced Hover Effects */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                    
                    {/* Animated gradient overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Category badge with hover animation */}
                    <div className="absolute top-4 left-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </motion.div>
                    </div>
                    
                    {/* Animated icon */}
                    <div className="absolute bottom-4 left-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="p-2 bg-background/20 backdrop-blur-sm rounded-full"
                      >
                        <project.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:w-1/2 p-8">
                  {/* Title and Description */}
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Key Metrics with staggered animation */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Metrics:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <motion.div 
                          key={metricIndex} 
                          className="text-center p-3 bg-accent/30 rounded-lg backdrop-blur-sm hover:bg-accent/50 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: metricIndex * 0.1 + 0.4 }}
                          whileHover={{ scale: 1.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-lg font-bold text-primary">
                            {metric.value ? (
                              metric.label.includes("Profit") || metric.label.includes("Savings") || metric.label.includes("Gain") ? (
                                <>$<CountUp end={metric.value} suffix={metric.label.includes("Profit") ? "M" : "K"} /></>
                              ) : metric.label.includes("Accuracy") || metric.label.includes("Automation") || metric.label.includes("Return") ? (
                                <><CountUp end={metric.value} suffix="%" /></>
                              ) : (
                                <CountUp end={metric.value} />
                              )
                            ) : (
                              metric.display
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies with animated badges */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 + 0.6 }}
                          whileHover={{ scale: 1.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-200">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Business Impact */}
                  <motion.div 
                    className="bg-accent/50 rounded-lg p-4 mb-6 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-2">Business Impact:</h4>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {project.liveLink && (
                      <motion.div 
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <Button variant="default" size="sm" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.githubLink && (
                      <motion.div 
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Button variant="cta" size="lg" asChild>
              <a href="https://github.com/BigTime5" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;