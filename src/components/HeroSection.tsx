import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import ananthanPortrait from "@/assets/ananthan-photo.jpg";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-light/10 to-accent/20"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-physics-accent/20 rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-quantum-teal rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-physics-accent font-medium text-lg">Physics Student & Aspiring Researcher</p>
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hey! I Am
                </h1>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Ananthan K S
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">I'm a dedicated Physics student passionate about Quantum Mecanics and Particle Physics and an aspiring Researcher</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => scrollToSection("about")}>
                Read More
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => scrollToSection("projects")}>
                <Play className="w-4 h-4" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8">
              <p className="text-sm text-muted-foreground">Follow me</p>
              <div className="flex gap-3">
                <a href="https://github.com/ananthanks007" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/ananthan-ks-948628259" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-physics-accent/30 to-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-quantum-teal/20 to-accent/30 rounded-full blur-2xl"></div>
            
            {/* Main Profile Image */}
            <div className="relative z-10 max-w-md mx-auto">
              <div className="relative">
                <img src={ananthanPortrait} alt="Ananthan K S - Physics Student" className="w-full h-auto rounded-3xl shadow-2xl object-cover" />
                
                {/* Physics Badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border-4 border-background rounded-2xl px-6 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-physics-accent rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">Φ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">Physics</p>
                      <p className="text-xs text-muted-foreground">Quantum & Particle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;