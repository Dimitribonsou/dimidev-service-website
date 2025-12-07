import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaDatabase, FaMobile, FaServer, FaTools, FaPalette } from 'react-icons/fa';
import './Style/competenceSection.scss';

gsap.registerPlugin(ScrollTrigger);

interface Technology {
  name: string;
  level: number;
}

interface Skill {
  category: string;
  icon: JSX.Element;
  technologies: Technology[];
}

const skills: Skill[] = [
  {
    category: 'Frontend',
    icon: <FaCode />,
    technologies: [
      { name: 'React', level: 90 },
      { name: 'Angular', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Bootstrap 5', level: 90 },
      { name: 'SASS/SCSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: <FaServer />,
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'Laravel', level: 75 },
      { name: 'C#', level: 75 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      // { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'Base de données',
    icon: <FaDatabase />,
    technologies: [
      { name: 'MySQL', level: 95 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      // { name: 'Redis', level: 70 },
    ],
  },
  {
    category: 'Mobile',
    icon: <FaMobile />,
    technologies: [
      { name: 'React Native', level: 85 },
      // { name: 'Flutter', level: 70 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    category: 'Design',
    icon: <FaPalette />,
    technologies: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'UI/UX Design', level: 85 },
    ],
  },
  {
    category: 'Outils & Méthodologies',
    icon: <FaTools />,
    technologies: [
      { name: 'Git/GitHub', level: 90 },
      // { name: 'Docker', level: 70 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'UML/MERISE', level: 85 },
    ],
  },
];

const CompetenceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
            once: true,
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(card, { clearProps: 'all' });
          }
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="competences" className="competence-section">
      <div className="container">
        <div className="section-header">
          <h2>Mes Compétences</h2>
          <div className="underline"></div>
        </div>

        <p className="section-description">
          Expert en développement web et mobile, je maîtrise un large éventail de technologies
          pour créer des solutions digitales performantes et évolutives.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="skill-card"
            >
              <div className="skill-header">
                <div className="icon">{skill.icon}</div>
                <h3>{skill.category}</h3>
              </div>
              <div className="skill-content">
                {skill.technologies.map((tech) => (
                  <div key={tech.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{tech.name}</span>
                      {/* <span className="skill-level">{tech.level}%</span> */}
                    </div>
                    <div className="skill-bar">
                      {/* <div
                        className="skill-progress"
                        style={{ width: `${tech.level}%` }}
                      /> */}
                      <div
                        className="skill-progress"
                        style={{ width: `100%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenceSection;
