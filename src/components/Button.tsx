import Game from "./buttons/Game";
import Github from "./buttons/Github";
import Strong from "./buttons/Strong";

interface Props {
  type: string;
  text: string;
  url: string;
}

const Button = ({ type, text, url }: Props) => {
  if (type.toLowerCase() === "github") {
    return <Github url={url} />;
  } else if (type.toLowerCase() === "game") {
    return <Game url={url} text={text} />;
  } else if (type.toLowerCase() === "strong") {
    return <Strong url={url} text={text} />;
  }

  return (
    <a href={url}>
      <button className={type}>{text}</button>
    </a>
  );
};

export default Button;
