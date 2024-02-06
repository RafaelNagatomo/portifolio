import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <div className="description"></div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <div className="description"></div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <div className="description"></div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <div className="description"></div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <div className="description"></div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <div className="description"></div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          Este site foi projetado em Figma, codado em Visual Studio Code, e
          desenvilvido com React + Sass.
        </p>
      </div>
    </section>
  );
};

export default ProjectsContainer;
