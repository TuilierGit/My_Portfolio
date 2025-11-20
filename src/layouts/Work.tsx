import { NavLink } from "react-router-dom";
import ToolList from "../components/ToolList";

const Work = () => {
  return (
    <section>
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
        <div
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
        </div>

        <div
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
        </div>

        <div
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
        </div>
      </div>
    </section>
  );
};

export default Work;
