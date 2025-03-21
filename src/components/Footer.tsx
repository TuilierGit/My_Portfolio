import { VscChevronRight } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="footer">
      <div></div>
      <div>
        <h4>Projets</h4>
        <ul>
          <a href="https://github.com/TuilierGit/My_Portfolio" target="_blank">
            <li>
              <VscChevronRight />
              Mon portfolio
            </li>
          </a>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/thomas-tuilier-31655b24b"
              target="_blank"
            >
              <VscChevronRight />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/CV_Tuilier_Thomas.pdf" target="_blank">
              <VscChevronRight />
              Mon CV
            </a>
          </li>
          <li>
            <a href="mailto:thomas.tuilier@gmail.com">
              <VscChevronRight />
              Mail
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>© 2025 Tuilier Thomas.</p>
        <p>Tous droits réservés.</p>
        <p>Site fait par mes soins.</p>
      </div>
    </div>
  );
};

export default Footer;
