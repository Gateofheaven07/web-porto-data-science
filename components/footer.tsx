export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-foreground bg-background mt-16 relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-quaternary rounded-full -z-10 translate-x-1/3 -translate-y-1/2 border-4 border-foreground opacity-50 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 bg-white border-4 border-foreground shadow-pop rounded-2xl p-8">
          <div>
            <h3 className="font-extrabold font-heading text-xl mb-4 text-foreground">Data Science Portfolio</h3>
            <p className="text-base text-foreground font-medium">
              Showcasing machine learning projects, data analysis, and AI solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-base font-medium text-foreground hover:text-accent hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-base font-medium text-foreground hover:text-accent hover:underline transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base font-medium text-foreground hover:text-accent hover:underline transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg text-foreground">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground hover:text-accent hover:underline transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground hover:text-accent hover:underline transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground hover:text-accent hover:underline transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-base font-bold text-foreground text-center">
            © {currentYear} Data Science Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
