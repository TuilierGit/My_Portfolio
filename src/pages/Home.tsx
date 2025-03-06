import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  const [visiblePresentation, setVisiblePresentation] = useState(false);
  const [visiblePicture, setVisiblePicture] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisiblePresentation(true);
    }, 1000);

    setTimeout(() => {
      setVisiblePicture(true);
    }, 1500);
  }, []);

  return (
    <div className="page" style={{ minHeight: "100vh" }}>
      <Navigation transition={true} />
      <div className="presentation-container home-presentation">
        <div
          id="left-presentation"
          className={
            visiblePresentation
              ? "left visible-speed-1"
              : "left hidden visible-speed-1"
          }
        >
          <h1>Tuilier Thomas</h1>
          <div>
            <p>
              Étudiant en dernière année à l'ENSEIRB-MATMECA de Talence, je suis
              passionné par l'informatique. J'ai créé ce portfolio pour partager
              certains de mes projets. Actuellement, je recherche un stage de 6
              mois pour finaliser mes études. Si vous êtes intéressé par une
              collaboration, n'hésitez pas à me contacter.
            </p>
          </div>
          <div>
            <a href="mailto:thomas.tuilier@gmail.com">
              <button className="strong-button">Contactez-moi</button>
            </a>
          </div>
        </div>

        <div
          className={
            visiblePicture
              ? "right visible-speed-1"
              : "right hidden visible-speed-1"
          }
        >
          <img src="photo.jpg" alt="Ma photo" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
