"use client";

import { useEffect, useState } from "react";

const recentWork = [
  {
    name: "Griv",
    tagline: "Social Fitness Accountability",
    description: "A social app that keeps you accountable to your fitness goals through friends and community.",
    link: "https://x.com/igoryuzo/status/1943733111579148714",
  },
  {
    name: "Slingshot",
    tagline: "AI-Powered Launchpad",
    description: "A launchpad with an AI agent you can chat with directly in your social feed.",
    link: "https://x.com/farcaster_xyz/status/2013288273565593824",
  },
];

const pivots = [
  {
    name: "Peeple",
    tagline: "Live Streaming + Prediction Markets",
    description: "Final iteration combining livestreaming with real-time prediction markets. Integrated Coinbase and Privy (now Stripe) for seamless onboarding, and payments.",
    link: "https://x.com/peeple_official/status/1866187092231160125",
  },
  {
    name: "Onthis",
    tagline: "No-Code Blockchain Tools",
    description: "Pivoted to no-code tools. Partnered with Chainlink, a multi-billion enterprise to enable non-technical users to deploy onchain.",
    link: "https://x.com/peeple_official/status/1757442030802764181",
  },
  {
    name: "Defrag",
    tagline: "DeFi Lending Protocol",
    description: "Initial product—a decentralized lending protocol enabling trustless borrowing and lending.",
    link: "https://x.com/peeple_official/status/1679214178173689856",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-void">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-8">
        {/* Top nav */}
        <nav className="flex justify-between items-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="font-mono text-xs text-ash tracking-wider">
            PORTFOLIO
          </div>
          <div className="flex gap-6">
            <a
              href="https://x.com/igoryuzo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ash hover:text-accent transition-colors duration-300 tracking-wider"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/igoryuzo/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ash hover:text-accent transition-colors duration-300 tracking-wider"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/igoryuzo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ash hover:text-accent transition-colors duration-300 tracking-wider"
            >
              GITHUB
            </a>
          </div>
        </nav>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.02em] text-chalk">
              Igor Yuzovitskiy
            </h1>
          </div>

          <div className="mt-10 max-w-2xl animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-xl md:text-2xl text-bone font-light leading-relaxed">
              Founder who raised <span className="text-accent">$1M+</span> and drove <span className="text-accent">$5M+</span> in transaction volume. Former Partner at a <span className="text-accent">$1B+ AUM</span> firm. Now shipping consumer products solo—<span className="text-accent">1,500 MAUs</span> across 2 apps.
            </p>
          </div>

          <div className="mt-12 flex gap-8 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#work"
              className="group flex items-center gap-3 text-bone hover:text-accent transition-colors duration-300"
            >
              <span className="font-mono text-sm tracking-wide">VIEW WORK</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 animate-pulse-slow">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-ash to-transparent" />
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="work" className="px-6 md:px-12 lg:px-24 py-32 border-t border-slate">
        <div className="max-w-4xl">
          <div className="font-mono text-xs text-ash tracking-wider mb-4">RECENT WORK</div>
          <h2 className="font-display text-5xl md:text-6xl text-chalk mb-6">
            Independent Projects
          </h2>
          <p className="text-xl text-silver mb-4">
            2025–Present · 1,500 MAUs at peak
          </p>
          <p className="text-lg text-silver/80 max-w-2xl mb-12">
            Consumer products I built and shipped solo over the past year.
          </p>

          <div className="space-y-8">
            {recentWork.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-l-2 border-slate hover:border-accent pl-8 py-4 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-2xl md:text-3xl text-chalk group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-ash group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <p className="text-silver mb-2">{project.tagline}</p>
                <p className="text-silver/70 text-sm max-w-xl">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Peeple Section */}
      <section className="px-6 md:px-12 lg:px-24 py-32 border-t border-slate">
        <div className="max-w-4xl">
          <div className="font-mono text-xs text-ash tracking-wider mb-4">FEATURED WORK</div>
          <h2 className="font-display text-5xl md:text-6xl text-chalk mb-6">
            Peeple
          </h2>
          <p className="text-xl text-silver mb-4">
            Co-Founder & Product Lead · 2022–2025
          </p>
          <p className="text-lg text-silver/80 max-w-2xl mb-12">
            Built and led a 4-person team through 3 product pivots, raising $1M+ in venture capital and driving $5M+ in platform transaction volume.
          </p>

          {/* Pivot timeline */}
          <div className="space-y-8">
            {pivots.map((pivot, index) => (
              <a
                key={pivot.name}
                href={pivot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-l-2 border-slate hover:border-accent pl-8 py-4 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-ash">
                    {index === 0 ? "FINAL" : index === 1 ? "PIVOT 2" : "PIVOT 1"}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-chalk group-hover:text-accent transition-colors duration-300">
                    {pivot.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-ash group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <p className="text-silver mb-2">{pivot.tagline}</p>
                <p className="text-silver/70 text-sm max-w-xl">{pivot.description}</p>
              </a>
            ))}
          </div>

          {/* Key metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate">
            <div>
              <div className="font-display text-2xl text-accent">$1M+</div>
              <div className="font-mono text-xs text-ash mt-1">RAISED</div>
            </div>
            <div>
              <div className="font-display text-2xl text-chalk">$5M+</div>
              <div className="font-mono text-xs text-ash mt-1">VOLUME</div>
            </div>
            <div>
              <div className="font-display text-2xl text-chalk">3</div>
              <div className="font-mono text-xs text-ash mt-1">PIVOTS</div>
            </div>
            <div>
              <div className="font-display text-2xl text-chalk">4</div>
              <div className="font-mono text-xs text-ash mt-1">TEAM SIZE</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-24 py-32 bg-ink">
        <div className="max-w-3xl">
          <div className="font-mono text-xs text-ash tracking-wider mb-4">ABOUT</div>
          <h2 className="font-display text-5xl md:text-6xl text-chalk mb-12">
            The Short Version
          </h2>
          <div className="space-y-6 text-lg text-silver leading-relaxed">
            <p>
              Started in finance. Made Partner at an investment firm and helped scale it past $1B in assets. Left to build products.
            </p>
            <p>
              Co-founded a startup, raised capital, shipped 3 different products chasing product-market fit. Learned what works and what doesn&apos;t.
            </p>
            <p className="text-bone">
              Now I&apos;m building solo. I use AI tools to 10x my output—what used to take a team now takes me a weekend.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-24 py-32 bg-ink">
        <div className="max-w-4xl">
          <div className="font-mono text-xs text-ash tracking-wider mb-4">CONNECT</div>
          <div className="flex items-center gap-6 mb-8">
            <h2 className="font-display text-5xl md:text-6xl text-chalk">
              Let&apos;s Talk
            </h2>
            <a
              href="https://calendly.com/igor-yuzovitskiy/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-accent bg-accent/10 px-4 py-2 hover:bg-accent hover:text-void transition-all duration-300"
            >
              <svg className="w-4 h-4 text-accent group-hover:text-void transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-mono text-sm text-accent group-hover:text-void transition-colors">Book a call</span>
            </a>
          </div>
          <p className="text-lg text-silver mb-12 max-w-xl">
            Open to discussing new opportunities, partnerships, or interesting problems to solve.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="https://x.com/igoryuzo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-slate px-6 py-4 hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-ash group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-mono text-sm text-bone group-hover:text-accent transition-colors">@igoryuzo</span>
              </div>
              <svg
                className="w-4 h-4 text-ash group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/igoryuzo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-slate px-6 py-4 hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-ash group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-mono text-sm text-bone group-hover:text-accent transition-colors">LinkedIn</span>
              </div>
              <svg
                className="w-4 h-4 text-ash group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="https://github.com/igoryuzo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-slate px-6 py-4 hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-ash group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-mono text-sm text-bone group-hover:text-accent transition-colors">GitHub</span>
              </div>
              <svg
                className="w-4 h-4 text-ash group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-slate">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-ash">
            © {new Date().getFullYear()} IGOR YUZOVITSKIY
          </div>
          <div className="font-mono text-xs text-ash">
            BROOKLYN, NY
          </div>
        </div>
      </footer>
    </main>
  );
}
