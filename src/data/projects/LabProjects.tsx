const projectButtons = {
  "Mon Portfolio": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/My_Portfolio",
    },
  ],
  Quiz: [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/Quiz",
    },
    {
      id: 2,
      type: "game",
      text: "",
      url: "https://tuiliergit.github.io/Quiz",
    },
  ],
  Blablagues: [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/Blablagues",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/Blablagues",
    },
  ],
  "Random Color Generator": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/random-color-generator",
    },
    {
      id: 2,
      type: "tool",
      text: "",
      url: "https://tuiliergit.github.io/random-color-generator",
    },
  ],
  "JS Meal App": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/javascript-meal-app",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/javascript-meal-app",
    },
  ],
  "JS Flag App": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/javascript-flag-app",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/javascript-flag-app",
    },
  ],
  "Bubble Game": [
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
  ],
  "Gaming Campus": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/Gaming_Campus",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/Gaming_Campus",
    },
  ],
  "Hiking Website": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/Hiking_Website",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/Hiking_Website",
    },
  ],
  "The Resto": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/The_Resto",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/The_Resto",
    },
  ],
  "Password Generator": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/Password-Generator",
    },
    {
      id: 2,
      type: "tool",
      text: "",
      url: "https://tuiliergit.github.io/Password-Generator",
    },
  ],
  "To-Do List": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/To-Do-List",
    },
    {
      id: 2,
      type: "tool",
      text: "",
      url: "https://tuiliergit.github.io/To-Do-List",
    },
  ],
  "Serenity Stretch": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/Serenity-Stretch",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/Serenity-Stretch",
    },
  ],
  Run: [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/Run",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/Run",
    },
  ],
  "Flappy Bird": [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/Flappy-Bird",
    },
    {
      id: 2,
      type: "game",
      text: "",
      url: "https://tuiliergit.github.io/Flappy-Bird",
    },
  ],
  Tinder: [
    {
      id: 1,
      type: "github",
      text: "",
      url: "https://github.com/TuilierGit/tinder",
    },
    {
      id: 2,
      type: "website",
      text: "",
      url: "https://tuiliergit.github.io/tinder",
    },
  ],
};

