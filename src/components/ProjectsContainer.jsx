import "../styles/components/projectscontainer.sass";

import cover from "../img/print-app.png";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover} alt="financial-cover" />
            <div className="project-baner">
              <div className="project-tech">
                <div className="tech">Html</div>
                <div className="tech">CSS</div>
                <div className="tech">JavaSript</div>
              </div>
              <div className="project-name">Lançamento Financeiro</div>
              <div className="project-description">
                Criado com Javascript puro simulando um app de lançamentos de
                receitas e despesas, com modal na função 'Edit' e 'Delete'.
              </div>
            </div>
          </div>
        </div>

        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover} alt="financial-cover" />
            <div className="project-baner">
              <div className="project-tech">
                <div className="tech">Html</div>
                <div className="tech">CSS</div>
                <div className="tech">JavaSript</div>
              </div>
              <div className="project-name">Lançamento Financeiro</div>
              <div className="project-description">
                Criado com Javascript puro simulando um app de lançamentos de
                receitas e despesas, com modal na função 'Edit' e 'Delete'.
              </div>
            </div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover} alt="financial-cover" />
            <div className="project-baner">
              <div className="project-tech">
                <div className="tech">Html</div>
                <div className="tech">CSS</div>
                <div className="tech">JavaSript</div>
              </div>
              <div className="project-name">Lançamento Financeiro</div>
              <div className="project-description">
                Criado com Javascript puro simulando um app de lançamentos de
                receitas e despesas, com modal na função 'Edit' e 'Delete'.
              </div>
            </div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover} alt="financial-cover" />
            <div className="project-baner">
              <div className="project-tech">
                <div className="tech">Html</div>
                <div className="tech">CSS</div>
                <div className="tech">JavaSript</div>
              </div>
              <div className="project-name">Lançamento Financeiro</div>
              <div className="project-description">
                Criado com Javascript puro simulando um app de lançamentos de
                receitas e despesas, com modal na função 'Edit' e 'Delete'.
              </div>
            </div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover} alt="financial-cover" />
            <div className="project-baner">
              <div className="project-tech">
                <div className="tech">Html</div>
                <div className="tech">CSS</div>
                <div className="tech">JavaSript</div>
              </div>
              <div className="project-name">Lançamento Financeiro</div>
              <div className="project-description">
                Criado com Javascript puro simulando um app de lançamentos de
                receitas e despesas, com modal na função 'Edit' e 'Delete'.
              </div>
            </div>
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover} alt="financial-cover" />
            <div className="project-baner">
              <div className="project-tech">
                <div className="tech">Html</div>
                <div className="tech">CSS</div>
                <div className="tech">JavaSript</div>
              </div>
              <div className="project-name">Lançamento Financeiro</div>
              <div className="project-description">
                Criado com Javascript puro simulando um app de lançamentos de
                receitas e despesas, com modal na função 'Edit' e 'Delete'.
              </div>
            </div>
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
