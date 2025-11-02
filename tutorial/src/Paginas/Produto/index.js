import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Produto() {

    const [produtos, setProdutos] = useState([])
    const navigate = useNavigate();

    // A função(1o parâmetro do useEffect) executa apenas uma vez na montagem do 
    // componente, pois o vetor (segundo parâmetro) é vazio
    useEffect(
        function () {

            async function consultar(){
                // Consulta a API
                const resposta = await axios.get("http://localhost:8000/api/produto")
                console.log(resposta) // pressione F12 e no console veja o que veio da API no backend
                //Armazena resposta no useState
                setProdutos(resposta.data)
            }

            consultar();
        }
        , []
    )

    // retorna tabela HTML contendo os dados dos produtos obtidos na API
    return(
        <div className="container">
            <table>
                <caption>
                    <h1>Produtos</h1>
                    <button style={{margin:5}} onClick={ () => navigate('/produto/create') }>Novo</button>
                </caption>
                <thead><tr><th>Nome</th><th>Preço</th></tr></thead>
                <tbody>
                    {produtos==null ? null : produtos.map( 
                        (produto) => 
                        <tr key={produto.id}>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td><button onClick={ () => navigate(`/produto/update/${produto.id}`) }>Alterar</button></td>
                        <td><button onClick={ () => navigate(`/produto/delete/${produto.id}`) }>Excluir</button></td>
                        </tr> )
                    }
                </tbody>
            </table>
        </div>
    )
}