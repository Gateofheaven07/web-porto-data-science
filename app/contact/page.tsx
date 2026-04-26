import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact | Data Science Portfolio",
  description: "Get in touch with me for data science, machine learning, and AI projects.",
};

export default function ContactPage() {
  const email = "taupikramlan3590@gmail.com";
  
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Gateofheaven07",
      icon: <Github className="w-6 h-6" />,
      color: "bg-white",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin className="w-6 h-6" />,
      color: "bg-blue-100",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/taufikrmlnn",
      icon: <Instagram className="w-6 h-6" />,
      color: "bg-pink-100",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full -z-10 border-4 border-foreground mix-blend-multiply opacity-70"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-secondary rounded-full -z-10 border-4 border-foreground mix-blend-multiply opacity-70"></div>

      <div className="max-w-3xl mx-auto relative z-10 pt-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold font-heading text-foreground mb-6">
            Let's Connect!
          </h1>
          <p className="text-xl text-foreground font-medium max-w-xl mx-auto bg-white/80 backdrop-blur-sm border-2 border-foreground rounded-2xl p-6 shadow-soft-pop">
            Tertarik untuk berkolaborasi dalam project data science, diskusi seputar AI, atau sekadar menyapa? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-tertiary border-4 border-foreground shadow-pop rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 hover:shadow-pop-hover">
            <div className="w-16 h-16 bg-white border-4 border-foreground shadow-pop rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Email Me</h2>
            <p className="text-foreground font-medium mb-8">
              Kirimkan pesan langsung ke email pribadi saya.
            </p>
            <a href={`mailto:${email}`} className="mt-auto w-full">
              <Button className="w-full h-14 text-lg border-2 border-foreground shadow-pop hover:-translate-y-1 hover:shadow-pop-hover bg-white text-foreground hover:bg-slate-50 transition-all font-bold">
                {email}
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="bg-white border-4 border-foreground shadow-pop rounded-2xl p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Social Media</h2>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 border-2 border-foreground rounded-xl shadow-sm hover:shadow-pop hover:-translate-y-1 hover:bg-slate-50 transition-all font-bold text-foreground ${social.color}`}
                >
                  {social.icon}
                  <span className="text-lg">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
