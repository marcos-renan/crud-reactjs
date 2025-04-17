import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);

  return (
    <>
      <Formulario btnCadastrar={btnCadastrar} />
      <Tabela />
    </>
  );
}

export default App;
