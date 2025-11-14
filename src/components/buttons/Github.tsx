import { IconContext } from "react-icons";
import { VscGithubInverted } from "react-icons/vsc";

interface Props {
  url: string;
}

const Github = ({ url }: Props) => {
  return (
    <a className="github-button button" href={url} target="_blank">
      <IconContext.Provider value={{ color: "white", size: "35px" }}>
        <div>
          <VscGithubInverted />
        </div>
      </IconContext.Provider>
    </a>
  );
};

export default Github;
