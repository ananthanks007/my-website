import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ananthanks12@gmail.com",
      link: "mailto:ananthanks12@gmail.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/ananthanks007",
      link: "https://github.com/ananthanks007"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ananthan-ks-948628259",
      link: "https://linkedin.com/in/ananthan-ks-948628259"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kerala, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-physics-accent/20 rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-quantum-teal rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-physics-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in collaboration, research opportunities, or just want to connect? 
              I'd love to hear from fellow researchers and physics enthusiasts!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-physics-accent rounded-lg flex items-center justify-center text-primary-foreground">
                          {contact.icon}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{contact.label}</p>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Research Interests */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-muted to-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">Research Interests</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-physics-accent rounded-full"></div>
                      Quantum Mechanics & Quantum Computing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-quantum-teal rounded-full"></div>
                      Particle Physics & High Energy Physics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Computational Physics & Numerical Methods
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-physics-accent rounded-full"></div>
                      Mathematical Physics & Theoretical Models
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        id="firstName"
                        placeholder="Your first name" 
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        id="lastName"
                        placeholder="Your last name" 
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="What's this about?" 
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Your message..." 
                      rows={4}
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;