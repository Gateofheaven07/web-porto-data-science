"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-32 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background border-b-4 border-foreground">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>

      {/* Decorative wild shapes representing 'Stable Grid, Wild Decoration' */}
      <div className="absolute top-12 left-10 md:left-20 w-24 h-24 bg-secondary rounded-full border-2 border-foreground shadow-pop hidden sm:block animate-wiggle" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-16 right-10 md:right-24 w-32 h-32 bg-quaternary blob-speech border-2 border-foreground shadow-pop hidden sm:block animate-wiggle" style={{ animationDelay: '0.4s' }}></div>
      <div className="absolute top-32 right-12 md:right-32 w-16 h-16 bg-accent rounded-sm rotate-12 border-2 border-foreground shadow-pop hidden lg:block animate-wiggle" style={{ animationDelay: '0.8s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center relative">
          
          {/* Massive yellow circle decoration dropped down to not overlap heading */}
          <div className="absolute top-[80%] sm:top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[320px] sm:w-[550px] sm:h-[500px] bg-tertiary rounded-full -z-10 blob-arch pointer-events-none opacity-80 border-4 border-foreground shadow-pop mix-blend-normal"></div>

          <div className="mb-6 inline-block"></div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-foreground mb-12 sm:mb-16 text-center leading-[1.2] sm:leading-[1.15]">
            Data Science & <br className="hidden sm:block" />
            <span className="block sm:inline">Machine Learning</span>
          </h1>

          <div className="relative translate-y-8 sm:translate-y-12 z-20">
            <p className="text-lg sm:text-xl text-foreground font-medium max-w-2xl mx-auto mb-10 leading-relaxed bg-white/80 backdrop-blur-sm border-2 border-foreground rounded-2xl p-6 shadow-soft-pop">
              Membangun sistem cerdas dan menemukan wawasan dari data. Mengkhususkan diri dalam pembelajaran mendalam, peramalan deret waktu, dan analisis prediktif.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/projects" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto gap-2 group">
                View My Work
                <span className="bg-white text-accent rounded-full p-0.5 inline-flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" strokeWidth={3} />
                </span>
              </Button>
            </Link>
            <a href="mailto:contact@example.com" tabIndex={-1}>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 group border-2 border-foreground bg-white shadow-pop">
                <span className="bg-foreground text-white rounded-full p-1 inline-flex items-center justify-center">
                  <Mail className="w-4 h-4" strokeWidth={2.5} />
                </span>
                Get in Touch
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Gateofheaven07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-white border-2 border-foreground rounded-full shadow-pop hover:-translate-y-1 hover:shadow-pop-hover transition-all text-foreground"
            >
              <Github className="w-6 h-6" strokeWidth={2.5} />
            </a>
            <a
              href="https://linkedin.com/in/taufikramlan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-tertiary border-2 border-foreground rounded-full shadow-pop hover:-translate-y-1 hover:shadow-pop-hover transition-all text-foreground"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
