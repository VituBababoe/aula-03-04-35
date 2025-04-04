import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./screens/login-aluno";
// // import { Home, UserManagement } from "./home";
// import { editarAluno } from "./screens/editar-aluno";
import Register from "./screens/criar-aluno";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
