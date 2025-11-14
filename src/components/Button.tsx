import DefaultButton from "./buttons/DefaultButton";
import Game from "./buttons/Game";
import Github from "./buttons/Github";
import Strong from "./buttons/Strong";
import Tool from "./buttons/Tool";

interface Props {
  type: string;
  text: string;
  url: string;
}

const Button = ({ type, text, url }: Props) => {
  switch (type.toLowerCase()) {
    case "github":
      return <Github url={url} />;
    case "game":
      return <Game url={url} text={text} />;
    case "tool":
      return <Tool url={url} text={text} />;
    case "strong":
      return <Strong url={url} text={text} />;
    default:
      return <DefaultButton url={url} text={text} />;
  }
};

export default Button;
