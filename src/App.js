import "./App.css";
import DogInfo from "./components/DogInfo";
import Email from "./components/EmailForm";

function App() {
  return (
    <div className="app-container">
      <div className="content-container">
        <DogInfo />
        <Email />
      </div>
    </div>
  );
}

export default App;
