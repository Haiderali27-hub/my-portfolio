import { Card, CardContent } from '@/components/ui/card';
import { Award, Brain, Code, Palette, Smartphone, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern frameworks and clean architecture"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating cross-platform mobile apps with Flutter and React Native"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Algorithmic thinking with C++ and Python for competitive programming"
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Crafting beautiful, intuitive interfaces that users love"
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 reveal opacity-0">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto reveal opacity-0">
              I'm a passionate software engineering student who loves turning ideas into reality through code.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Personal Story */}
            <div className="space-y-6 reveal-left opacity-0">
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Currently in my <span className="text-primary font-semibold">3rd year</span> of Software Engineering, 
                  I've been on an incredible journey of discovery and growth. My passion for technology started early, 
                  and it has only grown stronger with each project I tackle.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in <span className="text-accent font-semibold">mobile development</span> with Flutter and React Native, 
                  <span className="text-accent font-semibold"> full-stack web development</span> with the MERN stack (MongoDB, Express.js, React, Node.js), 
                  and have a strong foundation in <span className="text-accent font-semibold"> algorithms</span> using C++ and Python. I've worked extensively with 
                  <span className="text-accent font-semibold">Firebase</span> for backend services, <span className="text-accent font-semibold">Postman</span> for API testing, 
                  and <span className="text-accent font-semibold">Shopify</span> for e-commerce development.
                </p>
                <p className="text-lg leading-relaxed">
                  What drives me is the ability to create solutions that make a real impact. Whether it's a mobile app 
                  that simplifies someone's daily routine or a web application that connects people, I believe technology 
                  should enhance human experiences. My experience in customer service has taught me to truly understand user needs and create solutions that matter.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>

            {/* Tech Philosophy */}
            <div className="reveal-right opacity-0">
              <Card className="bg-gradient-secondary border-border/50 hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-display mb-6 text-gradient-accent">
                    My Development Philosophy
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Clean Code:</strong> Write code that humans can read and maintain
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">User-Centric:</strong> Always prioritize user experience and accessibility
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Continuous Learning:</strong> Stay updated with latest technologies and best practices
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Problem Solving:</strong> Break down complex problems into manageable solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className={`bg-card/50 border-border/50 hover-lift reveal opacity-0 bounce-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 glow-primary pulse-glow">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold font-display mb-2 animated-underline">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership & Ambassador Section */}
          <div className="mb-16 reveal opacity-0">
            <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/30 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-3xl font-bold font-display text-gradient-primary">
                    Leadership & Community Impact
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* MLSA Technical Lead */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
                        <Users className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Microsoft Learn Student Ambassador</h4>
                        <p className="text-sm text-accent font-semibold mb-2">Technical Lead</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Led technical workshops and mentored students in modern development practices. 
                          Organized community events, hackathons, and study groups that helped bridge the gap 
                          between academic theory and industry-ready technical skills.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Community Builder */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
                        <Brain className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Technical Mentor & Event Organizer</h4>
                        <p className="text-sm text-accent font-semibold mb-2">Community Builder</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Passionate about empowering fellow students through hands-on learning experiences. 
                          Facilitated coding bootcamps, led Git workshops, and created mentorship programs 
                          that transformed beginners into confident developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="bg-background/50 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-bold mb-4 text-center">Key Achievements</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">50+</div>
                      <div className="text-sm text-muted-foreground">Students Mentored</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">10+</div>
                      <div className="text-sm text-muted-foreground">Workshops Organized</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">5+</div>
                      <div className="text-sm text-muted-foreground">Community Events</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Placeholder */}
                <div className="mt-6 text-center">
                  <blockquote className="text-muted-foreground italic">
                    "Empowering developers through knowledge sharing and building communities that thrive on collaboration and continuous learning."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests & Hobbies */}
          <div className="reveal opacity-0">
            <Card className="bg-gradient-secondary border-border/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-display mb-6 text-center text-gradient-accent">
                  Beyond Code
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  When I'm not coding, you'll find me exploring other passions that keep me creative and balanced.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎬</div>
                    <h4 className="font-semibold mb-1">Movies & TV Shows</h4>
                    <p className="text-sm text-muted-foreground">Storytelling enthusiast</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎮</div>
                    <h4 className="font-semibold mb-1">Gaming</h4>
                    <p className="text-sm text-muted-foreground">Strategy & adventure games</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏔️</div>
                    <h4 className="font-semibold mb-1">Hiking & Camping</h4>
                    <p className="text-sm text-muted-foreground">Nature explorer</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📚</div>
                    <h4 className="font-semibold mb-1">History</h4>
                    <p className="text-sm text-muted-foreground">Learning from the past</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};