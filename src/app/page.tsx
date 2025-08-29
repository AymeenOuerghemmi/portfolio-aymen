'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Github,
  Mail,
  Linkedin,
  Phone,
  ArrowRight,
  Download,
  ExternalLink,
  MapPin,
  Award,
  FileText,
  Image as ImageIcon,
} from 'lucide-react';

/* ------------------------------------------------------------
   TYPES
------------------------------------------------------------- */
type Socials = {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  website: string;
};

type Project = {
  title: string;
  tags: string[];
  desc: string;
  link: string;
  repo: string;
  image: string;
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

type EducationItem = {
  title: string;
  org: string;
  period: string;
};

type Certificate = {
  title: string;
  issuer: string;
  period: string;
  type: 'image' | 'pdf';
  url: string;
  previewUrl?: string;
};

type DataShape = {
  name: string;
  role: string;
  location: string;
  summary: string;
  avatar: string;
  socials: Socials;
  skills: string[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certificates: Certificate[];
  resumeUrl: string;
};

/* ------------------------------------------------------------
   DATA
------------------------------------------------------------- */
const data: DataShape = {
  name: 'Aymen Ouerghemmi',
  role: 'Software Engineer — Full-Stack (Angular • Spring Boot • Laravel • Vue)',
  location: 'Sfax, Tunisia',
  summary:
    'Recent software engineering graduate (IIT Sfax). I build clean UIs and reliable backends, with DevOps basics (Docker, Linux servers). Comfortable with Java/TypeScript/Python and modern web frameworks. Open to relocation and multicultural teams.',
  avatar: 'https://avatars.githubusercontent.com/u/159343354?v=4',
  socials: {
    github: 'https://github.com/AymeenOuerghemmi',
    linkedin: 'https://www.linkedin.com/in/aymen-ouerghemmi/',
    email: 'mailto:werghemiaymen@gmail.com',
    phone: 'tel:+21627765289',
    website: 'https://www.linkedin.com/in/aymen-ouerghemmi/',
  },
  skills: [
    // Core
    'Java',
    'Spring Boot',
    'Hibernate',
    'Angular',
    'TypeScript',
    'PrimeNG',
    'VueJS',
    'Laravel',
    'Django',
    'Flutter',
    'React',
    // Data & DB
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    // DevOps & Tools
    'Docker',
    'Git',
    'GitHub',
    'GitLab',
    'CI/CD',
    'Trello',
    'Jira',
    // AI/ML basics
    'FastAPI',
    'LangChain',
    'LLMs',
    'RAG',
  ],
  projects: [
    {
      title: 'InstaDoc — Medical Management Web App (PFE)',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'FastAPI', 'LangChain'],
      desc: 'Appointments, prescriptions, calendar sync, digital records; symptom-checker chatbot for pre-diagnosis.',
      link: 'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/short%20demo%20%E2%80%90%20R%C3%A9alis%C3%A9e%20avec%20Clipchamp.mp4',
      repo: 'https://github.com/AymeenOuerghemmi',
      image:
        'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/-instadoc-.png',
    },
    {
      title: 'LawLead — Law Cabinet Management',
      tags: ['Laravel', 'VueJS', 'MySQL'],
      desc: 'Automates legal tasks and reduces file processing time (~30%).',
      link: '#',
      repo: 'https://github.com/AymeenOuerghemmi',
      image:
        'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/-Lawlead-.png',
    },
    {
      title: 'BookIfyNow — Booking Management',
      tags: ['Laravel', 'VueJS', 'MySQL'],
      desc: 'Reservation & scheduling platform with admin analytics.',
      link: 'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/Demo_Stage_Ete.mp4',
      repo: 'https://github.com/AymeenOuerghemmi',
      image:
        'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/-BookIfyNow-.png',
    },
    {
      title: 'MyCV — Mobile CV App',
      tags: ['Flutter', 'Dart'],
      desc: 'Mobile application to present my resume and projects.',
      link: '#',
      repo: 'https://github.com/AymeenOuerghemmi/App-Mobile-C.V',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'GMT — Gym Management Website',
      tags: ['C#', 'ASP.NET', 'SQL Server'],
      desc: 'Gym membership, subscriptions and class management.',
      link: '#',
      repo: 'https://github.com/AymeenOuerghemmi/Gym-management-',
      image:
        'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1200&auto=format&fit=crop',
    },
    /* {
      title: 'At Your Service — Home Services Platform',
      tags: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
      desc: 'Marketplace to connect clients with home-service providers.',
      link: '#',
      repo: 'https://github.com/AymeenOuerghemmi/HomeService_WebSite',
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
    }, */
  ],
  experience: [
    {
      role: 'Graduation Project — InstaDoc Medical App',
      company: 'WeFactory',
      period: 'Feb 2025 – Jun 2025',
      points: [
        'Built appointments, e-prescriptions, and records with Angular + Spring Boot.',
        'Integrated chatbot using FastAPI, LangChain and LLMs for symptom checking.',
        'Collaborated with Agile practices (GitLab, Scrum).',
      ],
    },
    {
      role: 'Summer Web Dev Intern',
      company: 'Cokitana',
      period: 'Jul 2024 - Aug 2024',
      points: [
        'Reservation management system (VueJS + Laravel) improving booking efficiency.',
        'Reduced manual errors via better data validation and workflows.',
      ],
    },
    {
      role: 'Final-year Web Dev Intern',
      company: 'Cokitana',
      period: 'Feb 2024 - Jun 2024',
      points: [
        'Law firm management app (VueJS + Laravel), cutting file processing time ~30%.',
      ],
    },
    {
      role: 'Summer Web Dev Intern',
      company: 'Djagora Academy',
      period: 'Jun 2023',
      points: [
        'Children intelligence testing app (Angular + Django + MongoDB).',
      ],
    },
  ],
  education: [
    {
      title: 'Master’s in Computer Science Engineering',
      org: 'International Institute of Technology (IIT) — Sfax',
      period: '2025',
    },
    {
      title: 'National Degree in Industrial Computing & Automation',
      org: 'Higher Institute of Industrial Management of Sfax (ISGIS)',
      period: '2022',
    },
  ],
  certificates: [
    {
      title: 'Scrum Fundamentals',
      issuer: 'Scrum (Foundations)',
      period: '2023',
      type: 'image',
      url: 'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/scrum%20cert.jpg',
    },
    {
      title: 'IBM Big Data Engineer',
      issuer: 'IBM',
      period: '2024',
      type: 'pdf',
      url: 'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/IBM%20cert.pdf',
      previewUrl:
        'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/big-data-engineer-certificate.png',
    },
    {
      title: 'Artificial Intelligence Certificate',
      issuer: 'Training Program',
      period: '2024',
      type: 'pdf',
      url: 'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/Cert%20IA.pdf',
      previewUrl:
        'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/it-specialist-artificial-intelligence.png',
    },
  ],
  resumeUrl:
    'https://vaff8itgswgn4ojj.public.blob.vercel-storage.com/Cv-Aymen%20OUERGHEMMI.pdf',
};

/* ------------------------------------------------------------
   ANIMATION HELPERS
------------------------------------------------------------- */
const EASE_OUT = [0.16, 1, 0.3, 1] as const; // easeOut cubic-bezier
const EASE_IN_OUT = [0.42, 0, 0.58, 1] as const; // easeInOut cubic-bezier

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const staggerChildren: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const hoverLift: Variants = {
  rest: { y: 0, boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -4,
    boxShadow: '0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
};

// Section wrapper that reveals on scroll
const AnimatedSection: React.FC<{
  id?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <motion.section
    id={id}
    className={className}
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '0px 0px -80px 0px' }}
  >
    {children}
  </motion.section>
);

