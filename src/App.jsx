import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

function App() {
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [cidade, setCidade] = useState("");
  const [vetor, setVetor] = useState([]);

  const cadastrar = () => {
    let obj = { nome: nome, idade: idade, cidade: cidade };
    setVetor([...vetor, obj]);
    setNome("");
    setIdade("");
    setCidade("");
  };

  return (
    <>
      <Formulario
        btnCadastrar={btnCadastrar}
        setNome={setNome}
        setIdade={setIdade}
        setCidade={setCidade}
        cadastrar={cadastrar}
        nome={nome}
        idade={idade}
        cidade={cidade}
      />
      <Tabela vetor={vetor} />
    </>
  );
}

export default App;
