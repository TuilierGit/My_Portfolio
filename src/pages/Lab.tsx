import { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ProjectList from "../components/ProjectList";
import LabProjects from "../data/projects/LabProjects";
import Contact from "../layout/Contact";

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
    <div className="page">
      <Navigation />
      <div className="labHeader">
        <div className="left"></div>
        <div className="right">
          <div id="bigListButton">
            <BsList />
          </div>
          <div id="smallListButton" className="selected">
            <LuLayoutGrid />
          </div>
        </div>
      </div>
      <div id="test"></div>
      <ProjectList projects={LabProjects} listStyle={currentListStyle} />
      <div
        style={{
          background: "#fafafa",
          padding: "25px 5%",
          margin: "25px 0 0",
          borderTop: "solid 1px lightgray",
          borderBottom: "solid 1px lightgray",
        }}
      >
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
