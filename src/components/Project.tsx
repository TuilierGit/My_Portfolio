import Button from "./Button";
import { ProjectButton } from "./Projects";
import Tag from "./Tag";

interface Props {
  title: string;
  tags: string[];
  body: string;
  mediaUrl: string;
  mediaType: string;
  buttons: ProjectButton[];
}

const Project = ({
  title,
  tags,
  body,
  mediaUrl,
  mediaType,
  buttons,
}: Props) => {
  return (
    <div className="project" id={title.replace(/ /g, "")}>
      <div className="project-container">
        <div className="left">
          <h2>{title}</h2>
          <div className="presentation">
            <div className="tag-list">
              {tags.map((tag) => (
                <Tag content={tag} />
              ))}
            </div>

            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: body }}
            ></div>

            <div className="button-list">
              {buttons.map((buttonItem) => (
                <Button
                  type={buttonItem.type}
                  text={buttonItem.text}
                  url={buttonItem.url}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="project-media">
            {mediaType.toLowerCase() === "img" ? (
              <img src={mediaUrl} alt={"Image de " + title} className="media" />
            ) : mediaType.toLowerCase() === "video" ? (
              <video
                id="banner-video"
                className="media"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src={mediaUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : (
              "Erreur sur la description du projet"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
