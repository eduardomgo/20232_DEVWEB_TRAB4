import { createBrowserRouter } from 'react-router-dom';
import CarrinhoPage from '../pages/CarrinhoPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Layout from './Layout';
import CadastroDeProdutosPage from '../pages/CadastroDeProdutosPage';
import ListaDeProdutosPage from '../pages/ListaDeProdutosPage';
import ErrorPage from '../pages/ErrorPage';
import CardsDeProdutosPage from '../pages/CardsDeProdutosPage';
import ProdutoPage from '../pages/ProdutoPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { 
                path: "", 
                element: <HomePage />,
                children: [
                    {
                        path: ":slug?",
                        element: <CardsDeProdutosPage />
                    }
                ] 
            },
            { 
                path: "admin/produtos", 
                element: <ListaDeProdutosPage />,
                children: [
                    {
                        path: ":id"
                    }
                ] 
            },
            { path: "produtos/:id", element: <ProdutoPage /> }, 
            { path: "login", element: <LoginPage /> },            
            { path: "cadastrar-produto", element: <CadastroDeProdutosPage /> },            
            { path: "carrinho", element: <CarrinhoPage /> },            
        ]
    }
]);
export default router;