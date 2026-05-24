import { createBrowserRouter } from 'react-router-dom';

import {
  Cart,
  Checkout,
  CompletePayment,
  EditProduct,
  Home,
  Login,
  Menu,
  NewProduct,
  Orders,
  Products,
  Register,
} from '../containers';
import { AdminLayout } from '../layouts/AdminLayout';
import { UserLayout } from '../layouts/UserLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cardapio', element: <Menu /> },
      { path: '/carrinho', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/complete', element: <CompletePayment /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '/admin/pedidos', element: <Orders /> },
      { path: '/admin/novo-produto', element: <NewProduct /> },
      { path: '/admin/editar-produto', element: <EditProduct /> },
      { path: '/admin/produtos', element: <Products /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/cadastro', element: <Register /> },
]);
