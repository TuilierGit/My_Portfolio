import { IconContext } from "react-icons";
import { FiTool } from "react-icons/fi";

interface Props {
  url: string;
  text?: string;
}

const Game = ({ url, text }: Props) => {
  return (
    <a className="tool-button button" role="button" href={url} target="_blank">
      <IconContext.Provider value={{}}>
        <FiTool />
      </IconContext.Provider>
      {text ? text : "Utiliser"}
    </a>
  );
};

export default Game;
