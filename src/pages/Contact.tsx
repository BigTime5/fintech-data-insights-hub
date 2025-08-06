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
  const showToast = (title, description, variant = "default") => {
    setToast({ title, description, variant });
    setTimeout(() => setToast(null), 5000);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        to: 'phinidygeorge01@gmail.com',
        subject: `Contact Form: ${formData.service || 'General Inquiry'}`,
        body: `
Hello Phinidy,

I am interested in your services and would like to discuss my project.

CONTACT DETAILS:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not specified'}
- Service Interest: ${formData.service || 'General Inquiry'}

PROJECT DETAILS:
${formData.message}

Please let me know your availability for a consultation.

Best regards,
${formData.name}
        `
      };

      // Create a modal with multiple options
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
      modal.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-xl max-w-md mx-4">
          <h3 class="text-lg font-bold mb-4">Send Your Message</h3>
          <p class="text-gray-600 mb-4">Choose how you'd like to send your message:</p>
          <div class="space-y-3">
            <button id="tryEmail" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
              📧 Try Email Client
            </button>
            <button id="copyEmail" class="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
              📋 Copy Email Details
            </button>
            <button id="openGmail" class="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700">
              🌐 Open Gmail Web
            </button>
            <button id="showDetails" class="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700">
              📝 Show Contact Details
            </button>
            <button id="closeModal" class="w-full bg-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // Handle each option
      (modal.querySelector('#tryEmail') as HTMLElement).onclick = () => {
        const subject = encodeURIComponent(emailData.subject);
        const body = encodeURIComponent(emailData.body);
        const mailtoLink = `mailto:${emailData.to}?subject=${subject}&body=${body}`;
        
        try {
          window.open(mailtoLink, '_blank');
          showToast("Email Client Opening", "If nothing opened, try another option below.");
        } catch (error) {
          showToast("Email Client Failed", "Please try copying the details instead.", "destructive");
        }
        document.body.removeChild(modal);
      };

      (modal.querySelector('#copyEmail') as HTMLElement).onclick = async () => {
        const emailText = `
To: ${emailData.to}
Subject: ${emailData.subject}

${emailData.body}
        `;
        
        try {
          await navigator.clipboard.writeText(emailText);
          showToast("Email Copied!", "Email details copied to clipboard. Paste into your email app.");
        } catch (error) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = emailText;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          showToast("Email Copied!", "Email details copied. Paste into your email app.");
        }
        document.body.removeChild(modal);
      };

      (modal.querySelector('#openGmail') as HTMLElement).onclick = () => {
        const subject = encodeURIComponent(emailData.subject);
        const body = encodeURIComponent(emailData.body);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailData.to}&su=${subject}&body=${body}`;
        
        window.open(gmailUrl, '_blank');
        showToast("Gmail Opened", "Gmail compose window should open in new tab.");
        document.body.removeChild(modal);
      };

      (modal.querySelector('#showDetails') as HTMLElement).onclick = () => {
        document.body.removeChild(modal);
        
        // Show details in a new modal
        const detailsModal = document.createElement('div');
        detailsModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        detailsModal.innerHTML = `
          <div class="bg-white p-6 rounded-lg shadow-xl max-w-lg mx-4">
            <h3 class="text-lg font-bold mb-4">Your Contact Details</h3>
            <div class="bg-gray-50 p-4 rounded-lg text-sm">
              <p><strong>Send to:</strong> ${emailData.to}</p>
              <p><strong>Subject:</strong> ${emailData.subject}</p>
              <div class="mt-3">
                <strong>Message:</strong>
                <pre class="whitespace-pre-wrap mt-2">${emailData.body}</pre>
              </div>
            </div>
            <div class="mt-4 space-y-2">
              <button id="copyDetails" class="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                Copy All Details
              </button>
              <button id="closeDetails" class="w-full bg-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-400">
                Close
              </button>
            </div>
          </div>
        `;
        
        document.body.appendChild(detailsModal);
        
        (detailsModal.querySelector('#copyDetails') as HTMLElement).onclick = async () => {
          try {
            await navigator.clipboard.writeText(`To: ${emailData.to}\nSubject: ${emailData.subject}\n\n${emailData.body}`);
            showToast("Details Copied!", "All details copied to clipboard.");
          } catch (error) {
            showToast("Copy manually", "Please copy the details manually from above.");
          }
          document.body.removeChild(detailsModal);
        };
        
        (detailsModal.querySelector('#closeDetails') as HTMLElement).onclick = () => {
          document.body.removeChild(detailsModal);
        };
        
        detailsModal.onclick = (e) => {
          if (e.target === detailsModal) {
            document.body.removeChild(detailsModal);
          }
        };
      };

      (modal.querySelector('#closeModal') as HTMLElement).onclick = () => {
        document.body.removeChild(modal);
      };

      modal.onclick = (e) => {
        if (e.target === modal) {
          document.body.removeChild(modal);
        }
      };

      // Reset form after showing options
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });

    } catch (error) {
      showToast(
        "Please Email Directly",
        `Please email phinidygeorge01@gmail.com directly with your inquiry.`,
        "destructive"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleMeeting = () => {
    // Create a more specific calendar event
    const clientName = formData.name || "Potential Client";
    const clientEmail = formData.email || "";
    
    // Set meeting for next business day at 10 AM
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    // If it's weekend, schedule for Monday
    if (tomorrow.getDay() === 6) tomorrow.setDate(tomorrow.getDate() + 2); // Saturday -> Monday
    if (tomorrow.getDay() === 0) tomorrow.setDate(tomorrow.getDate() + 1); // Sunday -> Monday
    
    tomorrow.setHours(10, 0, 0, 0);
    const endTime = new Date(tomorrow);
    endTime.setMinutes(30);

    const eventTitle = encodeURIComponent(`Consultation with ${clientName}`);
    const eventDetails = encodeURIComponent(`
