import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Style/homeSection.scss';
import project_image from './../assets/affiche_depenseTrack.png';

gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(textRef.current, {
      // x: 50,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
    })
    .from(ctaRef.current, {
      y: 25,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5');
  }, []);

  return (
    <section ref={sectionRef} id="home" className="home-section">
      <div className="container">
        <div className="content">
          <div className='w-full md:h-[70vh]  flex justify-between items-center flex-wrap gap-5 p-0 mb-5'>
            <div className='w-full md:w-[55%] '>
                <h1 ref={textRef} className="title ">
                  Je conçois des stratégies et plateformes sur‑mesure pour booster vos résultats
                </h1>
                {/* <p className="subtitle">
                  Développeur web & mobile full-stack basé à Douala, je transforme vos idées en solutions digitales performantes et évolutives.
                </p> */}
                <div ref={ctaRef} className="cta-group">
                  <a href="https://wa.me/237674606328?text=Je souhaite discuter sur mon projet avec vous .Et-vous disponible ?" className="btn btn-primary text-white">
                    Discutons de votre projet
                  </a>
                  <a href="#projets" className="btn btn-secondary">
                    Voir mes réalisations
                  </a>
                </div>
            </div>
            <div className=' relative w-full md:w-[40%] md:h-[350px]  min-w-36'>
              <a href="#projets">
                <img src={project_image} alt="" className='w-full  h-full min-h-24 cursor-pointer' />
                <div className=' nowrap absolute bg-green-600 text-white top-1/2 right-12 md:right-1/3 translate-x-1/2 translate-y-1/2 p-2 shadow-2xl shadow-slate-300 rounded-sm cursor-pointer animate-bounce md:animate-bounce  animate-infinite animate-ease-in-out animate-duration-[80s] animate-delay-[2s]'>
                  <span className='w-fit'>Voir mes projets récents cliquez ici </span>
                </div>
              </a>
            </div>
          </div>
          <div className="stats">
            <div className="stat-item">
              <span className="number">3+</span>
              <span className="label">Années d'expérience</span>
            </div>
            <div className="stat-item">
              <span className="number">20+</span>
              <span className="label">Projets réalisés</span>
            </div>
            <div className="stat-item">
              <span className="number">100%</span>
              <span className="label">Clients satisfaits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
