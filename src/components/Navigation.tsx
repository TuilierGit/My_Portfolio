import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  transition?: boolean;
}

const Navigation = ({ transition = false }: Props) => {
  const [visible, setVisible] = useState(false);
  const [oldScrollY, setOldScrollY] = useState(0);
  const navbar = document.querySelector(".navigation");

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > oldScrollY) {
        navbar?.classList.add("smallNav");
      } else {
        navbar?.classList.remove("smallNav");
      }
      setOldScrollY(window.scrollY);
    });
  }, [navbar, oldScrollY, setOldScrollY]);

  return (
    <div
      className={
        transition
          ? visible
            ? "navigation visible-speed-1"
            : "navigation hidden visible-speed-1"
          : "navigation"
      }
    >
      <div className="navigation-img">
        <img className="site-logo" src="/logo.png" alt="logo du site" />
      </div>
      <ul>
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to={"/projects"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Projects</li>
        </NavLink>

        <NavLink
          to={"/lab"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Lab</li>
        </NavLink>

        {/* <NavLink
          to={"/about"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink> */}

        <a href="/CV_Tuilier_Thomas.pdf" target="_blank">
          <li>CV</li>
        </a>
      </ul>
    </div>
  );
};

export default Navigation;
