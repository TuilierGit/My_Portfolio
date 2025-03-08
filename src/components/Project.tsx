import Game from "./buttons/Game";
import Github from "./buttons/Github";
import Tag from "./Tag";

const Project = () => {
  return (
    <div className="project">
      <h2>Nom du projet</h2>

      <div className="project-container">
        <div className="left">
          <div className="tag-list">
            <Tag content="HTML" />
            <Tag content="CSS" />
            <Tag content="JavaScript" />
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            culpa id ab optio voluptate in laborum ad minima. Doloremque
            quibusdam enim consequatur recusandae explicabo ullam odio esse
            accusantium magni? Esse officiis laudantium quo culpa praesentium
            dolorum aliquid repellat, soluta atque quod incidunt est saepe
            voluptatibus odio reiciendis dolore corporis possimus!
          </div>

          <div className="button-list">
            <Github url="https://github.com/TuilierGit/bubble-game/tree/main" />
            <Game url="https://tuiliergit.github.io/bubble-game/" />
          </div>
        </div>

        <div className="right">
          <div className="project-img"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
