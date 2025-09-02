import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  TrendingUp, 
  Users, 
  Globe,
  Calendar,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

// Progress Bar Component
const ProgressBar = ({ value, max = 100, label }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-medium text-primary">{value}{label.includes("Cost") ? "K" : "%"}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const achievements = [
    {
      title: "Enhanced Fintech Reporting Efficiency",
      description: "Improved financial reporting processes by 30% through automated analytics",
      metric: "30% Efficiency Gain",
      value: 30
    },
    {
      title: "Predictive Model Accuracy",
      description: "Achieved 89% accuracy in machine learning models for financial forecasting",
      metric: "89% Accuracy",
      value: 89
    },
    {
      title: "Cost Optimization",
      description: "Generated over $500K in cost savings through data-driven insights",
      metric: "$500K+ Saved",
      value: 50 // Normalized to 50% of $1M max
    }
  ];

  const skills = [
    { category: "Financial Expertise", skills: ["CPA Certified", "Financial Analysis", "Tax Strategy", "Risk Management", "Audit & Compliance"] },
    { category: "Data Science", skills: ["Python", "Machine Learning", "Statistical Analysis", "Predictive Modeling", "Data Visualization"] },
    { category: "Fintech Tools", skills: ["Power BI", "Tableau", "SQL", "Django", "FastAPI", "Financial APIs"] },
    { category: "Technologies", skills: ["React", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Git"] }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Advanced Fintech Specialization",
      description: "Focused on integrating AI and machine learning into financial services"
    },
    {
      year: "2024",
      title: "Data Science Certification",
      description: "Completed advanced certifications in Python, machine learning, and data visualization"
    },
    {
      year: "2023",
      title: "CPA Licensure",
      description: "Obtained Certified Public Accountant license with specialization in fintech"
    },
    {
      year: "2021",
      title: "Financial Technology Focus",
      description: "Began specializing in the intersection of finance and technology"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Reimaging Financial Futures with 
                <span className="text-accent block">Intelligence and Impact</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                I fuse CPA expertise with data science precision to help fintech companies evolve- from reactive accounting to predictive, AI-powered finance. 
                Through intelligent automation and advance analytics, I architect financial ecosystems that scale, comply, and outperform.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">CPA Certified</Badge>
                <Badge variant="secondary" className="px-4 py-2">Data Scientist</Badge>
                <Badge variant="secondary" className="px-4 py-2">Fintech Specialist</Badge>
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-20 animate-glow"></div>
                <img
                  src="uploads/339565af-8a3d-4736-b990-0b7a918d863e.png"
                  alt="Phinidy George - Professional Photo"
                  className="relative w-80 h-96 object-cover rounded-lg shadow-card border-2 border-white/20"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of growth, learning, and innovation in the fintech space
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <span className="text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8"></div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notable Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable impact through innovative fintech solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-glow transition-all duration-300">
                  <ProgressBar value={achievement.value} label={achievement.metric} />
                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning finance, technology, and data science
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <GraduationCap className="h-6 w-6 text-primary mr-2" />
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Mission */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            My Mission
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            To empower decision-makers with tools that scale, systems that adapt, and insights that convert complexity into clarity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: TrendingUp, title: "Innovation", description: "Pushing the boundaries of what's possible in fintech" },
              { icon: Users, title: "Collaboration", description: "Building partnerships that drive mutual success" },
              { icon: Globe, title: "Impact", description: "Creating solutions that transform businesses globally" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;