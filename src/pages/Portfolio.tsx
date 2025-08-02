import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Users, Shield, TrendingUp, PieChart, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "YouTube Analytics Dashboard",
    subtitle: "Excel to Power BI Data Pipeline",
    description: "Comprehensive analytics dashboard analyzing top UK YouTubers for marketing campaign optimization. Built end-to-end ETL pipeline and interactive visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Power BI", "SQL Server", "Excel", "DAX"],
    metrics: [
      { label: "Potential Net Profit", value: "$1.28M" },
      { label: "Data Processing", value: "100 YouTuber records" },
      { label: "Top YouTubers Identified", value: "10" }
    ],
    results: "Enabled $1.28M net profit via influencer marketing with Mister Max",
    liveLink: "https://bigtime5.github.io/",
    category: "Business Intelligence",
    icon: BarChart3
  },
  {
    id: 2,
    title: "Telecom Churn Prediction",
    subtitle: "Machine Learning & Analytics Platform",
    description: "End-to-end churn analysis solution combining SQL ETL, Python ML models, and Power BI visualizations to identify at-risk customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Python", "Random Forest", "SQL Server", "Power BI"],
    metrics: [
      { label: "Predicted Churners", value: "378" },
      { label: "Churn Rate Analyzed", value: "27%" },
      { label: "Potential Monthly Savings", value: "$35K+" }
    ],
    results: "Identified 378 at-risk customers, saving $35K/month via targeted retention campaigns",
    liveLink: "https://bigtime5.github.io/churn-analytics-powerbi-sql-ml/",
    category: "Predictive Analytics",
    icon: Users
  },
  {
    id: 3,
    title: "SafariHub Recommender System",
    subtitle: "Django Web Application",
    description: "Full-stack recommender system for Kenyan tourism, using NLP and KNN for personalized hotel and destination suggestions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Django", "Python", "scikit-learn", "NumPy", "Pandas"],
    metrics: [
      { label: "Recommendation Accuracy", value: "89%" },
      { label: "Model Type", value: "Tuned KNN with NLP" },
      { label: "Supports Real-Time Updates", value: "Yes" }
    ],
    results: "Enhanced travel experiences with personalized recommendations for Kenyan hotels and destinations",
    githubLink: "https://github.com/BigTime5/SafariHub",
    category: "Recommender Systems",
    icon: MapPin // Use a valid Lucide icon component
  },
  {
    id: 4,
    title: "Stock Volatility API",
    subtitle: "Financial Forecasting System",
    description: "Advanced stock volatility prediction API using GARCH(1,1) for real-time financial market analysis and risk assessment.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "GARCH", "SQLite"],
    metrics: [
      { label: "Validated Volatility Bands", value: "±2 SD" },
      { label: "Stocks Tracked", value: "AMZN, WMT" },
      { label: "Risk-Adjusted Return", value: "Up to 10%" }
    ],
    results: "Real-time volatility predictions enabling better risk management for financial portfolios",
    githubLink: "https://github.com/BigTime5/stock-forecasting-api",
    category: "Financial Analytics",
    icon: TrendingUp
  },
  {
    id: 5,
    title: "Pizza Sales Analytics",
    subtitle: "End-to-End Business Intelligence",
    description: "Comprehensive sales analytics dashboard providing insights into customer behavior, product performance, and revenue optimization strategies.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    technologies: ["Power BI", "SQL", "Data Modeling", "DAX"],
    metrics: [
      { label: "Potential Annual Gain", value: "$11.7K" },
      { label: "Sales Records Analyzed", value: "48,620" },
      { label: "Report Automation", value: "100%" }
    ],
    results: "Reduced analysis time and identified $978/month in savings via product discontinuation and promotions",
    liveLink: "https://bigtime5.github.io/end-to-end-pizza-report/",
    category: "Business Intelligence",
    icon: PieChart
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects demonstrating the power of fintech CPA expertise combined with data science
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={project.id} className={`overflow-hidden hover:shadow-large transition-all duration-500 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:flex`}>
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Metrics:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/50 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Business Impact:</h4>
                  <p className="text-sm text-muted-foreground">{project.results}</p>
                </div>

                <div className="flex gap-3">
                  {project.liveLink && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href="https://github.com/BigTime5" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;