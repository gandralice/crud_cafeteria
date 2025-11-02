import { useEffect, useRef } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import './estilo.scss';

export default function ProdutoUpdate() {
    const { id } = useParams();
    const nomeRef = useRef(null);
    const precoRef = useRef(null);
    const navigate = useNavigate(); 
    useEffect(
        function () {
            async function consultar(){
                // Consulta a API
                const resposta = await axios.get(`http://localhost:8000/api/produto/${id}`)
                console.log(resposta)
                nomeRef.current.value = resposta.data.nome;
                precoRef.current.value = resposta.data.preco;
                console.log(nomeRef.current);
                console.log(precoRef.current);
            }
            consultar();
        }
        , []
    )

    async function gravar(evento){
        evento.preventDefault();
        const jsonProduto = {
            nome: nomeRef.current.value,
            preco: parseFloat(precoRef.current.value)
        };
        await axios.put(`http://localhost:8000/api/produto/${id}`, jsonProduto)
        navigate('/produto');
        }

    return(
        <div className="container">
            <form onSubmit={gravar}>
                <h1>Alterar Produto</h1>
                <label>Nome:</label><input type="text" ref={nomeRef} required maxLength={50} />
                <label>Preço:</label><input type="number" ref={precoRef} required step="0.01" />
                <input type="submit" value="Alterar" />
                <button onClick={ () => navigate('/produto') }>Cancelar</button>
            </form>
        </div>
    )
}