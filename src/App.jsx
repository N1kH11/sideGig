import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const imageContainersRef = useRef([]);

  const images = [
    "/p1.jpg",
    "/p2.jpeg",
    "/p3.JPG",
    "/p4.JPG",
    "/p5.JPG",
    "/p6.JPG",
    "/p7.JPG",
    "/p8.JPG",
    "/p9.JPG",
  ];

  // Background colors for each image (gradient from color to white)
  const backgroundColors = [
    "#E8D5E3", // Lavender-pink
    "#F5D7D9", // Soft pink
    "#E3E8F5", // Soft blue
    "#F0E8D5", // Soft beige
    "#E8F5E3", // Soft green
    "#F5E8D5", // Soft peach
    "#E8D5E8", // Soft purple
    "#D5E8F5", // Soft sky blue
    "#F5E8E3", // Soft rose
  ];

  useEffect(() => {
    imageContainersRef.current.forEach((container, index) => {
      if (container) {
        const img = container.querySelector("img");
        const section = container;
        const bgGradient = section.querySelector(".background-gradient");

        // Animate image
        gsap.fromTo(
          img,
          {
            opacity: 0,
            scale: 1.1,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Smooth background fade on scroll
        if (bgGradient) {
          gsap.fromTo(
            bgGradient,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
                scrub: 0.5, // Smooth scrubbing for better transition
              },
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Neha Banthia</h1>
        <p className="subtitle">Scraping life's art</p>
      </header>

      <main className="main-content">
        <div className="gallery">
          {images.map((image, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`image-section ${isLeft ? "left" : "right"}`}
                ref={(el) => (imageContainersRef.current[index] = el)}
              >
                <div
                  className="background-gradient"
                  style={{
                    background: `linear-gradient(to bottom, ${backgroundColors[index]}, #ffffff)`,
                  }}
                />
                <div className="image-container">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <nav className="nav">
        <button className="nav-button" onClick={() => setShowInfo(!showInfo)}>
          Info
        </button>
      </nav>

      {showInfo && (
        <div className="info-overlay" onClick={() => setShowInfo(false)}>
          <div className="info-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowInfo(false)}>
              ×
            </button>
            <div className="info-text">
              <p>
                Neha Banthia is a software engineer and artist based in India.
              </p>
              <div className="contact-info">
                {/* <a href="tel:+31619084555">+31 6 190 84 555</a>
                <a href="mailto:mail@simonesniekers.com">
                  mail@simonesniekers.com
                </a> */}
                <a
                  href="https://www.instagram.com/lifeescrap_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>Design Kalok Yeung</p>
        <p>Code Ezekiel Aquino</p>
      </footer>
    </div>
  );
}

export default App;
