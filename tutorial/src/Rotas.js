// Importa componente "Home" para uso aqui. Idem para "Sobre".
import Home from './Paginas/Home';
import Sobre from './Paginas/Sobre';
import Layout from './Paginas/Layout';
import Produto from './Paginas/Produto';
import ProdutoCreate from './Paginas/Produto/create';
import ProdutoUpdate from './Paginas/Produto/update';
import ProdutoDelete from './Paginas/Produto/delete';

// Importar componentes do pacote react-router-dom necessários para definição das rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route index element={ <Home /> } />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="produto" element={<Produto />} />
                    <Route path="produto/create" element={<ProdutoCreate />} />
                    <Route path="produto/update/:id" element={<ProdutoUpdate />} />
                    <Route path="produto/delete/:id" element={<ProdutoDelete />} />
                    <Route path="*" element={<h1>Inexistente</h1>} /> {/* Comentário: rota inexistente  */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}