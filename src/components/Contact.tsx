import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import {
  Calendar,
  Coffee,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_gl3ptth',
        'template_km309qf',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'tlsBEw4_4kbEiCsFr'
      );
      toast.success("🎉 Message sent! I'll get back to you soon.", {
        style: { background: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)', color: '#fff' }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again later.", {
        style: { background: 'linear-gradient(90deg, #ff5858 0%, #f09819 100%)', color: '#fff' }
      });
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "muhammadhaiderali2710@gmail.com",
      description: "Best for project inquiries",
      link: "mailto:muhammadhaiderali2710@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@mhaiderali2710",
      description: "Professional networking",
      link: "https://www.linkedin.com/in/mhaiderali2710/",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@Haiderali27-hub",
      description: "Code collaborations",
      link: "https://github.com/Haiderali27-hub",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+923319540573",
      description: "Available during business hours",
      link: "tel:+923319540573",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const quickConnections = [
    {
      icon: Coffee,
      title: "Coffee Chat",
      description: "Let's discuss ideas over coffee"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a time that works for both"
    },
    {
      icon: MessageSquare,
      title: "Quick Question",
      description: "Have something brief to ask?"
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 reveal opacity-0">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto reveal opacity-0">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Methods */}
              <div className="reveal-left opacity-0">
                <h3 className="text-2xl font-bold font-display mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block group"
                    >
                      <Card className="bg-card/50 border-border/50 hover-lift group-hover:border-primary/30 transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center glow-primary`}>
                              <method.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold font-display group-hover:text-primary transition-colors">
                                {method.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{method.value}</p>
                              <p className="text-xs text-muted-foreground/70">{method.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Connections */}
              <div className="reveal-left opacity-0">
                <h3 className="text-xl font-bold font-display mb-4">Quick Connections</h3>
                <div className="space-y-3">
                  {quickConnections.map((connection, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm">
                      <connection.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium">{connection.title}</span>
                        <p className="text-muted-foreground text-xs">{connection.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="reveal-left opacity-0">
                <Card className="bg-gradient-secondary border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-medium">Available for opportunities</p>
                        <p className="text-sm text-muted-foreground">
                          Open to internships and collaborations
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 border-border/50 reveal-right opacity-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-display mb-2">Send a Message</h3>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, idea, or just say hello!"
                        rows={6}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    {/* Quick Topic Tags */}
                    <div>
                      <p className="text-sm font-medium mb-3">Quick topic tags (optional):</p>
                      <div className="flex flex-wrap gap-2">
                        {['Project Collaboration', 'Internship', 'Freelance', 'Mentorship', 'General Question'].map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={() => setFormData({...formData, subject: tag})}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className={`w-full bg-gradient-primary hover:glow-primary transition-all duration-300 font-semibold flex items-center justify-center relative ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center w-full">
                          <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      I typically respond within 24 hours. Looking forward to hearing from you!
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};