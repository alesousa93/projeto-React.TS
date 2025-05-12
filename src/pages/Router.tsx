import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import Form3 from "./Form3";
import ListaCadastros from './ListaCadastros.tsx';
import EditClient from './EditClient.tsx';
import EditClientID from './EditClientID.tsx';

function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Form3 />} />
                <Route path="/lista-cadastros" element={<ListaCadastros />} />
                <Route path="/editar-cadastros" element={<EditClient />} />
                <Route path="/editar-cadastros/id-:id" element={<EditClientID />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;