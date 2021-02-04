import "./App.css";
import "./components/Dashboard.js";
import Dashboard from "./components/Dashboard.js";
import EditButton from "./components/EditButton.js";

function App() {
    return (
        <div>
            <Dashboard></Dashboard>
            <EditButton />
        </div>
    );
}

export default App;
