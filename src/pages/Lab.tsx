import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import LabProjects from "../data/projects/LabProjects";

const Lab = () => {
  return (
    <div className="page">
      <Navigation />
      <Projects projects={LabProjects} />
      <Footer />
    </div>
  );
};

export default Lab;
