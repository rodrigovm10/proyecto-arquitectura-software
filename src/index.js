import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginEmpresa from './services/LoginEmpresa'
import { FormEmpresa } from './pages/FormEmpresa'
import { Vacante } from './pages/Vacante'
import LoginBdt from './pages/BDT/LoginBdt'
import InicioBdT from './pages/BDT/InicioBdT'
import RegistroBdt from './components/BDT/RegistroBdt/RegistroBdt'
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login-empresa',
    element: <LoginEmpresa />
  },
  {
    path: '/login-bdt',
    element: <LoginBdt />
  },
  {
    path: '/form-empresa',
    element: <FormEmpresa />
  },
  {
    path: '/vacante',
    element: <Vacante />
  },
  {
    path: '/registro-bdt',
    element: <RegistroBdt />
  },
  {
    path: "/inicio-bdt",
    element: <InicioBdT />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
