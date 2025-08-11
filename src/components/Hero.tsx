import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ParticleSystem = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = particle.style.height = Math.random() * 4 + 1 + 'px';
      particle.style.animationDuration = Math.random() * 3 + 2 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return <div ref={particlesRef} className="particles" />;
};

const MatrixRain = () => {
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
    
    const createColumn = () => {
      if (!matrixRef.current) return;
      
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = Math.random() * 100 + '%';
      column.style.animationDuration = Math.random() * 5 + 5 + 's';
      column.style.animationDelay = Math.random() * 2 + 's';
      
      let text = '';
      for (let i = 0; i < Math.random() * 20 + 10; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
      }
      column.innerHTML = text;
      
      matrixRef.current.appendChild(column);
      
      setTimeout(() => {
        column.remove();
      }, 10000);
    };

    const interval = setInterval(createColumn, 500);
    return () => clearInterval(interval);
  }, []);

  return <div ref={matrixRef} className="matrix-rain opacity-10" />;
};

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20"
    >
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>
      
      {/* Matrix Rain Effect */}
      <MatrixRain />
      
      {/* Particle System */}
      <ParticleSystem />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full float animate-delay-1000 pulse-glow"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full float animate-delay-2000 pulse-glow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full float animate-delay-3000 pulse-glow"></div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Greeting */}
          <div className="reveal opacity-0">
            <p className="text-accent font-mono text-lg mb-4 animate-fade-in">
              Hello, World! 👋
            </p>
          </div>

          {/* Name */}
          <div className="reveal opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              <span className="text-gradient-primary animate-text-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] glitch" data-text="Muhammad Haider Ali">
                Muhammad Haider Ali
              </span>
            </h1>
          </div>

          {/* Title */}
          <div className="reveal opacity-0">
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8">
              Software Engineering Student
              <span className="block text-lg md:text-xl font-normal mt-2 text-accent">
                3rd Year • Building Tomorrow's Tech Today
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="reveal opacity-0">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative mobile and web applications using 
              <span className="text-primary font-semibold"> Flutter</span>,
              <span className="text-primary font-semibold"> React Native</span>,
              <span className="text-primary font-semibold"> React</span>, and
              <span className="text-primary font-semibold"> Shopify</span>.
              Let's build something amazing together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="reveal opacity-0">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:glow-primary transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-6 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="reveal opacity-0">
            <div className="flex justify-center space-x-6 mt-12">
              <a 
                href="https://github.com/Haiderali27-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
              >
                <Github className="h-8 w-8" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mhaiderali2710/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
              >
                <Mail className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 reveal opacity-0">
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};