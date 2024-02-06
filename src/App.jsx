import Sidebar from "./components/Sidebar";
import MainContent from "./components/mainContent";
import ProjectsContainer from "./components/ProjectsContainer";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portifolio">
      <Sidebar />
      <MainContent />
      <ProjectsContainer />
    </div>
  );
}

export default App;
