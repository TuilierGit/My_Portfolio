import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ToolList from "../components/ToolList";
import Strong from "../components/buttons/Strong";
import Contact from "../layout/Contact";

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
            <h1>Tuilier Thomas</h1>
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

      <section className="myBackground">
        <h2>Mon parcours</h2>
        <div className="backgroundContainer">
          <div className="topBackground"></div>
          <div className="portrait">
            <img src="./photo.jpg" alt="portrait" />
          </div>
          <ul>
            <li>DevOps</li>
            <li>Cloud</li>
            <li>Back-End</li>
            <li>Front-End</li>
          </ul>
        </div>

        <div className="backgroundList">
          <ul>
            <li>
              <div>DevOps</div>
              <div>Ubisoft</div>
              <div>6 mois - 2025</div>
            </li>
            <li>
              <div>Full-Stack</div>
              <div>OSI</div>
              <div>4 mois - 2024</div>
            </li>
            <li>
              <div>Back-End</div>
              <div>Gertrude Saem</div>
              <div>2 mois - 2023</div>
            </li>
          </ul>

          <p>
            Ingénieur diplômé de l’ENSEIRB-MATMECA à Talence, je suis un grand
            passionné d’informatique. J’ai créé ce portfolio pour présenter mon
            travail et partager certains de mes projets.
          </p>
        </div>
      </section>

      <div
        className="center-child"
        style={{
          marginTop: "30px",
          padding: "70px 0 ",
          borderTop: "solid 1px lightgray",
          borderBottom: "solid 1px lightgray",
          textTransform: "uppercase",
          background: "#ffffff",
          textDecoration: "overline",
        }}
      >
        <h2>Mon travail</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: '"projets lab" "steps steps" ',
          borderBottom: "solid 1px lightgray",
          background: "#ffffff",
        }}
      >
        <section
          style={{
            margin: "35px 0",
            padding: "25px 5%",
            borderRight: "solid 1px lightgray",
            gridArea: "projets",
            textAlign: "center",
          }}
        >
          <h2>Mes projets</h2>
          <p>
            Vous pouvez voir mes projets en cours dans la page Projets du site.
            Ces projets sont des projets personnels d'une taille importante, qui
            sont le résultat de plusieurs mois de travail. Si vous souhaitez les
            découvrir et les soutenir, allez sur la page Projets.
          </p>
          <div className="center-child">
            <NavLink
              to={"projects"}
              className={"strong-button"}
              onClick={() => window.scrollTo(0, 0)}
            >
              Voir mes Projets
            </NavLink>
          </div>
        </section>

        <section
          style={{
            margin: "35px 0 ",
            textAlign: "center",

            padding: "25px 5%",
            gridArea: "lab",
          }}
        >
          <h2>Le Lab</h2>
          <p>
            Si vous voulez découvrir des mini-projets comme des jeux, des outils
            ou des templates de sites Web, la page Lab est faite pour vous. Elle
            regroupe un ensemble de ces mini-projets que j’ai réalisés et offre
            pour chacun d’eux la possibilité de les utiliser ainsi qu’un lien
            vers la page GitHub du projet.
          </p>

          <div className="center-child">
            <NavLink
              to={"lab"}
              className={"strong-button"}
              onClick={() => window.scrollTo(0, 0)}
            >
              Voir le Lab
            </NavLink>
          </div>
        </section>

        <section
          style={{
            background: "white",
            borderTop: "solid 1px lightgray",
            gridArea: "steps",
            padding: "25px 5%",
          }}
        >
          <h2>Mes outils</h2>
          <div className="toolListContainer">
            <ToolList />
            <ToolList />
            <ToolList />
          </div>
        </section>
      </div>

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
      <div id="line-1" className="line"></div>
      <div id="line-2" className="line"></div>
      <div id="line-3" className="line"></div>
      <div id="line-4" className="line"></div>
      <div id="last-visible-box"></div>
    </div>
  );
};

export default Home;
