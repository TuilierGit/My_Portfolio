interface Props {
  content: string;
}

const Tag = ({ content }: Props) => {
  return <div className="tag">{content}</div>;
};

export default Tag;
