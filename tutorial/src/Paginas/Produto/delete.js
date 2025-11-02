import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import './estilo.scss';

export default function ProdutoDelete() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const navigate = useNavigate(); 
    useEffect(
        function () {
            async function consultar(){
                // Consulta a API
                const resposta = await axios.get(`http://localhost:8000/api/produto/${id}`)
                console.log(resposta)
                setProduto(resposta.data);
            }
            consultar();
        }
        , []
    )

    async function gravar(evento){
        evento.preventDefault();
        await axios.delete(`http://localhost:8000/api/produto/${id}`)
        navigate('/produto');
        }

    return(
        <div className="container">
            <dl>
                <h1>Excluir Produto</h1>
                <dt>Nome:</dt>
                <dd>{produto==null ? '' : produto.nome}</dd>
                <dt>Preço:</dt>
                <dd>{produto==null ? '' : produto.preco}</dd>
                <button title="Confirmar" onClick={gravar}>Confirmar Exclusão</button>
                <button onClick={ () => navigate('/produto') }>Cancelar</button>
            </dl>
        </div>
    )
}