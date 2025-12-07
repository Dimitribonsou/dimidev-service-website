import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaMobile, FaShoppingCart, FaChartLine, FaTools, FaUsers } from 'react-icons/fa';
import './Style/serviceSection.scss';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaCode />,
    title: 'Développement Web',
    message:"Je souhaite en savoir plus sur votre service de Développement Web ",
    description: 'Création de sites web et applications web modernes, responsives et performantes avec les dernières technologies.',
    features: [
      'Sites vitrines',
      'Applications web complexes',
      'E-commerce',
      'Portails web',
    ],
  },
  {
    icon: <FaMobile />,
    title: 'Applications Mobiles',
     message:"Je souhaite en savoir plus sur votre service Applications Mobiles ",
    description: 'Développement d\'applications mobiles  cross-platform pour iOS et Android.',
    features: [
      'Applications natives',
      'Applications hybrides',
      'PWA',
      'Maintenance et mises à jour',
    ],
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce',
    message:"Je souhaite en savoir plus sur votre service E-commerce " ,
    description: 'Solutions e-commerce complètes pour vendre vos produits et services en ligne.',
    features: [
      'Boutiques en ligne',
      'Paiement sécurisé',
      'Gestion des stocks',
      'Marketing digital',
    ],
  },
  {
    icon: <FaChartLine />,
    title: 'Optimisation SEO',
     message:"Je souhaite en savoir plus sur votre service d'Optimisation SEO ",
    description: 'Amélioration de votre visibilité en ligne et de votre positionnement dans les moteurs de recherche.',
    features: [
      'Audit SEO',
      'Optimisation technique',
      'Contenu optimisé',
      'Suivi des performances',
    ],
  },
  {
    icon: <FaTools />,
    title: 'Maintenance & Support',
     message:"Je souhaite en savoir plus sur votre service de Maintenance & Support ",
    description: 'Services de maintenance et support technique pour assurer le bon fonctionnement de vos solutions digitales.',
    features: [
      'Maintenance préventive',
      'Support technique',
      'Mises à jour',
      'Sauvegardes',
    ],
  },
  {
    icon: <FaUsers />,
    title: 'Conseil & Formation',
     message:"Je souhaite en savoir plus sur votre service de Conseil & Formation ",
    description: 'Accompagnement et formation pour vous aider à maîtriser vos outils digitaux.',
    features: [
      'Audit technique',
      'Formation personnalisée',
      'Conseil stratégique',
      'Documentation',
    ],
  },
];

const ServiceSection = () => {
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
    <section ref={sectionRef} id="services" className="service-section">
      <div className="container">
        <div className="section-header">
          <h2 className='text-white'>Mes Services</h2>
          <div className="underline"></div>
        </div>

        <p className="section-description">
          Des solutions digitales sur mesure pour répondre à vos besoins spécifiques
          et propulser votre entreprise vers le succès.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el:any) => cardsRef.current[index] = el}
              className="service-card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>
              <ul className="features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href={`https://wa.me/237674606328?text=${service.message}`} className="cta-button">
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
