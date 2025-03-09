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
  body: string;
  mediaUrl: string;
  mediaType: string;
  buttons: ProjectButton[];
}

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <div className="projects">
      {projects
        .sort((a, b) => b.id - a.id)
        .map((project) => (
          <Project
            title={project.title}
            tags={project.tags}
            mediaUrl={project.mediaUrl}
            mediaType={project.mediaType}
            body={project.body}
            buttons={project.buttons}
          />
        ))}
    </div>
  );
};

export default Projects;
