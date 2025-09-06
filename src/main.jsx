import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/registrar",
    element: <Register />
  },
  {
    path: "/logar",
    element: <Login />
  },
  {
    path: "/recuperarsenha",
    element: <ForgotPassword />
  },
  {
    path: '/redefinirsenha',
    element: <ResetPassword />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
