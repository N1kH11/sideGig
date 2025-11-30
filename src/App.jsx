import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lightenColor, interpolateColors } from "./utils/colorExtractor";
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

  // Background colors for each image (provided hex colors)
  const backgroundColors = [
    "#FFDC81", // p1
    "#98C0CE", // p2
    "#79B480", // p3
    "#E3AE83", // p4
    "#C4B898", // p5
    "#5A576A", // p6
    "#7A5DD5", // p7
    "#93918C", // p8
    "#CEE6F3", // p9
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

        // Smooth background color transition based on scroll
        if (bgGradient) {
          const currentBaseColor = backgroundColors[index];
          const currentLightColor = lightenColor(currentBaseColor, 50);

          // Get next section's colors for smooth transition
          const nextIndex = index + 1;
          const nextBaseColor =
            nextIndex < backgroundColors.length
              ? backgroundColors[nextIndex]
              : currentBaseColor;
          const nextLightColor = lightenColor(nextBaseColor, 50);

          // Animate color transition as you scroll through the section
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;

              // Interpolate base color
              const interpolatedBase = interpolateColors(
                currentBaseColor,
                nextBaseColor,
                progress
              );

              // Interpolate light color
              const interpolatedLight = interpolateColors(
                currentLightColor,
                nextLightColor,
                progress
              );

              // Update background gradient
              bgGradient.style.background = `linear-gradient(to bottom, ${interpolatedBase}, ${interpolatedLight})`;
            },
          });

          // Initial fade in
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
                    background: `linear-gradient(to bottom, ${
                      backgroundColors[index]
                    }, ${lightenColor(backgroundColors[index], 50)})`,
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
        <p>Design Neha Banthia</p>
        <p>Code Neha Banthia</p>
      </footer>
    </div>
  );
}

export default App;
