import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Strong from "../components/buttons/Strong";
import Background from "../layouts/Background";
import Contact from "../layouts/Contact";
import Work from "../layouts/Work";

const Home = () => {
  const [visiblePresentation, setVisiblePresentation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisiblePresentation(true);
    }, 1000);
  }, []);

  return (
    <div className="page home-page" style={{ minHeight: "100vh" }}>
      <Navigation transition={true} />
      <div className="home-presentation">
        <div
          className={
            visiblePresentation
              ? "left visible-speed-1"
              : "left hidden visible-speed-1"
          }
        >
          <div className="presentation-container">
            <h1>Thomas Tuilier</h1>
            <div>
              <p
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  padding: "0",
                  margin: "0",
                }}
              >
                Créateur · Programmeur · Ingénieur
              </p>
              <p style={{ fontSize: "1rem" }}>
                Envie de collaborer sur un projet ? Contactez-moi.
              </p>
            </div>
            <div>
              <Strong
                url="mailto:thomas.tuilier@gmail.com"
                text="Contactez-moi"
              />
            </div>
          </div>
        </div>
      </div>

      <Background />

      <Work />

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "40px 0",
          borderTop: "solid 1px lightgray",
        }}
      >
        <Contact />
      </div>

      <Footer />
      <div id="bubble-1" className="bubble"></div>
      <div id="bubble-2" className="bubble"></div>
      <div id="bubble-3" className="bubble"></div>
      <div id="bubble-4" className="bubble"></div>
      <div id="last-visible-box"></div>
    </div>
  );
};

export default Home;
