import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="page" style={{ minHeight: "100vh" }}>
      <Navigation />

      <Accordion />

      <Footer />
    </div>
  );
};

export default About;
