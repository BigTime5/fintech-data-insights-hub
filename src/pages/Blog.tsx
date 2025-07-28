import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Calendar, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Users,
  ArrowRight
} from "lucide-react";

const Blog = () => {
  const featuredArticles = [
    {
      title: "13 Ruthlessly Effective Wealth-Building Principles",
      description: "A comprehensive guide to building lasting wealth through proven financial strategies and mindset shifts that separate the wealthy from the average.",
      excerpt: "Discover the fundamental principles that drive wealth creation, from compound interest mastery to strategic risk-taking and tax optimization...",
      readTime: "12 min read",
      publishDate: "2024",
      category: "Wealth Building",
      categoryColor: "text-success",
      url: "https://medium.com/@phinidy.george/13-ruthlessly-effective-wealth-building-principles-cdc2cb88dfdf",
      icon: TrendingUp
    },
    {
      title: "17 Money Skills the Rich Master That You Were Never Taught",
      description: "Essential financial skills that aren't taught in schools but are crucial for building and maintaining wealth in the modern economy.",
      excerpt: "Learn the hidden money skills that wealthy individuals use to multiply their wealth, from advanced tax strategies to investment psychology...",
      readTime: "15 min read",
      publishDate: "2024",
      category: "Financial Education",
      categoryColor: "text-primary",
      url: "https://medium.com/@phinidy.george/17-money-skills-the-rich-master-that-you-were-never-taught-171c35ca1e1a",
      icon: DollarSign
    },
    {
      title: "Breaking Into Elite Circles: A Strategic Guide",
      description: "A practical roadmap for building valuable networks and gaining access to exclusive opportunities that can accelerate your career and business.",
      excerpt: "Networking strategies used by successful entrepreneurs and executives to build meaningful relationships that open doors to new opportunities...",
      readTime: "10 min read",
      publishDate: "2024",
      category: "Professional Growth",
      categoryColor: "text-warning",
      url: "https://medium.com/@phinidy.george/breaking-into-elite-circles-a-strategic-guide-8e4fe6242bfa",
      icon: Users
    }
  ];

  const topics = [
    "Fintech Innovation",
    "Data Science in Finance",
    "AI-Driven Tax Optimization",
    "Blockchain Accounting",
    "Predictive Analytics",
    "Wealth Building",
    "Financial Technology",
    "Investment Strategies"
  ];

  const upcomingTopics = [
    {
      title: "Machine Learning for Financial Fraud Detection",
      description: "How AI algorithms are revolutionizing fraud prevention in fintech",
      category: "AI & Security"
    },
    {
      title: "The Future of Accounting: Automation and Analytics",
      description: "Exploring how data science is transforming traditional accounting practices",
      category: "Industry Trends"
    },
    {
      title: "Building Profitable Fintech Startups: A Data-Driven Approach",
      description: "Using analytics to validate, launch, and scale fintech ventures",
      category: "Entrepreneurship"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Insights & Thought Leadership
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Exploring the intersection of finance, technology, and data science through 
            actionable insights and proven strategies for wealth building and business growth.
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            {topics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth analysis and practical guidance on wealth building, financial technology, and professional growth
            </p>
          </div>
          
          <div className="space-y-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <article.icon className={`h-8 w-8 ${article.categoryColor}`} />
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="outline" className={article.categoryColor}>
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.publishDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {article.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {article.description}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <Button variant="hero" asChild className="w-full">
                      <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Upcoming Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay tuned for more insights on fintech innovation and data-driven financial strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingTopics.map((topic, index) => (
              <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                <Badge variant="outline" className="mb-4">
                  {topic.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {topic.title}
                </h3>
                <p className="text-muted-foreground">
                  {topic.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get the latest insights on fintech innovation, data science applications, 
              and wealth-building strategies delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-primary-foreground placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-300 mt-4">
              Join 1,000+ professionals who trust my insights. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Medium Profile CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Follow Me on Medium
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of readers who follow my work on Medium for regular insights 
            on finance, technology, and professional development.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://medium.com/@phinidy.george" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Visit Medium Profile
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;