import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const skills = [
    { category: "Programming & Computing", items: ["Python Programming", "Data Science", "Linux Terminal", "Numerical Methods", "Prompt Engineering"] },
    { category: "Software & Tools", items: ["LaTeX", "Phyphox", "Tracker", "Geogebra", "Mathematical Modeling"] },
    { category: "Laboratory & Technical", items: ["Electronics", "Experimental Design", "Data Analysis"] }
  ];

  const education = [
    {
      degree: "BSc Physics Honors",
      institution: "Christ College (Autonomous), Irinjalakuda",
      university: "University of Calicut, Thrissur",
      period: "2024 – Present",
      grade: "SGPA: 9.20/10.0 (Second Semester), 8.96/10.0 (First Semester)"
    },
    {
      degree: "Class 12 – Science (Computer Science)",
      institution: "St. Antony's HSS, Mala",
      university: "Kerala Higher Secondary Board",
      period: "2023",
      grade: "Scored 99.08%, secured 1st rank in Computer Science stream"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-physics-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio & Education */}
            <div className="space-y-8">
              {/* Bio */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I am a second-year undergraduate Physics student with a strong interest in 
                    <span className="text-physics-accent font-semibold"> Quantum Mechanics</span> and 
                    <span className="text-quantum-teal font-semibold"> Particle Physics</span>. 
                    I am actively pursuing online certifications and engaging in hands-on projects 
                    to enhance my research skills.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                    My goal is to contribute meaningfully to the field through impactful academic 
                    research in the future, focusing on the fundamental nature of matter and energy.
                  </p>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-4 border-physics-accent pl-6 pb-6">
                        <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.university}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                        <p className="text-sm font-medium text-physics-accent mt-2">{edu.grade}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Skills & Expertise</h3>
                  <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground mb-3">{skillGroup.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary"
                              className="bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Download CV Button */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-physics-accent text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Interested in my work?</h3>
                  <p className="mb-6 opacity-90">Download my complete academic CV for detailed information.</p>
                  <button 
                    onClick={() => window.open('/cv.pdf', '_blank')}
                    className="bg-background text-primary hover:bg-background/90 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Download CV
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;