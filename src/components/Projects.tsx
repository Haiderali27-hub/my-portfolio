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
      title: "Hassan Clothing Store",
      description: "A live clothing brand website built on Shopify. The site features a modern, responsive design, seamless product browsing, and secure checkout. Hassan Cloth brings traditional and contemporary fashion together, making online shopping easy and engaging for customers.",
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
      description: "A comprehensive hotel management website featuring a modern React frontend and robust Node.js backend with MongoDB database. The platform includes customer booking system, room management, admin dashboard for hotel operations, and is fully deployed with frontend on Netlify and backend on Railway. Features real-time availability, and complete hotel management capabilities.",
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
      description: "A modern job application platform built with Flutter for the frontend and Firebase for the backend. The app allows users to browse, search, and apply for jobs in real-time, with secure authentication and cloud data storage. Employers can post jobs and manage applications efficiently.",
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
      description: "Listen Up is a cross-platform app built with Flutter for the frontend and Python for the backend, featuring a custom-trained AI for sound classification. The app captures sound from the user, sends it to the backend for analysis, and notifies the user about the detected sound type. PHP and MySQL are used for database management and connectivity.",
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
      description: "Personal portfolio website showcasing projects and skills. Built with modern React, featuring smooth animations, responsive design, and optimized performance. A comprehensive showcase of my development journey and technical expertise.",
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
      case 'In Development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'Beta': return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
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
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Project Image Placeholder */}
                  <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.color} opacity-20 flex items-center justify-center`}>
                    <project.icon className="h-16 w-16 text-white/50" />
                  </div>

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
                          Live
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