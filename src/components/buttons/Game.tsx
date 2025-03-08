import { IconContext } from "react-icons";
import { IoGameController } from "react-icons/io5";

interface Props {
  url: string;
}

const Game = ({ url }: Props) => {
  return (
    <a className="game-button" role="button" href={url} target="_blank">
      <IconContext.Provider value={{ color: "black", size: "30px" }}>
        <IoGameController />
      </IconContext.Provider>
      Jouer
    </a>
  );
};

export default Game;
