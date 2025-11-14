import Button from "./Button";
import { ProjectButton } from "./Projects";
import Tag from "./Tag";

interface Props {
  title: string;
  tags: string[];
  url: string;
  body: string;
  mediaUrl: string;
  mediaType: string;
  buttons: ProjectButton[];
}

const Project = ({
  title,
  tags,
  url,
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
                <Tag key={tag} content={tag} />
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
          {/* <div className="project-media"> */}
          {mediaType.toLowerCase() === "img" ? (
            <a
              href={url}
              className="project-media"
              style={{ background: `url(${mediaUrl}) center/cover` }}
              target="blank"
            >
              {/* <img
              
                  src={mediaUrl}
                  alt={"Image de " + title}
                  className="media"
                /> */}
            </a>
          ) : mediaType.toLowerCase() === "video" ? (
            <a className="project-media" href={url} target="blank">
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
            </a>
          ) : (
            <div className="project-media">
              "Erreur sur la description du projet"
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
