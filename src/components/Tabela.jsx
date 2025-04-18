import { useState } from "react";

function Tabela({ vetor, selecionar }) {
  const [termo, setTermo] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Informe o nome"
        className="form-control pesquisar"
      />
      <table className="table">
        <thead>
          <tr>
            <th>Indice</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
            <th>Selecionar</th>
          </tr>
        </thead>

        <tbody>
          {vetor.filter(obj => obj.nome.includes(termo)).map((obj, indice) => (
            <tr key={indice}>
              <td>{indice + 1}</td>
              <td>{obj.nome}</td>
              <td>{obj.idade}</td>
              <td>{obj.cidade}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => selecionar(indice)}
                >
                  Selecionar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tabela;
