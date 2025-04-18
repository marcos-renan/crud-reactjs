import { useState } from "react";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";
import "./App.css";

function App() {
  const [indiceVetor, setIndiceVetor] = useState("");
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [vetor, setVetor] = useState([]);

  //funcao para cadastrar usuarios
  const cadastrar = () => {
    let obj = { nome: nome, idade: idade, cidade: cidade };
    setVetor([...vetor, obj]);
    setNome("");
    setIdade("");
    setCidade("");
  };

  //funcao para selecionar usuario
  const selecionar = (indice) => {
    setIndiceVetor(indice);
    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    //esconde o cadastrar e mostra o outros botoes
    setBtnCadastrar(false);
  };

  //funcao para alterar os dados do usuario
  const alterar = () => {
    let obj = { nome: nome, idade: idade, cidade: cidade };
    //copia do vetor original
    let copiaVetor = [...vetor];
    //copia vetor recebe o indice em que esta o usuario e altera colocando os dados novos vindos do obj
    copiaVetor[indiceVetor] = obj;
    //seta novo valor que recebe do copiaVetor
    setVetor(copiaVetor);
    //limpa os campos
    setNome("");
    setIdade("");
    setCidade("");
    //retorna botao cadastrar
    setBtnCadastrar(true);
  };

  //funcao para remover usuario
  const remover = () => {
    //copia do vetor original
    let copiaVetor = [...vetor];
    //recebe o indice e apaga uma unica linha
    copiaVetor.splice(indiceVetor, 1);
    //seta o vetor
    setVetor(copiaVetor);
    //limpa os campos
    setNome("");
    setIdade("");
    setCidade("");
    //retorna botao cadastrar
    setBtnCadastrar(true);
  }

  //funcao para cancelar edicao
  const cancelar = () => {
    //limpa os campos
    setNome("");
    setIdade("");
    setCidade("");
    //retorna botao cadastrar
    setBtnCadastrar(true);
  }

  return (
    <>
      <Formulario
        btnCadastrar={btnCadastrar}
        setNome={setNome}
        setIdade={setIdade}
        setCidade={setCidade}
        cadastrar={cadastrar}
        alterar={alterar}
        remover={remover}
        cancelar={cancelar}
        nome={nome}
        idade={idade}
        cidade={cidade}
      />
      <Tabela vetor={vetor} selecionar={selecionar} />
    </>
  );
}

export default App;