Consultation meeting with ${clientName}
Email: ${clientEmail}
Service Interest: ${formData.service || 'General Discussion'}

Meeting Link: [To be provided by Phinidy]

Agenda:
- Project overview and requirements
- Service discussion
- Next steps
    `);

    // Method 1: More specific Google Calendar link
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${tomorrow.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${eventDetails}&location=Video+Call&sf=true&output=xml`;

    // Method 2: Email to schedule with more details
    const scheduleEmailSubject = encodeURIComponent(`Meeting Request: ${clientName} - ${formData.service || 'Consultation'}`);
    const scheduleEmailBody = encodeURIComponent(`
Hello Phinidy,

I would like to schedule a consultation meeting.

CLIENT INFORMATION:
- Name: ${clientName}
- Email: ${clientEmail}
- Company: ${formData.company || 'Not specified'}
- Service Interest: ${formData.service || 'General Consultation'}

PREFERRED MEETING TIMES (Please choose one):
- Option 1: ${tomorrow.toLocaleDateString()} at 10:00 AM
- Option 2: ${new Date(tomorrow.getTime() + 24*60*60*1000).toLocaleDateString()} at 10:00 AM  
- Option 3: ${new Date(tomorrow.getTime() + 48*60*60*1000).toLocaleDateString()} at 10:00 AM

PROJECT DETAILS:
${formData.message || 'To be discussed during the meeting'}

My timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}

Please confirm the meeting time and provide the video call link.

Looking forward to our discussion!

Best regards,
${clientName}
    `);

    const scheduleMailtoLink = `mailto:phinidygeorge01@gmail.com?subject=${scheduleEmailSubject}&body=${scheduleEmailBody}`;

    // Give user better options
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-md mx-4">
        <h3 class="text-lg font-bold mb-4">Choose Scheduling Method</h3>
        <p class="text-gray-600 mb-4">How would you like to schedule the meeting?</p>
        <div class="space-y-3">
          <button id="emailSchedule" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            📧 Send Email Request (Recommended)
          </button>
          <button id="calendarAdd" class="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
            📅 Add to My Calendar
          </button>
          <button id="copyDetails" class="w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700">
            📋 Copy Meeting Details
          </button>
          <button id="closeModal" class="w-full bg-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Handle modal button clicks
    (modal.querySelector('#emailSchedule') as HTMLElement).onclick = () => {
      window.open(scheduleMailtoLink, '_blank');
      document.body.removeChild(modal);
      showToast("Scheduling Email Opened", "Please send the email to confirm your meeting request.");
    };

    (modal.querySelector('#calendarAdd') as HTMLElement).onclick = () => {
      window.open(googleCalendarUrl, '_blank');
      document.body.removeChild(modal);
      showToast("Calendar Opened", "Add this to your calendar. Remember to email Phinidy to confirm!");
    };

    (modal.querySelector('#copyDetails') as HTMLElement).onclick = async () => {
      const meetingDetails = `
Meeting Request Details:
- Client: ${clientName}
- Email: ${clientEmail}  
- Service: ${formData.service || 'General Consultation'}
- Proposed Time: ${tomorrow.toLocaleDateString()} at 10:00 AM
- Duration: 30 minutes
- Contact: phinidygeorge01@gmail.com
      `;
      
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(meetingDetails);
      }
      document.body.removeChild(modal);
      showToast("Details Copied", "Meeting details copied to clipboard. Email phinidygeorge01@gmail.com to schedule.");
    };

    (modal.querySelector('#closeModal') as HTMLElement).onclick = () => {
      document.body.removeChild(modal);
    };

    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    };
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
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <div className={`p-4 rounded-lg shadow-lg border ${
            toast.variant === 'destructive' 
              ? 'bg-red-50 border-red-200 text-red-800' 
              : 'bg-green-50 border-green-200 text-green-800'
          }`}>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-sm">{toast.title}</h4>
                <p className="text-sm mt-1 opacity-90">{toast.description}</p>
              </div>
              <button 
                onClick={() => setToast(null)}
                className="ml-4 text-lg leading-none opacity-70 hover:opacity-100"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

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