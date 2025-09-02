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
  ArrowRight,
  Check,
  AlertCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  
  const observerRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, (entry.target as HTMLElement).dataset.animate]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all animatable elements
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscriptionStatus("error");
      setTimeout(() => setSubscriptionStatus(""), 3000);
      return;
    }

    if (!validateEmail(email)) {
      setSubscriptionStatus("invalid");
      setTimeout(() => setSubscriptionStatus(""), 3000);
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubscriptionStatus("success");
      setEmail("");
      setTimeout(() => setSubscriptionStatus(""), 5000);
    } catch (error) {
      setSubscriptionStatus("error");
      setTimeout(() => setSubscriptionStatus(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusMessage = () => {
    switch (subscriptionStatus) {
      case "success":
        return {
          message: "Successfully subscribed! Check your email for confirmation.",
          icon: <Check className="h-4 w-4" />,
          className: "text-green-600 bg-green-50 border-green-200"
        };
      case "error":
        return {
          message: "Please enter a valid email address.",
          icon: <AlertCircle className="h-4 w-4" />,
          className: "text-red-600 bg-red-50 border-red-200"
        };
      case "invalid":
        return {
          message: "Please enter a valid email format.",
          icon: <AlertCircle className="h-4 w-4" />,
          className: "text-orange-600 bg-orange-50 border-orange-200"
        };
      default:
        return null;
    }
  };

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

  const statusMessage = getStatusMessage();

  return (
    <div className="min-h-screen pt-16">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes staggerFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-stagger {
          animation: staggerFadeIn 0.6s ease-out forwards;
        }

        .animate-slide-in-scale {
          animation: slideInScale 0.7s ease-out forwards;
        }

        /* Initially hidden elements */
        [data-animate]:not(.animate-fade-in-up):not(.animate-fade-in-left):not(.animate-fade-in-right):not(.animate-stagger):not(.animate-slide-in-scale) {
          opacity: 0;
        }

        /* Hover animations */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .hover-scale {
          transition: transform 0.2s ease;
        }

        .hover-scale:hover {
          transform: scale(1.02);
        }

        /* Badge animations */
        .badge-float {
          animation: pulse 3s ease-in-out infinite;
        }

        /* Button hover effects */
        .btn-glow {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-glow:hover {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .btn-glow:hover::before {
          left: 100%;
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            data-animate="hero-title"
            className={`text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 ${
              visibleElements.has('hero-title') ? 'animate-fade-in-up' : ''
            }`}
          >
            Insights & Thought Leadership
          </h1>
          <p 
            data-animate="hero-subtitle"
            className={`text-xl text-gray-200 mb-8 max-w-3xl mx-auto ${
              visibleElements.has('hero-subtitle') ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Exploring the intersection of finance, technology, and data science through 
            actionable insights and proven strategies for wealth building and business growth.
          </p>
          <div 
            data-animate="hero-badges"
            className={`flex justify-center flex-wrap gap-3 ${
              visibleElements.has('hero-badges') ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            {topics.map((topic, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 badge-float hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate="featured-header"
            className={`text-center mb-16 ${
              visibleElements.has('featured-header') ? 'animate-fade-in-up' : ''
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth analysis and practical guidance on wealth building, financial technology, and professional growth
            </p>
          </div>
          
          <div className="space-y-8">
            {featuredArticles.map((article, index) => (
              <Card 
                key={index} 
                data-animate={`article-${index}`}
                className={`p-8 hover-lift transition-all duration-300 ${
                  visibleElements.has(`article-${index}`) ? 'animate-slide-in-scale' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <article.icon className={`h-8 w-8 ${article.categoryColor} hover-scale`} />
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="outline" className={`${article.categoryColor} hover-scale`}>
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
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors duration-200">
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
                    <Button variant="hero" asChild className="w-full btn-glow">
                      <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
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
          <div 
            data-animate="upcoming-header"
            className={`text-center mb-16 ${
              visibleElements.has('upcoming-header') ? 'animate-fade-in-up' : ''
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Upcoming Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay tuned for more insights on fintech innovation and data-driven financial strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingTopics.map((topic, index) => (
              <Card 
                key={index} 
                data-animate={`upcoming-${index}`}
                className={`p-6 hover-lift transition-all duration-300 ${
                  visibleElements.has(`upcoming-${index}`) ? 'animate-stagger' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Badge variant="outline" className="mb-4 hover-scale">
                  {topic.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-3 hover:text-primary transition-colors duration-200">
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
          <div 
            data-animate="newsletter"
            className={`max-w-2xl mx-auto ${
              visibleElements.has('newsletter') ? 'animate-fade-in-up' : ''
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get the latest insights on fintech innovation, data science applications, 
              and wealth-building strategies delivered to your inbox.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-primary-foreground placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 focus:bg-white/20 hover:bg-white/15"
                  disabled={isLoading}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe(e)}
                />
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={handleSubscribe}
                  disabled={isLoading}
                  className="min-w-[120px] btn-glow hover-scale"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>

              {statusMessage && (
                <div className={`p-3 rounded-lg border flex items-center justify-center gap-2 max-w-md mx-auto ${statusMessage.className} animate-fade-in-up`}>
                  {statusMessage.icon}
                  <span className="text-sm font-medium">{statusMessage.message}</span>
                </div>
              )}
            </div>
            
            <p className="text-sm text-gray-300 mt-4">
              Join 1,000+ professionals who trust my insights. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Medium Profile CTA */}
      <section className="py-16 bg-background">
        <div 
          data-animate="medium-cta"
          className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center ${
            visibleElements.has('medium-cta') ? 'animate-fade-in-up' : ''
          }`}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Follow Me on Medium
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of readers who follow my work on Medium for regular insights 
            on finance, technology, and professional development.
          </p>
          <Button variant="outline" size="lg" asChild className="hover-lift btn-glow">
            <a 
              href="https://medium.com/@phinidy.george" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Visit Medium Profile
              <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;