const LabProjects = [
  {
    id: 10,
    title: "Mon Portfolio",
    tags: ["HTML", "Sass", "TypeScript", "React"],
    url: "https://tuilier-thomas.netlify.app",
    body: `Site réalisé en React avec l'utilisation de Vite pour créer le projet : <code>npm create vite@latest</code>.
      <br>
      <br>
      Ce site a été entièrement réalisé par moi, mais le style du site n'a pas été inventé par moi ; il est inspiré du portfolio de <a href="https://junhyungpark.com">Jay Park</a> que j'avais adoré.`,
    mediaUrl: "./projects/project_myPortfolio.png",
    mediaType: "img",
    buttons: projectButtons["Mon Portfolio"],
  },
  {
    id: 11,
    title: "Quiz",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/Quiz",
    body: `Petite application de quiz réalisée en Vanilla JavaScript.`,
    mediaUrl: "./projects/project_quiz.png",
    mediaType: "img",
    buttons: projectButtons["Quiz"],
  },
  {
    id: 12,
    title: "Blablagues",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/Blablagues",
    body: `Petite application réalisée en Vanilla JavaScript. 
    <br>
    <br> 
    Elle utilise l’API de blablagues.net pour afficher une nouvelle blague à chaque clic sur la page.
    `,
    mediaUrl: "./projects/project_blablagues.png",
    mediaType: "img",
    buttons: projectButtons["Blablagues"],
  },
  {
    id: 13,
    title: "Random Color Generator",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/random-color-generator",
    body: `
      Petit outil JavaScript pour générer des couleurs aléatoires.
    `,
    mediaUrl: "./projects/project_randomColorGenerator.png",
    mediaType: "img",
    buttons: projectButtons["Random Color Generator"],
  },
  {
    id: 14,
    title: "JS Meal App",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/javascript-meal-app",
    body: `
      Petite application réalisée en Vanilla JavaScript, listant une série de repas ainsi que les ingrédients nécessaires pour les préparer.
    `,
    mediaUrl: "./projects/project_mealApp.png",
    mediaType: "img",
    buttons: projectButtons["JS Meal App"],
  },
  {
    id: 15,
    title: "JS Flag App",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/javascript-flag-app",
    body: `
      Petite application réalisée en Vanilla JavaScript, qui liste les drapeaux du monde.
    `,
    mediaUrl: "./projects/project_flagApp.png",
    mediaType: "img",
    buttons: projectButtons["JS Flag App"],
  },
  {
    id: 17,
    title: "Tinder",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/tinder",
    body: `
    Une version de Tinder réalisée en vanilla JavaScript. 
    <br>
    <br>
    Les données des utilisateurs proviennent de l’API randomuser.me ; cependant, en raison de la mauvaise qualité des photos, celles-ci ont été remplacées par des photos de recettes provenant de l’API themealdb.com.
    `,
    mediaUrl: "./projects/project_tinder.png",
    mediaType: "img",
    buttons: projectButtons["Tinder"],
  },
  {
    id: 20,
    title: "Serenity Stretch",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/Serenity-Stretch",
    body: `
      Site Web en HTML/CSS et vanilla JavaScript permettant de réaliser des exercices de yoga.
      `,
    mediaUrl: "./projects/project_serenityStretch.png",
    mediaType: "img",
    buttons: projectButtons["Serenity Stretch"],
  },
  {
    id: 30,
    title: "Bubble Game",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://tuiliergit.github.io/bubble-game/",
    body: `
      Jeu fait en <strong>vanilla JavaScript</strong>, où l'on doit casser un maximum de bulles durant 1 minute.
      <br>
      <br> 
      Ce projet permet d'explorer les différents mécanismes d'interaction avec le <strong>DOM (Document Object Model)</strong> en JavaScript.`,
    mediaUrl: "./projects/project_bubbleGame.png",
    mediaType: "img",
    // mediaUrl: "./projects/project_bubbleGame.webm",
    // mediaType: "video",
    buttons: projectButtons["Bubble Game"],
  },
  {
    id: 40,
    title: "Gaming Campus",
    tags: ["HTML", "CSS"],
    url: "https://tuiliergit.github.io/Gaming_Campus",
    body: `
      Site vitrine inspiré d’une version du site de Gaming Campus. 
      <br>
      <br> 
      Ce projet m’a permis de travailler la structure d’une page ainsi que la mise en forme en utilisant les outils les plus standards : HTML et CSS.`,
    mediaUrl: "./projects/project_gamingCampus.png",
    mediaType: "img",
    buttons: projectButtons["Gaming Campus"],
  },
  {
    id: 50,
    title: "Password Generator",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/Password-Generator",
    body: `
      Outil réalisé en Vanilla JavaScript permettant de générer un mot de passe aléatoire en fonction de différents critères (majuscules, minuscules, chiffres, etc.).
      `,
    mediaUrl: "./projects/project_passwordGenerator.png",
    mediaType: "img",
    buttons: projectButtons["Password Generator"],
  },
  {
    id: 60,
    title: "To-Do List",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/To-Do-List",
    body: `
      Outil simple de to-do list en vanilla JavaScript. Cet outil permet de prendre des notes de choses à faire et de les conserver dans le temps grâce au système de local storage.
      `,
    mediaUrl: "./projects/project_toDoList.png",
    mediaType: "img",
    buttons: projectButtons["To-Do List"],
  },
  {
    id: 70,
    title: "Run",
    tags: ["HTML", "CSS"],
    url: "https://tuiliergit.github.io/Run",
    body: `
    Page web conçue exclusivement en HTML et CSS.
    <br> 
    L’objectif de ce projet était d’explorer les animations CSS, notamment la création de fondus élégants, sans recourir à JavaScript.
    `,
    mediaUrl: "./projects/project_run.png",
    mediaType: "img",
    buttons: projectButtons["Run"],
  },
  {
    id: 80,
    title: "Flappy Bird",
    tags: ["HTML", "CSS", "Javascript"],
    url: "https://tuiliergit.github.io/Flappy-Bird",
    body: `
    Reproduction du célèbre jeu Flappy Bird. 
    <br>
    <br>
    Ce projet m’a permis de me familiariser avec l’utilisation du canvas en vanilla JavaScript.
    `,
    mediaUrl: "./projects/project_flappyBird.png",
    mediaType: "img",
    buttons: projectButtons["Flappy Bird"],
  },
  {
    id: 90,
    title: "Hiking Website",
    tags: ["HTML", "Sass"],
    url: "https://tuiliergit.github.io/Hiking_Website",

    body: `
      Exemple de page vitrine sur le thème de la randonnée, réalisée en HTML et Sass. 
      <br>
      <br> 
      Le design de ce site est inspiré du thème “This Is Massively”.`,
    mediaUrl: "./projects/project_hikingWebsite.png",
    mediaType: "img",
    buttons: projectButtons["Hiking Website"],
  },
  {
    id: 100,
    title: "The Resto",
    tags: ["HTML", "Sass"],
    url: "https://tuiliergit.github.io/The_Resto",
    body: `
      Exemple de page vitrine sur le thème d’un restaurant avec le nom très original "The Resto", réalisée en HTML et Sass.
      `,
    mediaUrl: "./projects/project_theResto.png",
    mediaType: "img",
    buttons: projectButtons["The Resto"],
  },
];

export default LabProjects;
