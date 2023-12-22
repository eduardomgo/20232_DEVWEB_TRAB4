import { createBrowserRouter } from 'react-router-dom';
import CarrinhoPage from '../pages/CarrinhoPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Layout from './Layout';
import ErrorPage from '../pages/ErrorPage';
import AdminProdutoPage from '../pages/AdminProdutoPage';
import ProdutoPage from '../pages/ProdutoPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },
            { path: ":slug", element: <HomePage /> },
            { path: "admin/produtos/:id", element: <AdminProdutoPage /> },
            { path: "produtos/:id", element: <ProdutoPage /> }, 
            { path: "login", element: <LoginPage /> },            
            { path: "carrinho", element: <CarrinhoPage /> },            
        ]
    }
]);
export default router;