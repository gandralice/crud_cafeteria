import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProdutoCreate() {
  const [produto, setProduto] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [tipo, setTipo] = useState("");
  const [preco_venda, setPrecoVenda] = useState("");
  const [data_validade, setDataValidade] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/produto", {
        produto: produto,
        fornecedor: fornecedor,
        tipo: tipo,
        preco_venda: preco_venda,
        data_validade: data_validade,
      })
      .then((response) => {
        console.log(response);
        navigate("/produto");
      })
      .catch((error) => {
        console.error("Houve um erro!", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Criar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="produto">Produto</label>
          <input
            type="text"
            className="form-control"
            id="produto"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="fornecedor">Fornecedor</label>
          <input
            type="text"
            className="form-control"
            id="fornecedor"
            value={fornecedor}
            onChange={(e) => setFornecedor(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="tipo">Tipo (ex: Bebida, Comida)</label>
          <input
            type="text"
            className="form-control"
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="data_validade">Data de Validade</label>
          <input
            type="date"
            className="form-control"
            id="data_validade"
            value={data_validade}
            onChange={(e) => setDataValidade(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="preco_venda">Preço de Venda</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="preco_venda"
            value={preco_venda}
            onChange={(e) => setPrecoVenda(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default ProdutoCreate;
