import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

const Lab = () => {
  const project1Buttons = [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/bubble-game",
    },
    {
      id: 2,
      type: "game",
      text: "",
      url: "https://tuiliergit.github.io/bubble-game/",
    },
  ];

  const project2Buttons = [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/My_Portfolio",
    },
    // ,
    // {
    //   id: 2,
    //   type: "strong",
    //   text: "Voir le site",
    //   url: "",
    // },
  ];

  const projects = [
    {
      id: 1,
      title: "Mon Portfolio",
      tags: ["HTML", "Scss", "TypeScript", "React"],
      body: `Site réalisé en React avec l'utilisation de Vite pour créer le projet : <code>npm create vite@latest</code>.
      <br>
      <br>
      Ce site a été entièrement réalisé par moi, mais le style du site n'a pas été inventé par moi ; il est inspiré du portfolio de <a href="https://junhyungpark.com">Jay Park</a> que j'avais adoré.`,
      mediaUrl: "./projects/project_myPortfolio.png",
      mediaType: "img",
      buttons: project2Buttons,
    },
    {
      id: 2,
      title: "Bubble Game",
      tags: ["HTML", "CSS", "JavaScript"],
      body: `
      Jeu fait en <strong>vanilla JavaScript</strong>, où l'on doit casser un maximum de bulles durant 1 minute.
      <br>
      <br> 
      Ce projet permet d'explorer les différents mécanismes d'interaction avec le <strong>DOM (Document Object Model)</strong> en JavaScript.`,
      mediaUrl: "./projects/project_bubbleGame.webm",
      mediaType: "video",
      buttons: project1Buttons,
    },
  ];

  return (
    <div className="page">
      <Navigation />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

export default Lab;