/* ------------------------------------------------------------
   LAYOUT HELPERS
------------------------------------------------------------- */
const SectionTitle: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => (
  <motion.h2
    id={id}
    className="scroll-mt-24 text-2xl md:text-3xl font-bold tracking-tight"
    variants={fadeUp}
  >
    {children}
  </motion.h2>
);

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

/* ------------------------------------------------------------
   NAV WITH PROGRESS BAR + HOVER UNDERLINE
------------------------------------------------------------- */
const Nav: React.FC = () => {
  // Use viewport scroll progress to avoid container hydration issues
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => (
    <a href={href} className="relative py-1 hover:opacity-90">
      <span>{children}</span>
      <motion.span
        layoutId="nav-underline"
        className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-foreground/70 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
    </a>
  );

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <motion.div
        style={{ scaleX: progress }}
        className="origin-left h-0.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
      />
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="font-semibold tracking-tight">
            {data.name}
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#certificates">Certificates</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <a href={data.resumeUrl} className="hidden md:inline-block">
              <Button size="sm" variant="secondary" className="gap-2">
                <Download className="size-4" />
                CV
              </Button>
            </a>
            <a
              href={data.socials.github}
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-muted"
            >
              <Github className="size-5" />
            </a>
            <a
              href={data.socials.linkedin}
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-muted"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

/* ------------------------------------------------------------
   HERO
------------------------------------------------------------- */
const Hero: React.FC = () => (
  <section id="home" className="bg-gradient-to-b from-white to-slate-50">
    <Container>
      <div className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <Badge className="mb-4" variant="secondary">
            Available for work
          </Badge>
          <motion.h1
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {data.name}
          </motion.h1>
          <motion.p
            className="mt-3 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {data.role}
          </motion.p>
          <motion.p
            className="mt-6 text-slate-700 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {data.summary}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <a href="#projects">
              <Button className="gap-2">
                View Projects <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href={data.socials.email}>
              <Button variant="outline" className="gap-2">
                <Mail className="size-4" /> Contact
              </Button>
            </a>
          </motion.div>
          <motion.div
            className="mt-6 flex items-center gap-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.34 }}
          >
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-4" />
              {data.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Avatar with subtle float animation via wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="justify-self-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: EASE_IN_OUT }}
          >
            <Image
              src={data.avatar}
              alt="Avatar"
              width={256}
              height={256}
              unoptimized
              className="size-48 md:size-64 rounded-full object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  </section>
);

/* ------------------------------------------------------------
   ABOUT
------------------------------------------------------------- */
const About: React.FC = () => (
  <AnimatedSection id="about" className="py-16 md:py-24">
    <Container>
      <SectionTitle id="about">About</SectionTitle>
      <motion.p
        className="mt-6 text-slate-700 leading-relaxed max-w-3xl"
        variants={fadeUp}
      >
        I’m a full-stack engineer focused on TypeScript/Java and pragmatic AI.
        I’ve built production systems using Angular + Spring Boot + FastAPI
        microservices. I value clean architecture, helpful docs, and small
        iterations.
      </motion.p>
    </Container>
  </AnimatedSection>
);

/* ------------------------------------------------------------
   SKILLS (chips stagger)
------------------------------------------------------------- */
const Skills: React.FC = () => (
  <AnimatedSection id="skills" className="py-16 md:py-24 bg-slate-50 border-y">
    <Container>
      <SectionTitle id="skills">Skills</SectionTitle>
      <motion.div
        className="mt-8 flex flex-wrap gap-2"
        variants={staggerChildren}
      >
        {data.skills.map((s) => (
          <motion.div key={s} variants={scaleIn}>
            <Badge variant="outline" className="text-sm py-1 px-3">
              {s}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </AnimatedSection>
);

/* ------------------------------------------------------------
   PROJECTS (cards hover lift + image zoom)
------------------------------------------------------------- */
const Projects: React.FC = () => (
  <AnimatedSection id="projects" className="py-16 md:py-24">
    <Container>
      <SectionTitle id="projects">Projects</SectionTitle>
      <motion.div
        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerChildren}
      >
        {data.projects.map((p) => (
          <motion.div key={p.title} variants={fadeUp}>
            <motion.div variants={hoverLift} initial="rest" whileHover="hover">
              <Card className="overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.45 }}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={1200}
                      height={750}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={p.link}
                      className="inline-flex items-center gap-1 text-sm hover:underline"
                    >
                      <ExternalLink className="size-4" /> Video Demo
                    </a>
                    <a
                      href={p.repo}
                      className="inline-flex items-center gap-1 text-sm hover:underline"
                    >
                      <Github className="size-4" /> Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </AnimatedSection>
);

/* ------------------------------------------------------------
   EXPERIENCE (keys fixed, list fade-in)
------------------------------------------------------------- */
const Experience: React.FC = () => (
  <AnimatedSection id="experience" className="py-16 md:py-24 bg-slate-50 border-y">
    <Container>
      <SectionTitle id="experience">Experience</SectionTitle>
      <motion.div className="mt-8 space-y-6" variants={staggerChildren}>
        {data.experience.map((e, idx) => (
          <motion.div key={`${e.role}-${e.company}-${idx}`} variants={fadeUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex flex-wrap items-center gap-2">
                  <span className="font-semibold">{e.role}</span>
                  <span className="text-muted-foreground">@ {e.company}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{e.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.ul
                  className="list-disc pl-5 space-y-2 text-sm text-slate-700"
                  variants={staggerChildren}
                >
                  {e.points.map((it, i) => (
                    <motion.li key={i} variants={fadeUp}>
                      {it}
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </AnimatedSection>
);

/* ------------------------------------------------------------
   EDUCATION
------------------------------------------------------------- */
const Education: React.FC = () => (
  <AnimatedSection id="education" className="py-16 md:py-24">
    <Container>
      <SectionTitle id="education">Education</SectionTitle>
      <motion.div className="mt-6 grid md:grid-cols-2 gap-6" variants={staggerChildren}>
        {data.education.map((ed) => (
          <motion.div key={ed.title} variants={fadeUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{ed.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div>{ed.org}</div>
                <div className="mt-1">{ed.period}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </AnimatedSection>
);

/* ------------------------------------------------------------
   CERTIFICATES
------------------------------------------------------------- */
const Certificates: React.FC = () => (
  <AnimatedSection id="certificates" className="py-16 md:py-24 bg-slate-50 border-y">
    <Container>
      <SectionTitle id="certificates">Certificates</SectionTitle>
      <motion.div
        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerChildren}
      >
        {data.certificates.map((c, idx) => (
          <motion.div key={`${c.title}-${idx}`} variants={fadeUp}>
            <motion.div variants={hoverLift} initial="rest" whileHover="hover">
              <Card className="overflow-hidden">
                {/* Preview area */}
                <div className="aspect-[16/10] bg-slate-100 flex items-center justify-center overflow-hidden">
                  {c.previewUrl ? (
                    <Image
                      src={c.previewUrl}
                      alt={c.title}
                      width={1200}
                      height={750}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  ) : c.type === 'image' ? (
                    <Image
                      src={c.url}
                      alt={c.title}
                      width={1200}
                      height={750}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-500">
                      <FileText className="size-10 mb-2" />
                      <span className="text-xs">PDF preview</span>
                    </div>
                  )}
                </div>
                {/* Text */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Award className="size-4" />
                    {c.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{c.issuer}</Badge>
                    <span className="ml-auto">{c.period}</span>
                  </div>
                  <div className="mt-3 flex gap-3">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      <ExternalLink className="size-4" /> View
                    </a>
                    <a
                      href={c.url}
                      download
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      <Download className="size-4" /> Download
                    </a>
                    {c.type === 'image' ? (
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <ImageIcon className="size-3.5" /> JPG
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <FileText className="size-3.5" /> PDF
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </AnimatedSection>
);

/* ------------------------------------------------------------
   CONTACT
------------------------------------------------------------- */
const Contact: React.FC = () => (
  <AnimatedSection id="contact" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
    <Container>
      <SectionTitle id="contact">Contact</SectionTitle>
      <motion.div className="mt-8 grid md:grid-cols-2 gap-8" variants={staggerChildren}>
        <motion.div variants={fadeUp}>
          <motion.div variants={hoverLift} initial="rest" whileHover="hover">
            <Card>
              <CardHeader>
                <CardTitle>Let’s work together</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  Feel free to reach out for collaborations, gigs, or just a hello.
                  I usually reply within a day.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={data.socials.email}>
                    <Button className="gap-2">
                      <Mail className="size-4" /> Email
                    </Button>
                  </a>
                  <a href={data.socials.linkedin}>
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="size-4" /> LinkedIn
                    </Button>
                  </a>
                  <a href={data.socials.phone}>
                    <Button variant="ghost" className="gap-2">
                      <Phone className="size-4" /> Call
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Right card with explicit variants using easing constants */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
          }}
        >
          <motion.div
            variants={{
              rest: { y: 0, boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
              hover: {
                y: -10,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              },
            }}
            initial="rest"
            whileHover="hover"
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick links</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>
                    <a href="#projects" className="inline-flex items-center gap-1 hover:underline">
                      <ArrowRight className="size-4" /> View my projects
                    </a>
                  </li>
                  <li>
                    <a href={data.socials.github} className="inline-flex items-center gap-1 hover:underline">
                      <Github className="size-4" /> GitHub profile
                    </a>
                  </li>
                  <li>
                    <a href={data.resumeUrl} className="inline-flex items-center gap-1 hover:underline">
                      <Download className="size-4" /> Download CV
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  </AnimatedSection>
);

/* ------------------------------------------------------------
   PAGE
------------------------------------------------------------- */
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
      <Certificates />
      <Contact />
      <footer className="py-10 border-t">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
            <span>
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </span>
            <a href="#home" className="hover:underline">
              Back to top
            </a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
