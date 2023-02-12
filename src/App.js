import "./App.css";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <h1>React With GraphQL (Apollo Client)</h1>
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
