import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  const accordions = [
    {
      id: 1,
      title: "Parcours & Formation",
      body: "Après deux années d'études en classe préparatoire en spécialité sciences de l'ingénieur au lycée Gustave Eiffel de Bordeaux, j'ai décidé de partir faire de l'informatique à l'<strong>ENSEIRB MATMECA</strong> de Talence où j'ai réalisé mes trois années pour finir avec un niveau <strong>Bac+5</strong> et une spécialité <strong>Cybersécurité, Systèmes & Réseaux</strong> labéllisée SecNumedu par l'ANSSI.",
    },
    {
      id: 2,
      title: "Compétences & Technologies",
      body: "Ces dernières années, j’ai eu la chance de pouvoir découvrir de nombreuses technologies. Je citerai du Web : <strong>JavaScript</strong>, <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>, du développement orienté objet : <strong>Java</strong>, <strong>Python</strong>, des outils de DevOps : <strong>Docker</strong>. N'hésitez pas à aller voir les différents projets disponibles dans le Lab pour vous faire votre propre idée :)",
    },
    {
      id: 3,
      title: "Expériences & Projets",
      body: "Jusqu'à présent, j'ai eu la chance de pouvoir faire deux stages en entreprise. Actuellement, je suis à la recherche d'un dernier stage de 6 mois afin de valider mes études. Si vous êtes intéressé par l'idée de travailler ensemble, n'hésitez pas à me contacter.",
    },
  ];
  return (
    <div className="page" style={{ minHeight: "100vh" }}>
      <Navigation />

      <div className="page-container about-container">
        <h1>Thomas Tuilier</h1>
        <p>
          Jeune ingénieur bientôt diplômé, je suis passionné par l'informatique
          et tout ce qui est créatif. Actuellement basé près de Bordeaux,
          n'hésitez pas à me contacter pour toute demande.
        </p>
        <Accordion accordions={accordions} />
      </div>
      <Footer />
    </div>
  );
};

export default About;
