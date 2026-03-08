import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    const elements = skillsRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Core Technologies",
      icon: "💻",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      borderColor: "border-blue-500/50",
      badgeColor: "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-blue-500/40",
      skills: ["Python", "C++", "Dart", "JavaScript", "TypeScript", "C#", ".NET", "MS SQL"]
    },
    {
      title: "Mobile Development",
      icon: "📱",
      gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
      borderColor: "border-purple-500/50",
      badgeColor: "bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-purple-500/40",
      skills: ["Flutter", "React Native", "Android Studio", "iOS Development", "Firebase"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      borderColor: "border-green-500/50",
      badgeColor: "bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-500/40",
      skills: ["React", "Node.js", "Express.js", "HTML/CSS", "Tailwind CSS", "MongoDB", "REST APIs"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/50",
      badgeColor: "bg-gradient-to-r from-orange-500/30 to-amber-500/30 border-orange-500/40",
      skills: ["Docker", "Git/GitHub", "CI/CD", "AWS", "Railway", "Netlify"]
    },
    {
      title: "E-commerce & APIs",
      icon: "🛍️",
      gradient: "from-red-500/20 via-rose-500/20 to-pink-500/20",
      borderColor: "border-red-500/50",
      badgeColor: "bg-gradient-to-r from-red-500/30 to-rose-500/30 border-red-500/40",
      skills: ["Shopify", "Shopify Liquid", "Postman", "API Integration", "Payment Processing"]
    },
    {
      title: "GenAI & Community",
      icon: "🤖",
      gradient: "from-violet-500/20 via-indigo-500/20 to-blue-500/20",
      borderColor: "border-violet-500/50",
      badgeColor: "bg-gradient-to-r from-violet-500/30 to-indigo-500/30 border-violet-500/40",
      skills: ["Claude AI", "LLM Prompting", "AI Integration", "Technical Mentorship", "Event Management", "Workshop Facilitation"]
    }
  ];

  const additionalSkills = [
    "Problem Solving", "Data Structures", "Algorithms", "Object-Oriented Programming",
    "Responsive Design", "Version Control", "Database Design", "UI/UX Design",
    "Agile Development", "Testing", "Code Review", "Customer Service", "API Testing"
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 reveal opacity-0">
              Skills & <span className="text-gradient-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto reveal opacity-0">
              A comprehensive toolkit for building modern applications across platforms.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm border-2 ${category.borderColor} hover-lift reveal opacity-0 slide-in-${categoryIndex % 2 === 0 ? 'left' : 'right'} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3 animate-bounce-slow">{category.icon}</span>
                    <h3 className="text-xl font-bold font-display bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className={`px-3 py-1.5 text-sm font-medium ${category.badgeColor} hover:scale-110 transition-all duration-300 hover-lift border-2 shadow-lg`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center reveal opacity-0">
            <h3 className="text-2xl font-bold font-display mb-8">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {additionalSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className={`px-4 py-2 text-sm font-medium bg-gradient-to-r ${
                    index % 6 === 0 ? 'from-blue-500/20 to-cyan-500/20 border-blue-500/40' :
                    index % 6 === 1 ? 'from-purple-500/20 to-pink-500/20 border-purple-500/40' :
                    index % 6 === 2 ? 'from-green-500/20 to-emerald-500/20 border-green-500/40' :
                    index % 6 === 3 ? 'from-orange-500/20 to-amber-500/20 border-orange-500/40' :
                    index % 6 === 4 ? 'from-red-500/20 to-rose-500/20 border-red-500/40' :
                    'from-violet-500/20 to-indigo-500/20 border-violet-500/40'
                  } hover:scale-110 transition-all duration-300 hover-lift border-2 shadow-md hover:shadow-lg`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="mt-16 text-center reveal opacity-0">
            <Card className="bg-gradient-secondary border-border/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-display mb-4 text-gradient-accent">
                  Currently Learning
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always expanding my skillset and staying current with industry trends.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 glow-primary">
                    Node.js
                  </Badge>
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 glow-primary">
                    DevOps
                  </Badge>
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 glow-primary">
                    Docker
                  </Badge>
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 glow-primary">
                    AWS
                  </Badge>
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 glow-primary">
                    CI/CD
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};