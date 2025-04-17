import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

function App() {
  const [indiceVetor, setIndiceVetor] = useState("");
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [vetor, setVetor] = useState([]);

  const cadastrar = () => {
    let obj = { nome: nome, idade: idade, cidade: cidade };
    setVetor([...vetor, obj]);
    setNome("");
    setIdade("");
    setCidade("");
  };

  const selecionar = (indice) => {
    setIndiceVetor(indice);
    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false);
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
      <Tabela vetor={vetor} selecionar={selecionar} />
    </>
  );
}

export default App;
