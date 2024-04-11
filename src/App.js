import { Auth } from "./components/Auth";
import { Personal } from "./components/Personal";
import { Table } from "./components/Table";
import { Routes, Route } from "react-router-dom";
import './styles.css';
import { StatementTable } from "./components/StatementTable";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth/>}></Route>
      <Route path="/" element={<Personal/>}></Route>
      <Route path="/table" element={<Table/>}></Route>
      <Route path="/statements" element={<StatementTable/>}></Route>
    </Routes>
  );
}

export default App;
