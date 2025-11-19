import Project from "./Project";

export interface ProjectButton {
  type: string;
  text: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  tags: string[];
  url: string;
  body: string;
  mediaUrl: string;
  mediaType: string;
  buttons: ProjectButton[];
}

interface Props {
  projects: Project[];
  listStyle: string;
}

const ProjectList = ({ projects, listStyle }: Props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisiblePresentation(true);
  //   }, 1000);

  //   setTimeout(() => {
  //     setVisiblePicture(true);
  //   }, 1500);
  // }, []);

  return (
    <div id="projetList" className={"projects " + listStyle}>
      {projects
        .sort((a, b) => b.id - a.id)
        .map((project) => (
          <Project
            key={project.id}
            title={project.title}
            tags={project.tags}
            url={project.url}
            mediaUrl={project.mediaUrl}
            mediaType={project.mediaType}
            body={project.body}
            buttons={project.buttons}
          />
        ))}
    </div>
  );
};

export default ProjectList;
