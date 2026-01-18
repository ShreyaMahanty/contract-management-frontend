import Blueprints from "./pages/Blueprints";
import CreateContract from "./pages/CreateContract";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <h1>Contract Management Platform</h1>

      <div className="section">
        <Blueprints />
      </div>

      <div className="section">
        <CreateContract />
      </div>

      <div className="section">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
