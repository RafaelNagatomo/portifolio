import "../styles/components/projectscontainer.sass";

import cover0 from "../img/embreve.png";
import cover1 from "../img/print-app.png";
import cover2 from "../img/todolist.png";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        <div className="projects-cards">
          <a
            href="https://crud-financial-manager.netlify.app/"
            target="_blank"
            rel="CRUD Financial Manager"
          >
            <div className="project">
              <div className="cover"></div>
              <img src={cover1} alt="financial-cover" />
              <div className="project-baner">
                <div className="project-tech">
                  <div className="tech">Html</div>
                  <div className="tech">CSS</div>
                  <div className="tech">JavaSript</div>
                </div>
                <div className="project-name">Lançamento Financeiro</div>
                <div className="project-description">
                  Este CRUD é um fragmento de um dos meus projetos em
                  desenvolvimento, chamado Financial Manager. Que é um dashboard
                  financeiro em uma aplicação web para gerenciar gastos
                  pessoais.
                  <br />
                  Criado com Javascript puro, simula um app de lançamentos de
                  receitas e despesas, com modal na função 'Edit' e 'Delete'.
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="projects-cards">
          <a
            href="https://rn-lista-de-tarefas.netlify.app/"
            target="_blank"
            rel="To Do List"
          >
            <div className="project">
              <div className="cover"></div>
              <img src={cover2} alt="todolist" />
              <div className="project-baner">
                <div className="project-tech">
                  <div className="tech">React</div>
                  <div className="tech">Vite</div>
                </div>
                <div className="project-name">Lista de Tarefas</div>
                <div className="project-description">
                  To Do List criado em React a fim de aprimorar meus
                  conhecimentos na biblioteca. Apresenta funcionalidades úteis
                  como: Criar tarefas por categorias, remoção de tarefas,
                  alterar status sendo 'completa' ou 'incompleta', filtro por
                  ordenação alfabética e pesquisa de tarefas.
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover0} alt="em-breve" />
            {/* <div className="project-baner">
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
            </div> */}
          </div>
        </div>

        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover0} alt="em-breve" />
            {/* <div className="project-baner">
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
            </div> */}
          </div>
        </div>

        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover0} alt="em-breve" />
            {/* <div className="project-baner">
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
            </div> */}
          </div>
        </div>
        <div className="projects-cards">
          <div className="project">
            <div className="cover"></div>
            <img src={cover0} alt="em-breve" />
            {/* <div className="project-baner">
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
            </div> */}
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
