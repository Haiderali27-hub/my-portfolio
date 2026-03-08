import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Globe, Play, Smartphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ProjectDemo } from './ProjectDemo';

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

    const elements = projectsRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Inertia Offline - POS System",
      tagline: "Local-First retail management system for regions with unreliable internet",
      description: "A flagship retail management system built for environments with limited connectivity. Features complete offline functionality with automatic updates via GitHub Actions. Includes inventory management, sales tracking, real-time financial reporting, and seamless data synchronization when online. Built with Tauri for lightweight desktop performance and native system integration. Designed for local vendors who need reliable business tools without internet dependency.",
      star: {
        situation: "Local retailers in regions with unreliable internet faced challenges managing inventory, tracking sales, and maintaining financial records, often losing business due to connectivity issues.",
        task: "Design and develop a robust POS system that operates completely offline while maintaining data integrity, with automatic updates and synchronization capabilities when connectivity is available.",
        action: "Built cross-platform desktop application using Tauri framework for native performance and small footprint, implemented local data persistence with embedded database, created real-time financial tracking algorithms, developed automated update pipeline using GitHub Actions, designed intuitive dashboard for inventory and sales management, and built sync mechanism for cloud backup when online.",
        result: "Reduced data dependency to 0% while maintaining real-time financial tracking for local vendors. Successfully deployed with active users managing daily operations completely offline."
      },
      image: "/my-portfolio/images/projects/inertia/dashboard.png",
      technologies: ["Tauri", "Rust", "TypeScript", "GitHub Actions", "Local Storage", "Desktop App"],
      type: "Desktop App",
      icon: Globe,
      status: "Working",
      github: "https://github.com/Haiderali27-hub/Offline-Expense-Tracker-Core",
      demo: "https://github.com/Haiderali27-hub/inertia-pos-releases",
      color: "from-indigo-500 to-purple-500",
      demoType: "images" as const,
      demoContent: {
        images: [
          "/my-portfolio/images/projects/inertia/dashboard.png"
        ]
      }
    },
    {
      title: "Quantum RAG Engine",
      tagline: "Private LLM system for processing 400+ quantum computing research papers",
      description: "A deep tech AI research project that processes and queries an extensive database of quantum computing research papers. Built using local LLM (Ollama with Qwen model) to maintain privacy while providing intelligent semantic search and question-answering capabilities across 300-400 PDFs. Features vector database for efficient similarity search and RAG (Retrieval Augmented Generation) architecture for accurate, context-aware responses.",
      star: {
        situation: "Researchers needed to quickly extract insights from hundreds of quantum computing papers, but traditional search methods couldn't understand context or synthesize information across multiple sources.",
        task: "Build a private, local AI system capable of processing 400+ research papers, understanding complex quantum computing concepts, and providing accurate answers with source citations.",
        action: "Developed RAG pipeline using Python with LangChain/LlamaIndex frameworks, integrated Ollama for local LLM inference using Qwen model, implemented vector database for semantic search across PDF embeddings, created document processing pipeline for 300-400 PDFs with chunking and metadata extraction, and built query interface for natural language research questions.",
        result: "Successfully deployed private AI research assistant capable of processing high-density academic data at scale, providing accurate answers with source citations from quantum computing literature without external API dependencies."
      },
      image: "/my-portfolio/images/projects/quantum-rag/quantum.png",
      technologies: ["Python", "Ollama", "Qwen", "LangChain", "LlamaIndex", "Vector DB", "RAG"],
      type: "AI/ML System",
      icon: Globe,
      status: "Completed",
      github: "https://github.com/Haiderali27-hub/Paper-generation-Quantum-RAG",
      demo: null,
      color: "from-cyan-500 to-blue-500",
      demoType: "images" as const,
      demoContent: {
        images: [
          "/my-portfolio/images/projects/quantum-rag/quantum.png"
        ]
      }
    },
    {
      title: "Cenaris - Compliance SaaS",
      tagline: "AI-powered compliance management platform for enterprise clients",
      description: "A comprehensive compliance-related SaaS platform built to streamline regulatory compliance and document management for enterprises. Features intelligent document processing using RAG (Retrieval Augmented Generation) architecture, automated compliance checking, and real-time reporting. Built on Azure cloud infrastructure with Python backend and React frontend, using PostgreSQL for robust data management. Demonstrates professional team collaboration and enterprise-grade SaaS development.",
      star: {
        situation: "Enterprises struggled with managing complex compliance requirements across multiple regulations, spending excessive time on manual document review and compliance verification.",
        task: "Design and develop a SaaS platform that automates compliance checking, intelligently processes documents, and provides real-time compliance insights using AI technology.",
        action: "Architected Azure cloud infrastructure for scalable SaaS deployment, developed Python backend with FastAPI for API services, built React frontend for intuitive user experience, integrated RAG system for intelligent document query and compliance checking, implemented PostgreSQL database for secure data storage with encryption, created automated compliance workflows and reporting dashboards, and established multi-tenant architecture for enterprise clients.",
        result: "Successfully built enterprise-grade compliance SaaS platform with AI-powered document processing. Currently in active development with planned production release and client onboarding."
      },
      image: "/my-portfolio/images/projects/cenaris/cenaris.png",
      technologies: ["Python", "React", "Azure", "PostgreSQL", "RAG", "FastAPI", "TypeScript"],
      type: "SaaS Platform",
      icon: Globe,
      status: "Coming Soon",
      github: null,
      demo: null,
      color: "from-green-500 to-emerald-500",
      demoType: "images" as const,
      demoContent: {
        images: [
          "/my-portfolio/images/projects/cenaris/cenaris.png"
        ]
      }
    },
    {
      title: "Pocket Ledger Mobile",
      tagline: "Lightweight FinTech ledger for small business credit tracking",
      description: "A mobile-first financial ledger designed specifically for small business owners and vendors. Built with Flutter and Firebase for real-time synchronization across devices. Features intuitive Material 3 UI design focused on non-technical users, enabling easy tracking of credit, payments, and customer balances. Provides instant insights into business finances with simple, accessible interface.",
      star: {
        situation: "Small business owners and local vendors struggled to track customer credit and payments efficiently, often relying on paper records that were prone to errors and difficult to access on-the-go.",
        task: "Create a mobile-first ledger application with intuitive UX/UI that enables non-technical users to easily track credit, record payments, and view financial summaries in real-time.",
        action: "Developed Flutter mobile app with Material 3 design system for modern, accessible UI, integrated Firebase for real-time data synchronization and cloud backup, implemented simple credit/payment tracking with customer profiles, created visual financial summaries and reports, and designed workflow specifically for non-technical users with minimal learning curve.",
        result: "Working mobile ledger app successfully deployed for small business owners, providing real-time credit tracking with cloud synchronization and user-friendly interface designed for daily business operations."
      },
      image: "/my-portfolio/images/projects/pocket-ledger/ledger.png",
      technologies: ["Flutter", "Firebase", "Dart", "Material 3", "Real-time Sync", "Cloud Firestore"],
      type: "Mobile App",
      icon: Smartphone,
      status: "Working",
      github: "https://github.com/Haiderali27-hub/Pocket-Ledger-Mobile",
      demo: null,
      color: "from-amber-500 to-orange-500",
      demoType: "images" as const,
      demoContent: {
        images: [
          "/my-portfolio/images/projects/pocket-ledger/ledger.png"
        ]
      }
    },
    {
      title: "Hassan Clothing Store",
      tagline: "Modern e-commerce platform bringing traditional fashion online",
      description: "A live clothing brand website built on Shopify. The site features a modern, responsive design, seamless product browsing, and secure checkout. Hassan Cloth brings traditional and contemporary fashion together, making online shopping easy and engaging for customers.",
      star: {
        situation: "A local clothing brand needed an online presence to reach customers beyond their physical location and compete in the digital marketplace.",
        task: "Design and develop a fully functional e-commerce platform that showcases products, handles transactions securely, and provides an exceptional user experience.",
        action: "Built a custom Shopify store with Liquid templating, implemented responsive design, integrated secure payment gateways, and optimized product browsing with filtering and search functionality.",
        result: "Successfully launched live e-commerce platform serving customers nationwide with seamless checkout experience and mobile-responsive design."
      },
      image: "/my-portfolio/images/projects/hassancloth/hassancloth.png",
      technologies: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
      type: "E-commerce Website",
      icon: Globe,
      status: "Live",
      github: null,
      demo: "https://hassancloth.myshopify.com/",
      color: "from-green-500 to-emerald-500",
      demoType: "images" as const,
      demoContent: {
        images: [
          "/my-portfolio/images/projects/hassancloth/preview/1.png",
          "/my-portfolio/images/projects/hassancloth/preview/2.png",
          "/my-portfolio/images/projects/hassancloth/preview/3.png",
          "/my-portfolio/images/projects/hassancloth/preview/4.png"
        ]
      }
    },
    {
      title: "Yasin Heaven Star Hotel",
      tagline: "Full-stack hotel management system with real-time booking",
      description: "A comprehensive hotel management website featuring a modern React frontend and robust Node.js backend with MongoDB database. The platform includes customer booking system, room management, admin dashboard for hotel operations, and is fully deployed with frontend on Netlify and backend on Railway. Features real-time availability, and complete hotel management capabilities.",
      star: {
        situation: "A hotel needed a digital solution to manage bookings, room availability, and customer data efficiently while providing guests an easy online booking experience.",
        task: "Develop a full-stack hotel management system with customer-facing booking portal and admin dashboard for operations management.",
        action: "Built modern React frontend with intuitive UI, developed RESTful API with Node.js/Express, implemented MongoDB for data persistence, created admin dashboard for room and booking management, and deployed frontend on Netlify with backend on Railway.",
        result: "Live production system serving hotel operations with real-time availability updates, seamless booking flow, and comprehensive admin controls."
      },
      image: "/my-portfolio/images/projects/hotel/hotel.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Netlify", "Railway"],
      type: "Full-Stack Web App",
      icon: Globe,
      status: "Live",
      github: null,
      demo: "https://yasinheavenstarhotel.com/",
      color: "from-orange-500 to-red-500",
      demoType: "iframe" as const,
      demoContent: {
        iframeUrl: "https://yasinheavenstarhotel.com/"
      }
    },
    {
      title: "JobApp - Job Application Platform",
      tagline: "Connecting job seekers with opportunities in real-time",
      description: "A modern job application platform built with Flutter for the frontend and Firebase for the backend. The app allows users to browse, search, and apply for jobs in real-time, with secure authentication and cloud data storage. Employers can post jobs and manage applications efficiently.",
      star: {
        situation: "Job seekers needed a mobile-first platform to discover opportunities and apply quickly, while employers needed an efficient way to post jobs and manage applications.",
        task: "Create a cross-platform mobile app with real-time job listings, search functionality, secure authentication, and application management.",
        action: "Developed Flutter mobile app with swipeable job cards UI, integrated Firebase for real-time data sync and authentication, implemented cloud storage for resume uploads, created user profiles with application tracking, and built employer dashboard for job posting.",
        result: "Fully functional job platform with intuitive swipe-based interface, secure user authentication, and real-time job updates."
      },
      image: "/my-portfolio/images/projects/jopapp/jobapp.png",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Storage", "Authentication"],
      type: "Mobile App",
      icon: Smartphone,
      status: "Completed",
      github: null,
      demo: null,
      color: "from-blue-500 to-cyan-500",
      demoType: "images" as const,
      demoContent: {
        images: [
          "/my-portfolio/images/projects/jopapp/preview/Home.png",
          "/my-portfolio/images/projects/jopapp/preview/Home-1.png",
          "/my-portfolio/images/projects/jopapp/preview/Home-2.png",
          "/my-portfolio/images/projects/jopapp/preview/Home-3.png",
          "/my-portfolio/images/projects/jopapp/preview/Home-4.png",
          "/my-portfolio/images/projects/jopapp/preview/Home-5.png",
          "/my-portfolio/images/projects/jopapp/preview/Home-6.png",
          "/my-portfolio/images/projects/jopapp/preview/Home-7.png",
          "/my-portfolio/images/projects/jopapp/preview/My Profile.png",
          "/my-portfolio/images/projects/jopapp/preview/Detailed Card for swiping.png"
        ]
      }
    },
    {
      title: "Listen Up - AI Sound Classification",
      tagline: "AI-powered sound detection for accessibility and safety",
      description: "Listen Up is a cross-platform app built with Flutter for the frontend and Python for the backend, featuring a custom-trained AI for sound classification. The app captures sound from the user, sends it to the backend for analysis, and notifies the user about the detected sound type. PHP and MySQL are used for database management and connectivity.",
      star: {
        situation: "Hearing-impaired individuals struggle to identify important environmental sounds like alarms, doorbells, or emergency sirens, creating safety and accessibility challenges.",
        task: "Develop an AI-powered mobile app that captures environmental sounds, classifies them in real-time, and provides instant notifications to users.",
        action: "Built Flutter mobile app with audio capture functionality, trained custom machine learning model for sound classification using Python, developed RESTful API backend for sound processing, integrated push notifications for real-time alerts, and implemented MySQL database for tracking sound events and user preferences.",
        result: "Functional AI sound detection app capable of identifying and alerting users about critical environmental sounds, enhancing safety and independence for hearing-impaired users."
      },
      image: "/my-portfolio/images/projects/listenupp/listen up.png",
      technologies: ["Flutter", "Python", "AI/ML", "PHP", "MySQL", "Sound Processing"],
      type: "Mobile App",
      icon: Smartphone,
      status: "Completed",
      github: "https://github.com/Haiderali27-hub/listenup",
      demo: null,
      color: "from-purple-500 to-pink-500",
      demoType: "images" as const,
      demoContent: {
        images: [
          "/my-portfolio/images/projects/listenupp/preview/1.png",
          "/my-portfolio/images/projects/listenupp/preview/2.png",
          "/my-portfolio/images/projects/listenupp/preview/3.png",
          "/my-portfolio/images/projects/listenupp/preview/4.png",
          "/my-portfolio/images/projects/listenupp/preview/5.png",
          "/my-portfolio/images/projects/listenupp/preview/6.png",
          "/my-portfolio/images/projects/listenupp/preview/7.png",
          "/my-portfolio/images/projects/listenupp/preview/8.png"
        ]
      }
    },
    {
      title: "Portfolio Website",
      tagline: "Modern portfolio showcasing technical expertise and projects",
      description: "Personal portfolio website showcasing projects and skills. Built with modern React, featuring smooth animations, responsive design, and optimized performance. A comprehensive showcase of my development journey and technical expertise.",
      star: {
        situation: "Needed a professional online presence to showcase projects, skills, and experience to potential employers and collaborators.",
        task: "Create a visually appealing, fast-loading portfolio website with smooth animations, dark mode support, and responsive design.",
        action: "Developed React application with TypeScript for type safety, implemented Tailwind CSS for modern styling, created custom animations and transitions, built component-based architecture with shadcn/ui, added dark mode toggle, and optimized performance with Vite bundler.",
        result: "Live portfolio website with smooth animations, full dark mode support, and mobile-responsive design, successfully deployed on GitHub Pages."
      },
      image: "/my-portfolio/images/projects/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Animations"],
      type: "Web App",
      icon: Globe,
      status: "Live",
      github: null,
      demo: "https://www.vertexsolution.software/",
      color: "from-teal-500 to-blue-500",
      demoType: "iframe" as const,
      demoContent: {
        iframeUrl: "https://www.vertexsolution.software/"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'Working': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'Building': return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'Beta': return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      case 'Coming Soon': return 'bg-orange-500/20 text-orange-400 border-orange-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 reveal opacity-0">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto reveal opacity-0">
              A showcase of my recent work spanning mobile apps, web applications, and innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group bg-card/50 border-border/50 hover-lift overflow-hidden reveal opacity-0`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center glow-primary`}>
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="text-xs mb-1">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-display group-hover:text-gradient-primary transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    {project.tagline}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Project Image */}
                  {project.image && (
                    <div className="w-full h-48 rounded-lg overflow-hidden bg-secondary/20 border border-border/50">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.classList.add(`bg-gradient-to-br`, project.color, 'opacity-20');
                        }}
                      />
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4">
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    <Button 
                      variant="secondary"
                      size="sm" 
                      className="flex-1 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      onClick={() => setSelectedProject(index)}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    {project.demo && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-primary hover:glow-primary transition-all duration-300"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.demo.includes('releases') ? 'Releases' : 'Live'}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center reveal opacity-0">
            <Card className="bg-gradient-secondary border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-display mb-4 text-gradient-accent">
                  Want to see more?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Check out my GitHub for additional projects, contributions, and code samples.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:glow-primary transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/Haiderali27-hub" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    View GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Project Demo Modal */}
      {selectedProject !== null && (
        <ProjectDemo
          project={projects[selectedProject]}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};