import "./App.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import Repositories from "./components/Repositories";

function App() {
  return (
    <>
      <NavBar />
      <Repositories />
      <MainContent />
    </>
  );
}

export default App;
