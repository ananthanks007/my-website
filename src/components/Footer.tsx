import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-physics-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AK</span>
                </div>
                <span className="font-semibold text-lg">Ananthan K S</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Undergraduate Physics student passionate about Quantum Mechanics, 
                Particle Physics, and contributing to meaningful academic research.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Achievements
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-3 mb-4">
                <a 
                  href="https://github.com/ananthanks007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/ananthan-ks-948628259" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:ananthanks12@gmail.com"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Open to research collaborations and academic discussions.
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Ananthan K S. Built with passion for physics and research.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;