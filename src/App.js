import { Auth } from "./components/Auth";
import { Personal } from "./components/Personal";
import { Table } from "./components/Table";
import { Routes, Route } from "react-router-dom";
import './styles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Personal/>}></Route>
      <Route path="/table" element={<Table/>}></Route>
    </Routes>
  );
}

export default App;
