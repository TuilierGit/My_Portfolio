import { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ProjectList from "../components/ProjectList";
import LabProjects from "../data/projects/LabProjects";
import Contact from "../layouts/Contact";

const Lab = () => {
  const [currentListStyle, setCurrentListStyle] =
    useState<string>("smallProjectList");

  useEffect(() => {
    const bigList = document.getElementById("bigListButton");
    const smallList = document.getElementById("smallListButton");

    bigList?.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();
      bigList.classList.add("selected");
      smallList?.classList.remove("selected");
      setCurrentListStyle("bigProjectList");
    });

    smallList?.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();
      smallList.classList.add("selected");
      bigList?.classList.remove("selected");
      setCurrentListStyle("smallProjectList");
    });
  }, [currentListStyle, setCurrentListStyle]);

  return (
    <div className="page labPage">
      <Navigation />
      <div className="labHeader">
        <h1>Le Lab</h1>
        <div>
          <p>
            Le Lab a pour objectif de rassembler divers mini-projets, tels que
            des jeux, des outils ou encore des modèles de sites web.
          </p>
          <p>
            Je réalise ces mini-projets avant tout comme des exercices pratiques
            pour renforcer mes compétences en front-end comme en back-end. J’ai
            souhaité créer cet espace au sein de mon portfolio afin de les
            partager. Ces projets, souvent réalisés en seulement quelques heures
            de développement, n’ont pas vocation à être particulièrement
            ambitieux, mais illustrent mon envie d’expérimenter et d’apprendre
            continuellement.
          </p>
        </div>
      </div>
      <div className="labViewButtons">
        <div id="bigListButton">
          <BsList />
        </div>
        <div id="smallListButton" className="selected">
          <LuLayoutGrid />
        </div>
      </div>
      <ProjectList projects={LabProjects} listStyle={currentListStyle} />
      <div className="labBanner">
        <h3>La suite ?</h3>
        <p>
          Vous souhaitez découvrir d’autres projets ? Rendez-vous sur mon GitHub
          : TuilierGit. Vous y trouverez de nombreux travaux tout aussi amusants
          qu’intéressants.
        </p>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Lab;
