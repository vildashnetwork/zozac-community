import React, { useState } from 'react';
import heroimage from '/logo4.jpg';

import './Hero.css';
import Donate from '../../Pages/Donation/Donate';

const HERO_SLIDES = [
  '/img9.jpg',
  '/img8.jpg',
  '/img21.jpg',
  '/img35.jpg',
  '/img20.jpg',
];

const Hero = () => {
  const [donate, setdonate] = useState(false);
  return (
    <>
      {donate && <Donate />}
      <section id="home" className="hero hero-advanced">
        {/* Crossfading photo backdrop */}
        <div className="hero-slideshow" aria-hidden="true">
          {HERO_SLIDES.map((src) => (
            <span
              key={src}
              className="hero-slide"
              style={{ backgroundImage: `url("${src}")` }}
            />
          ))}
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-glow hero-glow-a" aria-hidden="true" />
        <div className="hero-glow hero-glow-b" aria-hidden="true" />

        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-kicker">
              <span className="hero-kicker-dot" />
              Non-profit &bull; Community-led &bull; Cameroon
            </span>
            <h1 className="hero-title">
              Welcome to{' '}
              <span className="hero-highlight">
                ZOZAC&nbsp;Community
                <svg
                  className="hero-underline"
                  viewBox="0 0 220 14"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10 C 60 3, 160 3, 216 8"
                    fill="none"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="hero-lead">
              Promoting Peace, Social Cohesion, Education, Youth
              Empowerment &amp; Community Development.
            </p>
            <div className="hero-cta-row">
              <button
                type="button"
                className="hero-btn-donate"
                onClick={() => setdonate(true)}
              >
                Donate <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
              <a
                href="https://youtube.com/@zozaccommunity?si=GHaomJurbQWfk_2A"
                className="hero-btn-watch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hero-play">
                  <i className="fas fa-play" aria-hidden="true"></i>
                </span>
                Watch a video
              </a>
            </div>
            <ul className="hero-ticks">
              <li>
                <i className="fas fa-check" aria-hidden="true"></i>
                Community-led programs
              </li>
              <li>
                <i className="fas fa-check" aria-hidden="true"></i>
                Youth &amp; women empowerment
              </li>
              <li>
                <i className="fas fa-check" aria-hidden="true"></i>
                Transparent giving
              </li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <img src={heroimage} alt="ZOZAC Community in action" />
              <div className="hero-frame-bar" aria-hidden="true" />
            </div>
            <div className="hero-float hero-float-top">
              <span className="hero-float-icon">
                <i className="fas fa-handshake" aria-hidden="true"></i>
              </span>
              <span>
                <strong>Peace &amp; Cohesion</strong>
                <small>United communities</small>
              </span>
            </div>
            <div className="hero-float hero-float-bottom">
              <span className="hero-float-icon">
                <i className="fas fa-graduation-cap" aria-hidden="true"></i>
              </span>
              <span>
                <strong>Youth Empowerment</strong>
                <small>Skills for the future</small>
              </span>
            </div>
            <div className="hero-ring" aria-hidden="true" />
          </div>
        </div>

        <a className="hero-scroll" href="#features" aria-label="Scroll to content">
          <span />
        </a>

        <div className="hero-wave" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;






