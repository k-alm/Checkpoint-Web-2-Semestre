import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Error404 from './routes/Error404.jsx';
import Produtos from './routes/Produtos.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App/>,
    errorElement: <Error404/>,
    children:[
      {path: '/', element: <Home/>},
      {path: '/produtos', element: <Produtos/>},
      {path: '/editar/produtos/:id', element: <EditarProdutos/>},
      {path: '/excluir/produtos/:id', element: <ExcluirProduto/>},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router}/>

  </React.StrictMode>,
)