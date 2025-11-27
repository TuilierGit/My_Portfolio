import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Lab = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="mainProjectList">
        <div id="finatrac-project" className="item">
          <a href="https://finatrac.com" className="project" target="blank"></a>
          <div className="title">
            <h2>Projet : Finatrac</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lab;
