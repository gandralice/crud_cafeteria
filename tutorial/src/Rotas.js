import Layout from "./Paginas/Layout";
import ProdutoIndex from "./Paginas/Produto";
import ProdutoCreate from "./Paginas/Produto/create";
import ProdutoUpdate from "./Paginas/Produto/update";
import ProdutoDelete from "./Paginas/Produto/delete";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="produto" element={<ProdutoIndex />} />
          <Route path="produto/create" element={<ProdutoCreate />} />
          <Route path="produto/update/:id" element={<ProdutoUpdate />} />
          <Route path="produto/delete/:id" element={<ProdutoDelete />} />
          <Route path="*" element={<h1>Inexistente</h1>} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
