"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experience = [
    { company: "Viral Fission", role: "City Lead", description: "Led South Zone operations managing brand campaigns for KFC, McDonald's, OnePlus. Boosted engagement by 45% and reduced coordination delays by 30%.", highlight: "45% boost" },
    { company: "AiVariant/ExcelR", role: "Business Analyst Intern", description: "Built automated Power BI & Tableau dashboards handling 175K+ records. Reduced manual reporting by 40%.", highlight: "175K+ records" },
    { company: "Backpackers United", role: "Backend Developer Intern", description: "Supported backend team with MongoDB updates, data validation, and bug fixes.", highlight: "Full-stack" }
  ];

  const projects = [
  { 
    title: "Events First Group", 
    subtitle: "Website", 
    tech: "Next.js • TypeScript • Tailwind CSS", 
    description: "Built a modern, responsive website for a B2B events company. Features include dynamic hero section, services showcase, and contact form.", 
    image: "/images/projects/efg-website.png",
    live: "https://efg-website-blush.vercel.app", 
    github: "https://github.com/MannaanAkhtar/efg-website" 
  },
  { 
    title: "HR Analytics", 
    subtitle: "Dashboard", 
    tech: "Power BI • SQL • Tableau • Excel", 
    description: "Built an interactive analytics framework tracking 100K+ employee records. Identified 50%+ attrition in R&D roles.", 
    image: "/images/projects/hr-dashboard.png",
    live: "", 
    github: "https://github.com/MannaanAkhtar/Employee-Retention-Analysis" 
  },
  { 
    title: "Banking Data", 
    subtitle: "Analytics", 
    tech: "Power BI • SQL • Excel", 
    description: "Developed dashboards analyzing 75K+ loan and transaction records to evaluate risk patterns.", 
    image: "/images/projects/banking-dashboard.png",
    live: "", 
    github: "https://github.com/MannaanAkhtar/Loan-Risk-Analysis" 
  }
];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: #0a0a0a; color: #fff; }
        
        ::selection { background: #F97316; color: #0a0a0a; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #F97316, #FB923C, #F97316);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientMove 3s ease infinite;
        }
        
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          pointer-events: none;
        }
        
        .nav-link {
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-link:hover { color: #F97316; }
        
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #fff;
          transition: left 0.4s ease;
          z-index: 0;
        }
        .btn-primary:hover::before { left: 0; }
        .btn-primary:hover { color: #0a0a0a !important; }
        .btn-primary span { position: relative; z-index: 1; }
        
        .card {
          transition: all 0.4s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          border-color: #F97316 !important;
        }
        
        .exp-card {
          transition: all 0.4s ease;
        }
        .exp-card:hover {
          transform: translateX(10px);
          border-color: #F97316 !important;
        }
        
        .skill-tag {
          transition: all 0.3s ease;
        }
        .skill-tag:hover {
          background: #F97316 !important;
          color: #0a0a0a !important;
          transform: translateY(-2px);
        }
        
        .link-hover {
          position: relative;
        }
        .link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #F97316;
          transition: width 0.3s ease;
        }
        .link-hover:hover::after { width: 100%; }
      `}</style>

      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ffffff', overflowX: 'hidden' }}>
        
        {/* Navigation */}
        <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, background: 'linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.8) 50%, transparent 100%)', backdropFilter: 'blur(10px)' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '36px', height: '36px', background: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#0a0a0a' }}>M</span>
            <span>Mannaan</span>
          </div>
          <div style={{ display: 'flex', gap: '40px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <span key={item} className="nav-link" onClick={() => scrollTo(item)} style={{ opacity: 0.8 }}>{item}</span>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        {/* Hero Section */}
<section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 48px', position: 'relative', overflow: 'hidden' }}>
  <div className="glow-orb" style={{ width: '600px', height: '600px', background: '#F97316', top: '10%', right: '10%', animation: 'float 8s ease-in-out infinite' }} />
  <div className="glow-orb" style={{ width: '400px', height: '400px', background: '#F97316', bottom: '10%', left: '-5%', animation: 'float 10s ease-in-out infinite 2s' }} />
  
  <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', animation: loaded ? 'fadeUp 1s ease' : 'none' }}>
    
    {/* Left - Text */}
    <div>
      <p style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#F97316', marginBottom: '24px' }}>
        Operations • Analytics • Web Development
      </p>
      <h1 style={{ fontSize: 'clamp(48px, 8vw, 90px)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-3px', marginBottom: '32px' }}>
        <span style={{ color: '#F97316' }}>Hello,</span> I&apos;m<br />
        Mannaan<br />
        <span style={{ fontWeight: 300, fontStyle: 'italic' }}>Akhtar</span>
      </h1>
      <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: '500px', marginBottom: '40px' }}>
        Operations professional based in <span style={{ color: '#F97316', fontWeight: 600 }}>Dubai</span> with a track record in campaign management, data analytics, and web development.
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button className="btn-primary" onClick={() => scrollTo('projects')} style={{ padding: '18px 40px', background: '#F97316', border: 'none', color: '#0a0a0a', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer' }}>
          <span>View Projects</span>
        </button>
        <button className="btn-primary" onClick={() => scrollTo('contact')} style={{ padding: '18px 40px', background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer' }}>
          <span>Get In Touch</span>
        </button>
      </div>
    </div>

    {/* Right - Empty space for layout */}
    <div></div>
  </div>

  {/* Photo at bottom right */}
  <div style={{ 
    position: 'absolute',
    bottom: 0,
    right: '10%',
    width: '450px', 
    height: '85vh',
  }}>
    <img 
      src="/images/projects/profile.png" 
      alt="Mannaan Akhtar"
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover',
        objectPosition: 'top',
        maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    />
  </div>

  <div style={{ position: 'absolute', bottom: '30px', left: '48px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
    <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
    Scroll to explore
  </div>
</section>
```

---

        {/* About Section */}
        <section id="about" style={{ padding: '60px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#F97316', marginBottom: '24px' }}>About Me</p>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', marginBottom: '40px' }}>
                My <span className="gradient-text">Introduction</span>
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
                I&apos;m an operations and analytics professional based in Dubai who also builds web solutions. At Viral Fission, I led South Zone operations for major brands — coordinating teams, optimizing strategies, and boosting engagement by 45%.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>
                My analytics background (Power BI, SQL, Tableau) means I don&apos;t just execute — I measure and optimize. I also develop modern websites using Next.js and React.
              </p>
              <div style={{ padding: '24px', background: 'rgba(249,115,22,0.1)', borderLeft: '3px solid #F97316' }}>
                <p style={{ fontSize: '18px', fontWeight: 600, fontStyle: 'italic' }}>&quot;Ready to contribute from Day 1.&quot;</p>
              </div>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '40px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#F97316', marginBottom: '30px' }}>Education</h3>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>New Horizon College of Engineering</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>Bachelor of Engineering (B.E.)</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                    <span style={{ color: '#F97316', fontWeight: 600 }}>CGPA: 8.51/10</span>
                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>Dec 2020 – July 2024</span>
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>ExcelR Solutions</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>PG Program in Business Analytics & Data Science</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                    <span style={{ color: '#F97316', fontWeight: 600 }}>Completed</span>
                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>Nov 2024 – Aug 2025</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[{ n: '45%', l: 'Engagement Boost' }, { n: '175K+', l: 'Records Analyzed' }, { n: '40%', l: 'Reduced Reporting' }, { n: '30%', l: 'Faster Coordination' }].map((s, i) => (
                  <div key={i} className="card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '28px', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: '#F97316', marginBottom: '8px' }}>{s.n}</div>
                    <div style={{ fontSize: '11px', letterSpacing: '1px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ padding: '60px 48px', background: 'linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.03) 50%, transparent 100%)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#F97316', marginBottom: '24px' }}>What I Do</p>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', marginBottom: '60px' }}>
              My <span className="gradient-text">Personal</span> Skills
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {[
                { title: 'Operations & Campaign', skills: ['Multi-brand Coordination', 'Team Leadership', 'Stakeholder Communication', 'End-to-end Execution'] },
                { title: 'Web Development', skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'GitHub'] },
                { title: 'Analytics & Reporting', skills: ['Power BI', 'Tableau', 'SQL', 'Excel (Advanced)', 'Dashboard Dev', 'Data Modeling'] }
              ].map((cat, i) => (
                <div key={i} className="card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', padding: '40px' }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: 'rgba(249,115,22,0.2)', marginBottom: '16px' }}>0{i + 1}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>{cat.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {cat.skills.map((skill) => (
                      <span key={skill} className="skill-tag" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '13px', cursor: 'pointer' }}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ padding: '60px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#F97316', marginBottom: '24px' }}>Career Path</p>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', marginBottom: '60px' }}>
              My <span className="gradient-text">Work</span> Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {experience.map((exp, i) => (
                <div key={i} className="exp-card" style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: '40px', alignItems: 'center', cursor: 'pointer' }}>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{exp.company}</h3>
                    <p style={{ fontSize: '14px', color: '#F97316', fontWeight: 600 }}>{exp.role}</p>
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>{exp.description}</p>
                  <span style={{ padding: '12px 20px', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', fontSize: '13px', fontWeight: 700, color: '#F97316', whiteSpace: 'nowrap' }}>{exp.highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* Projects Section */}
<section id="projects" style={{ padding: '60px 48px', background: 'linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.03) 50%, transparent 100%)' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#F97316', marginBottom: '24px' }}>Featured Work</p>
    <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', marginBottom: '40px' }}>
      Project <span className="gradient-text">Portfolio</span>
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {projects.map((project, i) => (
        <div key={i} className="card" style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden',
        }}>
          <div style={{
            order: i % 2 === 0 ? 1 : 2,
            height: '300px',
            overflow: 'hidden',
            background: 'rgba(249,115,22,0.05)',
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{
            order: i % 2 === 0 ? 2 : 1,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{ fontSize: '56px', fontWeight: 800, color: 'rgba(255,255,255,0.05)', marginBottom: '8px' }}>0{i + 1}</div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
              {project.title} <span style={{ color: '#F97316' }}>{project.subtitle}</span>
            </h3>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px', letterSpacing: '1px' }}>{project.tech}</p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{project.description}</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-hover" style={{ fontSize: '13px', fontWeight: 700, color: '#F97316', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>Live Demo →</a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-hover" style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>GitHub →</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '60px 48px', position: 'relative' }}>
          <div className="glow-orb" style={{ width: '500px', height: '500px', background: '#F97316', bottom: '0', left: '50%', transform: 'translateX(-50%)' }} />
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#F97316', marginBottom: '24px' }}>Get In Touch</p>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '32px' }}>
              Let&apos;s create <span className="gradient-text">something</span><br />together.
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '48px' }}>
              I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
              <a href="mailto:mannaan.akhtar@gmail.com" className="btn-primary" style={{ padding: '20px 48px', background: '#F97316', color: '#0a0a0a', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
                <span>Say Hello</span>
              </a>
              <a href="https://github.com/MannaanAkhtar" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '20px 48px', background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '40px 48px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>© 2026 Mannaan Akhtar. Built with passion.</p>
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="https://www.linkedin.com/in/mannaan-akhtar/" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn</a>
              <a href="https://github.com/MannaanAkhtar" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>GitHub</a>
              <a href="mailto:mannaan.akhtar@gmail.com" className="link-hover" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}