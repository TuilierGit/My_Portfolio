import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  transition?: boolean;
}

const Navigation = ({ transition = false }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }, []);

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
        <img className="site-logo" src="logo.png" alt="logo du site" />
      </div>
      <ul>
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/lab"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Lab</li>
        </NavLink>

        <NavLink
          to={"/about"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink>

        <a href="/CV_Tuilier_Thomas.pdf" target="_blank">
          <li>CV</li>
        </a>
      </ul>
    </div>
  );
};

export default Navigation;
