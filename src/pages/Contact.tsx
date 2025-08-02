import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Linkedin, 
  Github, 
  BookOpen,
  Clock,
  CheckCircle,
  Send,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Option 1: Send email using mailto (opens user's email client)
      const subject = encodeURIComponent(`Contact Form: ${formData.service || 'General Inquiry'}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Service Interest: ${formData.service || 'General Inquiry'}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:phinidygeorge01@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');

      // Option 2: You could also integrate with a service like EmailJS, Formspree, or Netlify Forms
      // Here's an example with a mock API call:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      */

      toast({
        title: "Message Prepared!",
        description: "Your email client should open with the pre-filled message. If not, please email me directly at phinidygeorge01@gmail.com",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue preparing your message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleMeeting = () => {
    // Option 1: Direct Calendly link (if you have one)
    // window.open('https://calendly.com/your-username/30min', '_blank');

    // Option 2: Google Calendar appointment scheduling
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // Tomorrow
    startDate.setHours(10, 0, 0, 0); // 10 AM
    
    const endDate = new Date(startDate);
    endDate.setMinutes(30); // 30-minute meeting
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Consultation with Phinidy George')}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent('30-minute discovery call to discuss your project needs and how I can help with fintech CPA and data science solutions.')}&location=${encodeURIComponent('Video Call (Link to be provided)')}&sf=true&output=xml`;
    
    window.open(googleCalendarUrl, '_blank');

    // Option 3: Open email to schedule
    const subject = encodeURIComponent('Schedule Consultation Meeting');
    const body = encodeURIComponent(`Hi Phinidy,

I would like to schedule a 30-minute consultation to discuss my project needs.

My preferred times are:
- [Please specify your preferred dates and times]
- [Alternative option 1]
- [Alternative option 2]

My timezone: [Your timezone]

Looking forward to hearing from you!

Best regards,
[Your name]`);
    
    const mailtoLink = `mailto:phinidygeorge01@gmail.com?subject=${subject}&body=${body}`;
    
    // Show user options
    const userChoice = confirm("Choose how to schedule:\n\nOK = Open Google Calendar to create event\nCancel = Send scheduling email");
    
    if (userChoice) {
      window.open(googleCalendarUrl, '_blank');
    } else {
      window.open(mailtoLink, '_blank');
    }

    toast({
      title: "Meeting Scheduler Opened",
      description: "Choose your preferred method to schedule our consultation.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "phinidygeorge01@gmail.com",
      href: "mailto:phinidygeorge01@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 757 390 844",
      href: "tel:+254757390844"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kenya (Serving clients globally)",
      href: null
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/phinidy-george",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/BigTime5",
      color: "text-gray-800"
    },
    {
      icon: BookOpen,
      label: "Medium",
      href: "https://medium.com/@phinidy.george",
      color: "text-green-600"
    }
  ];

  const services = [
    "Real-Time Financial Dashboards",
    "Predictive Financial Modeling",
    "Fraud Detection & Security Analytics",
    "Fintech Tax Optimization",
    "Data Infrastructure Setup",
    "API Development",
    "General Consultation"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Let's Transform Your
            <span className="text-accent block">Financial Operations</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Ready to leverage the power of fintech CPA expertise and data science? 
            Let's discuss how we can optimize your business operations and drive growth.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@company.com"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your company name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project, goals, and how I can help you..."
                    rows={6}
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Preparing Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  I'm always excited to discuss new opportunities and how we can 
                  leverage data science and financial expertise to solve your business challenges.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Calendar Link */}
              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Schedule a Consultation
                    </h3>
                    <p className="text-muted-foreground">
                      Book a free 30-minute discovery call
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={handleScheduleMeeting}
                  className="w-full bg-card text-primary border border-border hover:bg-muted transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Schedule Meeting
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Me?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Proven Results
              </h3>
              <p className="text-muted-foreground">
                Track record of delivering measurable business impact across multiple industries
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dual Expertise
              </h3>
              <p className="text-muted-foreground">
                Unique combination of CPA certification and advanced data science skills
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Client-Focused
              </h3>
              <p className="text-muted-foreground">
                Dedicated to understanding your business and delivering tailored solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;