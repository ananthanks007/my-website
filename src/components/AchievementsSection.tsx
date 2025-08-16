import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, BookOpen, ScrollText } from "lucide-react";

const AchievementsSection = () => {
  const awards = [
    {
      title: "State Level Mathematics Quiz",
      status: "Runner Up",
      year: "2025",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: "State Level Inter Collegiate Science Quiz",
      status: "Winner",
      year: "2025",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: "E.K.N Memorial Inter-Collegiate Physics Quiz",
      status: "2nd Runner Up", 
      year: "2024",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Calicut University Interzone Chess",
      status: "Champion",
      year: "2024",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: "First Rank in Computer Science Stream",
      status: "Kerala Higher Secondary Board",
      year: "2023",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const certifications = [
    {
      title: "An Introduction to Laser and Laser Systems",
      provider: "NPTEL Elite Certificate, IIT Bombay",
      subject: "Laser Physics",
      date: "May 2025",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Quantum Computing",
      provider: "CDAC Hyderabad & IIT Roorkee",
      subject: "Quantum Computing",
      date: "Jun 2025",
      icon: <ScrollText className="w-5 h-5" />
    },
    {
      title: "Mathematical Methods in Physics 1",
      provider: "NPTEL Certificate, IISER Bhopal",
      subject: "Mathematical Physics",
      date: "Mar 2025",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "International Workshop on Sensors and Actuators",
      provider: "C-MET",
      subject: "Advanced Instrumentation",
      date: "2024",
      icon: <ScrollText className="w-5 h-5" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Achievements & Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-physics-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition for academic excellence and continuous learning in physics and related fields.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Awards & Honors */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-physics-accent" />
                Awards & Honors
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-physics-accent rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                          {award.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground leading-tight mb-2">
                            {award.title}
                          </h4>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-physics-accent text-white text-xs">
                              {award.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm font-medium text-primary">
                              {award.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
                <ScrollText className="w-6 h-6 text-quantum-teal" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-quantum-teal to-accent rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          {cert.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground leading-tight mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-primary font-medium mb-1">
                            {cert.provider}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {cert.subject}
                            </Badge>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">
                              {cert.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Stats */}
          <div className="mt-16">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-physics-accent text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Academic Excellence</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">9.20</div>
                    <div className="text-sm opacity-90">Current SGPA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">99.08%</div>
                    <div className="text-sm opacity-90">Class 12 Score</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">1st</div>
                    <div className="text-sm opacity-90">Rank in Computer Science</div>
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

export default AchievementsSection;