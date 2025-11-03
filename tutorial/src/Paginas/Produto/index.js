import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProdutoIndex() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // 1. Buscar os produtos da API
    axios
      .get("http://127.0.0.1:8000/api/produto")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error("Houve um erro!", error);
      });
  }, []);

  const deleteProduto = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/produto/${id}`)
      .then(() => {
        setProdutos(produtos.filter((produto) => produto.id !== id));
      })
      .catch((error) => {
        console.error("Houve um erro!", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Lista de Produtos da Cafeteria</h2>
      <Link to="/produto/create" className="btn btn-primary mb-2">
        Criar Produto
      </Link>

      <table className="table table-bordered table-striped">
        {/* 2. Cabeçalho da tabela atualizado */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Fornecedor</th>
            <th>Tipo</th>
            <th>Preço (R$)</th>
            <th>Data de Validade</th>
            <th>Ações</th>
          </tr>
        </thead>
        {/* 3. Corpo da tabela atualizado */}
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.produto}</td>
              <td>{produto.fornecedor}</td>
              <td>{produto.tipo}</td>
              <td>{produto.preco_venda}</td>
              <td>{produto.data_validade}</td>
              <td>
                <Link
                  to={`/produto/update/${produto.id}`}
                  className="btn btn-sm btn-info me-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteProduto(produto.id)}
                  className="btn btn-sm btn-danger"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoIndex;
