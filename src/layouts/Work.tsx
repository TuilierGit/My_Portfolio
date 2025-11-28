import { NavLink } from "react-router-dom";
import ToolList from "../components/ToolList";

const Work = () => {
  return (
    <section className="workSection">
      <div className="workTitle">
        <h2>Mon travail</h2>
      </div>

      <div className="workContainer">
        <div className="workProjectPart">
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

        <div className="workLabPart">
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

        <div className="workToolPart">
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
