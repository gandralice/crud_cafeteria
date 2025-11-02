import axios from 'axios';
import {useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function ProdutoCreate()
{
    // Para apresentar ao usuáro o resultado da operação
    const [status,setStatus] = useState("");
    const navigate = useNavigate();
    // Para armazenar dados digitados pelo usuário
    const nome = useRef("");
    const preco = useRef("");
    // Formulário para coleta dos dados do novo objeto
    return(
        <div className='container'>
            <form onSubmit={ gravar }>
                <h1>Novo Produto</h1>
                nome: <input ref={nome} type="text" maxlength="100" required />
                preço: <input ref={preco} type="number" step="0.01" required />
                <button type='submit'>Enviar</button>
                <button onClick={ () => navigate('/produto') }>Cancelar</button>
            </form>
            <h3>{status}</h3>
        </div>
    )

    // Chamada a função da API
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            // monta json
            const produto = {nome: nome.current.value, preco: preco.current.value}
            // Chama função da API enviando o json com os dados do novo produto
            const resposta = await axios.post('http://localhost:8000/api/produto',produto);
            setStatus("Produto cadastrado");
            console.log(resposta); // pressione F12 e no console veja o que veio da API no backend
        } catch(erro) {
            setStatus("Falha ao cadastrar produto");
        }
    }
}
