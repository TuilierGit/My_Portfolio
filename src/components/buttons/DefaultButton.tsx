import { IconContext } from "react-icons";

interface Props {
  url: string;
  text?: string;
}

const DefaultButton = ({ url, text }: Props) => {
  return (
    <a
      className="default-button button"
      role="button"
      href={url}
      target="_blank"
    >
      <IconContext.Provider value={{}}></IconContext.Provider>
      {text ? text : "Website"}
    </a>
  );
};

export default DefaultButton;
