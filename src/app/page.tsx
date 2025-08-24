'use client';
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin, Globe, Phone, ArrowRight, Download, ExternalLink, MapPin } from "lucide-react";

/*
  One‑page portfolio starter
  - TailwindCSS for styling
  - shadcn/ui for polished components
  - framer-motion for subtle animations
  How to use quickly in a Vite or Next.js app:
    1) Ensure Tailwind + shadcn/ui are set up. (https://ui.shadcn.com)
    2) Put this file as app/page.tsx (Next.js App Router) or as a component and render it.
    3) Replace the data object below with your info.
*/

const data = {
  name: "Aymen Ouerghemmi",
  role: "Full‑Stack Engineer (Angular • Spring Boot • AI)",
  location: "Sfax, Tunisia",
  summary:
    "Building clean UIs, solid backends, and pragmatic AI features. I enjoy shipping end‑to‑end products with great DX and UX.",
  avatar:
    "https://avatars.githubusercontent.com/u/159343354?v=4",
  socials: {
    github: "https://github.com/AymeenOuerghemmi",
    linkedin: "https://www.linkedin.com/in/aymen-ouerghemmi/",
    email: "mailto:you@example.com",
    phone: "tel:+21600000000",
    website: "https://your-domain.tn",
  },
  skills: [
    "Angular", "TypeScript", "PrimeNG", "React", "Tailwind",
    "Java", "Spring Boot", "Hibernate", "PostgreSQL", "MySQL",
    "Docker", "CI/CD", "FastAPI", "LangChain", "LLMs", "RAG"
  ],
  projects: [
    {
      title: "InstaDoc – AI‑augmented medical suite",
      tags: ["Angular", "Spring Boot", "FastAPI", "RAG", "OCR"],
      desc: "Clinic & lab management with e‑prescription, dashboards, and AI assistants (OCR & symptom checker).",
      link: "https://example.com",
      repo: "https://github.com/your-user/instadoc",
      image:
        "https://images.unsplash.com/photo-1581092334631-1b9a9a160f78?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "LawLead – Law Cabinet Management",
      tags: ["Laravel", "Vuejs", "Jenkins", "MySQL"],
      desc: "Management, analytics, and CI/CD.",
      link: "https://example.com",
      repo: "https://github.com/your-user/pixihiring",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "BookAtMe-Booking Management",
      tags: ["Laravel", "Vuejs", "Jenkins", "MySQL"],
      desc: "Management, analytics, and CI/CD.",
      link: "https://example.com",
      repo: "https://github.com/your-user/syla-esim",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  experience: [
    {
      role: "PFE – Software Engineer",
      company: "WeFactory",
      period: "Feb 2025 – Jun 2025",
      points: [
        "Shipped InstaDoc (Angular + Spring Boot + AI microservices).",
        "Integrated OCR, RAG, and calendar sync; improved UX with PrimeNG.",
        "Dockerized services and set up Jenkins pipelines.",
      ],
    },
  ],
  education: [
    {
      title: "Diplôme d’ingénieur en Informatique",
      org: "International Institute of Technology (IIT) – Sfax",
      period: "2022 – 2025",
    },
  ],
  resumeUrl: "/Aymen_Ouerghemmi_CV.pdf",
};

const SectionTitle: React.FC<{ id: string; children: React.ReactNode; }> = ({ id, children }) => (
  <h2 id={id} className="scroll-mt-24 text-2xl md:text-3xl font-bold tracking-tight">{children}</h2>
);

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Nav: React.FC = () => (
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
    <Container>
      <div className="flex items-center justify-between py-3">
        <a href="#home" className="font-semibold tracking-tight">{data.name}</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={data.resumeUrl} className="hidden md:inline-block">
            <Button size="sm" variant="secondary" className="gap-2"><Download className="size-4"/>CV</Button>
          </a>
          <a href={data.socials.github} aria-label="GitHub" className="p-2 rounded-full hover:bg-muted"><Github className="size-5"/></a>
          <a href={data.socials.linkedin} aria-label="LinkedIn" className="p-2 rounded-full hover:bg-muted"><Linkedin className="size-5"/></a>
        </div>
      </div>
    </Container>
  </header>
);

const Hero: React.FC = () => (
  <section id="home" className="bg-gradient-to-b from-white to-slate-50">
    <Container>
      <div className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge className="mb-4" variant="secondary">Available for work</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {data.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{data.role}</p>
          <p className="mt-6 text-slate-700 max-w-xl">{data.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects"><Button className="gap-2">View Projects <ArrowRight className="size-4"/></Button></a>
            <a href={data.socials.email}><Button variant="outline" className="gap-2"><Mail className="size-4"/> Contact</Button></a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPin className="size-4"/>{data.location}</span>
            <a href={data.socials.website} className="inline-flex items-center gap-1 hover:underline"><Globe className="size-4"/>Portfolio</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="justify-self-center">
          <img src={data.avatar} alt="Avatar" className="size-48 md:size-64 rounded-full object-cover shadow-xl"/>
        </motion.div>
      </div>
    </Container>
  </section>
);

const About: React.FC = () => (
  <section id="about" className="py-16 md:py-24">
    <Container>
      <SectionTitle id="about">About</SectionTitle>
      <p className="mt-6 text-slate-700 leading-relaxed max-w-3xl">
        I’m a full‑stack engineer focused on TypeScript/Java and pragmatic AI.
        I’ve built production systems using Angular + Spring Boot + FastAPI microservices.
        I value clean architecture, helpful docs, and small iterations.
      </p>
    </Container>
  </section>
);

const Skills: React.FC = () => (
  <section id="skills" className="py-16 md:py-24 bg-slate-50 border-y">
    <Container>
      <SectionTitle id="skills">Skills</SectionTitle>
      <div className="mt-8 flex flex-wrap gap-2">
        {data.skills.map((s) => (
          <Badge key={s} variant="outline" className="text-sm py-1 px-3">{s}</Badge>
        ))}
      </div>
    </Container>
  </section>
);

const Projects: React.FC = () => (
  <section id="projects" className="py-16 md:py-24">
    <Container>
      <SectionTitle id="projects">Projects</SectionTitle>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((p) => (
          <Card key={p.title} className="overflow-hidden group">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm hover:underline"><ExternalLink className="size-4"/> Live</a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm hover:underline"><Github className="size-4"/> Code</a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const Experience: React.FC = () => (
  <section id="experience" className="py-16 md:py-24 bg-slate-50 border-y">
    <Container>
      <SectionTitle id="experience">Experience</SectionTitle>
      <div className="mt-8 space-y-6">
        {data.experience.map((e) => (
          <Card key={e.role}>
            <CardHeader>
              <CardTitle className="text-base flex flex-wrap items-center gap-2">
                <span className="font-semibold">{e.role}</span>
                <span className="text-muted-foreground">@ {e.company}</span>
                <span className="ml-auto text-xs text-muted-foreground">{e.period}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                {e.points.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const Education: React.FC = () => (
  <section id="education" className="py-16 md:py-24">
    <Container>
      <SectionTitle id="education">Education</SectionTitle>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {data.education.map((ed) => (
          <Card key={ed.title}>
            <CardHeader>
              <CardTitle className="text-base">{ed.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div>{ed.org}</div>
              <div className="mt-1">{ed.period}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
    <Container>
      <SectionTitle id="contact">Contact</SectionTitle>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Let’s work together</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Feel free to reach out for collaborations, gigs, or just a hello. I usually reply within a day.</p>
            <div className="flex flex-wrap gap-3">
              <a href={data.socials.email}><Button className="gap-2"><Mail className="size-4"/> Email</Button></a>
              <a href={data.socials.linkedin}><Button variant="outline" className="gap-2"><Linkedin className="size-4"/> LinkedIn</Button></a>
              <a href={data.socials.phone}><Button variant="ghost" className="gap-2"><Phone className="size-4"/> Call</Button></a>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick links</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2">
              <li><a href="#projects" className="inline-flex items-center gap-1 hover:underline"><ArrowRight className="size-4"/> View my projects</a></li>
              <li><a href={data.socials.github} className="inline-flex items-center gap-1 hover:underline"><Github className="size-4"/> GitHub profile</a></li>
              <li><a href={data.resumeUrl} className="inline-flex items-center gap-1 hover:underline"><Download className="size-4"/> Download CV</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Container>
  </section>
);

export default function PortfolioPage() {
  return (
    <main className="font-sans text-slate-900">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer className="py-10 border-t">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} {data.name}. All rights reserved.</span>
            <a href="#home" className="hover:underline">Back to top</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
