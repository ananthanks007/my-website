import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Atom, Calculator, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Numerical Simulation of Electron Center of Mass",
      description: "Group mini-project to simulate random distribution of electrons in a cubic space (side: 10 Å). Used random number generators to calculate the center of mass for sets of 100, 1000, and 10000 electrons.",
      technologies: ["Python", "Numerical Methods", "Random Distributions", "Statistical Analysis"],
      type: "Research Project",
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: "Mathematical Physics Modeling",
      description: "Applied mathematical methods to solve complex physics problems, including differential equations and computational simulations for quantum mechanical systems.",
      technologies: ["Mathematical Modeling", "LaTeX", "Computational Physics"],
      type: "Academic Work",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Laboratory Experiments & Data Analysis",
      description: "Conducted various physics experiments using modern equipment and analyzed data to validate theoretical predictions in electronics and quantum physics.",
      technologies: ["Electronics", "Data Analysis", "Experimental Design"],
      type: "Laboratory",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-physics-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the fascinating world of physics through hands-on research projects and computational simulations.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-physics-accent rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Future Projects Call to Action */}
          <div className="mt-16 text-center">
            <Card className="border-none shadow-lg bg-gradient-to-br from-muted to-accent/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Future Research Interests</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm actively seeking opportunities to collaborate on research projects in quantum mechanics, 
                  particle physics, and computational modeling. Interested in exploring advanced topics like 
                  quantum entanglement, particle interactions, and theoretical physics applications.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge className="bg-primary text-primary-foreground">Quantum Computing</Badge>
                  <Badge className="bg-physics-accent text-white">Particle Simulations</Badge>
                  <Badge className="bg-quantum-teal text-white">Theoretical Physics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;