import Blueprints from "./pages/Blueprints";
import CreateContract from "./pages/CreateContract";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <h1>Contract Management Platform</h1>

      <Blueprints />
      <CreateContract />
      <Dashboard />
    </div>
  );
}

export default App;
