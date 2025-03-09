interface Props {
  url: string;
  text?: string;
}

const Strong = ({ url, text }: Props) => {
  return (
    <a href={url}>
      <button className="strong-button">{text}</button>
    </a>
  );
};

export default Strong;
