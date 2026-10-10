import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Code2, Download, ExternalLink, FileText, Github, Linkedin, Mail, Menu, Newspaper, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import monogram from '@/assets/yj-monogram.jpg';
import { education, navigation, profile, projects, skillGroups } from './content';

function SectionHeading({ number, label, title, caption }: { number: string; label: string; title: string; caption?: string }) {
  return <div className="section-heading"><div><div className="section-label"><span>{number}</span> / {label}</div><h2>{title}</h2></div>{caption && <p className="section-caption">{caption}</p>}</div>;
}
function Badges({ items }: { items: string[] }) { return <div className="badges">{items.map(item => <span className="badge" key={item}>{item}</span>)}</div>; }
function OptionalLink({ url, children, label }: { url: string | null; children: ReactNode; label: string }) {
  return url ? <a href={url} target="_blank" rel="noopener noreferrer">{children}</a> : <span className="pending-link" aria-disabled="true" title={`${label} will be added when provided`}>{children}</span>;
}
function ProjectArt({ kind, number }: { kind: string; number: number }) {
  return <div className="project-art" aria-hidden="true"><span className="project-art-number">PROJECT / 0{number}</span><div className={`project-art-object ${kind}`}><div className="art-top">{kind === 'news' ? <Newspaper size={19} /> : kind === 'resume' ? <FileText size={19} /> : <ChartNoAxesCombined size={19} />}<span /></div>{kind === 'chart' ? <div className="art-chart"><i /><i /><i /><i /><i /></div> : <><div className="art-line" /><div className="art-line" /><div className="art-line short" /><div className="art-line" /><div className="art-line short" /></>}</div></div>;
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main > section[id]');
    const sectionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let revealObserver: IntersectionObserver | undefined;
    if (!reduced) {
      document.documentElement.classList.add('motion-ready');
      revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver?.unobserve(entry.target); }
      }), { threshold: .08 });
      document.querySelectorAll('.reveal').forEach(element => revealObserver?.observe(element));
    }
    return () => { sectionObserver.disconnect(); revealObserver?.disconnect(); document.documentElement.classList.remove('motion-ready'); };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);
  return <>
    <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-background focus:p-4">Skip to main content</a>
    <header className="site-header"><div className="container header-inner"><a className="wordmark" href="#home" aria-label="Yog Jain home">yj<span>.</span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} className={`nav-link ${active === item.toLowerCase() ? 'active' : ''}`} aria-current={active === item.toLowerCase() ? 'location' : undefined}>{item}</a>)}</nav><Button asChild className="header-contact"><a href={`mailto:${profile.email}`}>Let’s connect <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>{menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}</header>
    <main>
      <section id="home" className="hero"><div className="container"><div className="hero-inner"><img className="hero-art" src={monogram} alt="Sculptural YJ initials" width={1024} height={1024} fetchPriority="high" /><div className="hero-content"><div className="eyebrow"><span className="eyebrow-dot" /> AI / ML · DATA SCIENCE · DEVELOPMENT</div><h1>Yog Jain<span className="text-muted-foreground">.</span></h1><p className="hero-headline">AI/ML Enthusiast | Machine Learning &amp; Data Science</p><p className="hero-intro">I am a Computer Science and Engineering undergraduate specializing in Artificial Intelligence and Machine Learning, passionate about building intelligent systems, analyzing data, and developing practical AI-driven solutions.</p><div className="hero-actions"><Button asChild><a href="#projects">Explore My Projects <ArrowUpRight /></a></Button><Button variant="outline" asChild><a href="#contact">Contact Me <ArrowRight /></a></Button>{profile.resume ? <Button variant="ghost" asChild><a href={profile.resume} download><Download /> Download Resume</a></Button> : <Button variant="ghost" disabled title="Resume PDF has not been provided"><Download /> Download Resume</Button>}</div>{!profile.resume && <p className="resume-placeholder">Resume coming soon</p>}</div></div><div className="hero-bottom"><div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={11} /></a><a href={`mailto:${profile.email}`}><Mail size={15} /> Email <ArrowUpRight size={11} /></a></div><a className="scroll-link" href="#about">Scroll to explore <ArrowDown size={14} /></a></div></div></section>
      <section id="about" className="section section-muted"><div className="container reveal"><SectionHeading number="01" label="A little about me" title="Curiosity meets purpose." /><div className="about-layout"><p className="about-copy">Innovative B.Tech CSE undergraduate with specialized coursework in Artificial Intelligence, Deep Learning, and Advanced Algorithms. Eager to leverage practical expertise in model training, Natural Language Processing, and data-driven problem-solving to develop impactful technology solutions.</p><div><p className="interest-label">Areas of interest</p><Badges items={['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Data Science']} /></div></div></div></section>
      <section id="skills" className="section"><div className="container reveal"><SectionHeading number="02" label="Technical toolkit" title="Tools behind the ideas." caption="A foundation in programming, intelligent systems, and data-driven development." /><div className="skill-grid">{skillGroups.map((group, index) => { const Icon = [Code2, BrainCircuit, ChartNoAxesCombined][index]; return <article className="skill-card" key={group.title}>{Icon && <Icon className="skill-icon" size={25} strokeWidth={1.5} />}<h3>{group.title}</h3><Badges items={group.skills} /></article>; })}</div></div></section>
      <section id="projects" className="section section-muted"><div className="container reveal"><SectionHeading number="03" label="Selected work" title="Learning through building." caption="Three projects exploring the possibilities of machine learning and data science." /><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><ProjectArt kind={project.art} number={index + 1} /><div className="project-body"><div className="project-category">{project.category}</div><h3>{project.title}</h3><p className="project-description">{project.description}</p><Badges items={project.technologies} /><div className="project-links"><OptionalLink url={project.github} label="Project repository"><Github size={13} /> Code <span className="text-[9px]">soon</span></OptionalLink><OptionalLink url={project.demo} label="Live demo"><ExternalLink size={13} /> Live demo <span className="text-[9px]">soon</span></OptionalLink></div></div></article>)}</div></div></section>
      <section id="experience" className="section"><div className="container reveal"><SectionHeading number="04" label="Experience" title="Beyond the classroom." /><article className="timeline-entry"><div className="timeline-date">MAY 2026 — JUN 2026<span>Jabalpur, Madhya Pradesh</span></div><div className="timeline-content"><h3>Smart City Operations &amp; Data Analytics Intern</h3><p className="timeline-org">Jabalpur Smart City Limited</p><p className="timeline-department">Integrated Command and Control Centre (ICCC)</p><ul><li>Collaborated with technical teams to optimize smart-city data workflows and monitor urban operations.</li><li>Assisted in analyzing real-time data feeds from CCTV surveillance, traffic sensors, and emergency response systems.</li><li>Documented system glitches and helped develop troubleshooting guides for municipal operational procedures.</li></ul></div></article></div></section>
      <section id="education" className="section section-muted"><div className="container reveal"><SectionHeading number="05" label="Education" title="A foundation for what’s next." />{education.map(item => <article className="timeline-entry education-entry" key={item.title}><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.title}</h3><p className="timeline-org">{item.institution}</p></div></article>)}</div></section>
      <section id="contact" className="section contact"><div className="container reveal contact-layout"><div><div className="section-label"><span>06</span> / Get in touch</div><h2>Let’s start a conversation.</h2><p className="contact-subtitle">AI, data, or an interesting opportunity — let’s connect.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={24} /></a></div><div className="contact-list"><a href={profile.github} target="_blank" rel="noopener noreferrer"><span className="flex items-center gap-3"><Github size={16} /> GitHub</span><ArrowUpRight size={16} /></a><OptionalLink url={profile.linkedin} label="LinkedIn profile"><span className="flex items-center gap-3"><Linkedin size={16} /> LinkedIn</span><span>Coming soon</span></OptionalLink><OptionalLink url={profile.resume} label="Resume PDF"><span className="flex items-center gap-3"><Download size={16} /> Resume</span><span>Coming soon</span></OptionalLink></div></div></section>
    </main><footer className="site-footer"><div className="container footer-inner"><span>© 2026 Yog Jain. All rights reserved.</span><a className="footer-back" href="#home">Back to top <ArrowUp size={12} /></a></div></footer>
  </>;
}
