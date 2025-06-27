import { Pet } from "./components/Pet";
import "./App.css";

export function App() {
  return (
    <div className="pet-container">
      <Pet hasBow={true} mood="happy" />
    </div>
  );
};
