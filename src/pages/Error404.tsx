import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Error404 = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="error404-container">
        <h1>Error 404</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
