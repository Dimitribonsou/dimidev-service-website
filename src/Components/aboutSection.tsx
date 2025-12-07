import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaWhatsapp, FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
// import photo_dimi from '../assets/photo_acceuil.png';
// import photo_dimi from '../assets/profil_dimidev_new.png';
// import photo_dimi from '../assets/new_profil.png';
import photo_dimi from '../assets/about_img.jpg';
import './Style/aboutSection.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });
    gsap.from(contentRef.current, {
      scrollTrigger: {
          trigger: sectionRef.current,
          toggleActions: "restart reverse",
          start: "top 30%",
      },
      y:-100,
      opacity:1,
      // eas:"elastic.out(0.4,0.15)",
      duration:2,
      stagger:0.5 
   })
    // tl.from(contentRef.current, {
    //   duration: 1,
    //   y: 20,
    //   opacity: 0.5,
    //   ease: 'power1.out',
    // })
    tl.from(imageRef.current, {
      x: 100,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
    }, '-=0.5');
  }, []);

  return (
    <section ref={sectionRef} id="about" className=" about-section">
      <div className="container">
        <div className="content order-2 md:order-1" ref={contentRef}>
          <div className="section-header">
            <h2>À propos de moi</h2>
            <div className="underline"></div>
          </div>

          <div className="about-content">
            <p className="lead">
              Développeur  & Digital Marketer passionné, je transforme vos idées en solutions digitales performantes et évolutives.
            </p>
            
            <p className="description">
              Avec plus de 3 ans d'expérience dans le développement web et mobile , je m'engage à créer des solutions sur mesure qui répondent parfaitement aux besoins de votre entreprise. Mon expertise en développement et Marketing me permet de concevoir des plateformes et stratégies digitales éfficaces pour atteindre vos objectifs commerciaux.</p>

            <div className="expertise" id='contact'>
              <h3>Mon expertise</h3>
              <ul>
                <li>Développement d'applications web modernes et responsives</li>
                <li>Création d'applications mobiles performantes</li>
                <li>Conception d'architectures évolutives</li>
                <li>Optimisation des performances et de l'expérience utilisateur</li>
                <li>Marketing digital</li>
              </ul>
            </div>

            <div className="contact-info" >
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Email</span>
                  <a href="mailto:dimidev26@gmail.com" className="value">
                    dimidev26@gmail.com
                  </a>
                </div>
                <div className="info-item">
                  <span className="label">Téléphone</span>
                  <a href="tel:+237674606328" className="value">
                    +237 674 60 63 28
                  </a>
                </div>
                {/* <div className="info-item">
                  <span className="label">Localisation</span>
                  <span className="value">Douala, Cameroun</span>
                </div> */}
                <div className="info-item">
                  <span className="label">Disponibilité</span>
                  <span className="value">Immédiate</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Dimitribonsou"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61571160665639"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/237674606328?text=Salut , Je souhaite discuter sur mon projet avec vous .Et-vous disponible ?"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:dimidev26@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="flex gap-2 cta-group">
              {/* <a
                href={require('../assets/CV_dimidev.pdf')}
                download="cv_dimitribonsou.pdf"
                className="btn btn-primary"
              >
                Télécharger mon CV
              </a> */}
              <a
                href="https://wa.me/237674606328?text=Salut , Je souhaite discuter sur mon projet avec vous .Et-vous disponible ?"
                className="btn btn-secondary  hover:text-white"
              >
                Discutons de votre projet
              </a>
            </div>
          </div>
        </div>

        <div className="image-container order-1 md:order-2 mb-14 md:mb-0" ref={imageRef}>
          <div className="image-wrapper">
            <img
              src={photo_dimi}
              alt="Dimidev - Développeur Web & Mobile"
              className="profile-image"
            />
            <div className="experience-badge">
              <span className="years text-white">3+</span>
              <span className="text text-white">Années d'expérience</span>
            </div>
          </div>
        </div>
      </div>
      <a href="https://wa.me/237674606328?text=Salut , Je souhaite discuter sur mon projet avec vous .Et-vous disponible ?" className='fixed bg-green-600 text-white w-14 h-14 rounded-full top-[70%] md:top-[80%] right-5 animate-spin annimate-infite z-50 flex justify-center items-center  text-2xl cursor-pointer hover:scale-105'>
         <FaWhatsapp />
      </a>
    </section>
  );
};

export default AboutSection;
