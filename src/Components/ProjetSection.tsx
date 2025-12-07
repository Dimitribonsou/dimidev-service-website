import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import image_projet from "./../assets/home_illustration.png";
import projets from '../data/projet.json';
import './Style/projetSection.scss';

gsap.registerPlugin(ScrollTrigger);

const ProjetSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projets);

  // Définir les catégories de filtres
  const filterCategories = [
    { id: 'all', label: 'Tous' },
    { id: 'site web', label: 'Site web' },
    { id: 'portefolio', label: 'Portefolio' },
    { id: 'ui-ux', label: 'Design UI/UX' },
    // { id: 'ecommerce', label: 'E-commerce' },
    // { id: 'technology', label: 'Technologie' },
    // { id: 'services', label: 'Services' },
    { id: 'finance', label: 'Finance' },
    { id: 'education', label: 'Éducation' },
    { id: 'food', label: 'Restauration' },
    // { id: 'real estate', label: 'Immobilier' },
    // { id: 'construction', label: 'Construction' },
    { id: 'public services', label: 'Services Publics' }
  ];

  // Filtrer les projets
  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projets);
    } else {
      const filtered = projets.filter(projet => projet.category === category);
      setFilteredProjects(filtered);
    }
  };

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
  }, [filteredProjects]);

  return (
    <section ref={sectionRef} id="projets" className="projet-section">
      <div className="container">
        <div className="section-header">
          <h2 className='text-white'>Mes Réalisations</h2>
          <div className="underline"></div>
        </div>

        <p className="section-description">
          Découvrez une sélection de mes projets récents, démontrant mon expertise
          en développement web et mobile.
        </p>

        {/* Filtres */}
        <div className="filter-container">
          <div className="filter-tabs">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => filterProjects(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((projet, index) => (
            <div
              key={projet.title}
              ref={(el:any) => cardsRef.current[index] = el}
              className="project-card"
            >
              <div className="project-content">
                <img
                src={ projet.image ? projet.image :  image_projet}
                alt={projet.title || "Projet"}
                className="object-cover w-full h-20 md:h-24 rounded-tl-lg rounded-tr-lg"
              />
                <h5>{projet.title}</h5>
                <div className="project-links">
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Voir le projet"
                  >
                    <FaExternalLinkAlt />
                    <span>Voir le projet</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <a href="https://wa.me/237674606328?text=Je souhaite discuter sur mon projet avec vous .Et-vous disponible?" className="cta-button">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjetSection;
