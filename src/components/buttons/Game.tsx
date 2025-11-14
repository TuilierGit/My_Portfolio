import { IconContext } from "react-icons";
import { IoGameController } from "react-icons/io5";

interface Props {
  url: string;
  text?: string;
}

const Game = ({ url, text }: Props) => {
  return (
    <a className="game-button button" role="button" href={url} target="_blank">
      <IconContext.Provider value={{ color: "black", size: "30px" }}>
        <IoGameController />
      </IconContext.Provider>
      {text ? text : "Jouer"}
    </a>
  );
};

export default Game;
