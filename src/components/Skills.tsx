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
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Flutter", level: 90, color: "bg-blue-500" },
        { name: "React Native", level: 85, color: "bg-cyan-500" },
        { name: "Android Studio", level: 80, color: "bg-green-500" },
        { name: "iOS Development", level: 75, color: "bg-gray-500" }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "React", level: 90, color: "bg-blue-400" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "TypeScript", level: 82, color: "bg-blue-600" }
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", level: 85, color: "bg-purple-500" },
        { name: "Python", level: 80, color: "bg-green-400" },
        { name: "Dart", level: 90, color: "bg-teal-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-600" },
        { name: "VS Code", level: 95, color: "bg-blue-500" },
        { name: "Firebase", level: 85, color: "bg-orange-400" },
        { name: "Shopify", level: 82, color: "bg-green-600" }
      ]
    },
    {
      title: "E-commerce & APIs",
      icon: "🛍️",
      skills: [
        { name: "Postman", level: 88, color: "bg-orange-500" },
        { name: "REST APIs", level: 85, color: "bg-red-500" },
        { name: "Shopify Liquid", level: 78, color: "bg-green-500" },
        { name: "Payment Integration", level: 80, color: "bg-blue-400" }
      ]
    }
  ];

  const additionalSkills = [
    "Problem Solving", "Data Structures", "Algorithms", "Object-Oriented Programming",
    "Responsive Design", "Version Control", "Database Design", "API Integration",
    "UI/UX Design", "Agile Development", "Testing", "Code Review", "Customer Service", 
    "API Testing", "E-commerce Development", "Shopify Development", "Payment Processing"
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
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className={`bg-card/50 border-border/50 hover-lift reveal opacity-0 slide-in-${categoryIndex % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-bold font-display">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 ${skill.color} rounded-full transition-all duration-1000 ease-out glow-primary`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                            }}
                          ></div>
                        </div>
                      </div>
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
                  className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary transition-colors duration-300 hover-lift border border-border/50"
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