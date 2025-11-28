import { JSX, useEffect, useMemo, useState } from "react";

const Background = () => {
  const createBackgroundItem = (
    company: string,
    jobTitle: string,
    text: string,
    imgPath: string
  ): JSX.Element => {
    return (
      <div className="backgroundItem newVisibility">
        <div className="textContainer">
          <h3>{company}</h3>
          <h4>{jobTitle}</h4>
          <p>{text}</p>
        </div>
        <div className="imgContainer">
          <img src={imgPath} alt={company + " logo"}></img>
        </div>
      </div>
    );
  };

  const workText = useMemo<Record<string, JSX.Element>>(
    () => ({
      "internship-ubisoft": createBackgroundItem(
        "Ubisoft Bordeaux",
        "Cloud Engineer Assistant",
        "Participation au développement du système d’orchestration cloud pour du cloud gaming : AWS/GCP, Kubernetes, Docker. Contribution à l’automatisation des flux GameLab via la création de microservices en Go/TypeScript et l’amélioration de l’interface d’administration.",
        "./logos/ubisoft.png"
      ),
      "internship-osi": createBackgroundItem(
        "Objectif Sciences - International",
        "Full-Stack",
        "Mise en place de sites avec HTML, CSS et Javascript. Utilisation des CMS : SPIP et Prestashop. Création d’un plugin de gestion de projets réalisé en PHP",
        "./logos/osi.webp"
      ),
      "internship-gertrude": createBackgroundItem(
        "Gertrude Saem",
        "Data-Analyst",
        "Analyses de données sous environnement Python. Filtrage et prédictions des données PostgreSQL.",
        "./logos/gertrude.png"
      ),
    }),
    []
  );

  const backgroundHtml = useMemo<JSX.Element>(
    () => (
      <>
        <div
          className="topBackground"
          style={{
            background: "url(office.jpg) center / cover",
          }}
        ></div>
        <div className="portrait">
          <img src="./photo.jpg" alt="portrait" />
        </div>
        <ul>
          <li>DevOps</li>
          <li>Cloud</li>
          <li>Back-End</li>
          <li>Front-End</li>
        </ul>
      </>
    ),
    []
  );
  const [topContent, setTopContent] = useState<JSX.Element>(backgroundHtml);

  useEffect(() => {
    document.querySelectorAll(".backgroundList li").forEach((element) => {
      element.addEventListener("click", () => {
        document
          .querySelector(".backgroundContainer")
          ?.classList.add("lastVisibility");
        setTimeout(() => {
          document
            .querySelector(".backgroundContainer")
            ?.classList.remove("lastVisibility");
          document
            .querySelector(".backgroundContainer")
            ?.classList.add("newVisibility");
          if (topContent !== workText[element.id]) {
            setTopContent(workText[element.id]);
          } else {
            setTopContent(backgroundHtml);
          }
        }, 700);
      });
    });
  }, [backgroundHtml, topContent, workText]);

  return (
    <section className="myBackground">
      <h2>Mon parcours</h2>
      <div className="backgroundContainer">{topContent}</div>

      <div className="backgroundList">
        <ul>
          <li id="internship-ubisoft">
            <div>DevOps</div>
            <div>Ubisoft</div>
            <div>6 mois - 2025</div>
          </li>
          <li id="internship-osi">
            <div>Full-Stack</div>
            <div>OSI</div>
            <div>4 mois - 2024</div>
          </li>
          <li id="internship-gertrude">
            <div>Data-Analyst</div>
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
  );
};

export default Background;
