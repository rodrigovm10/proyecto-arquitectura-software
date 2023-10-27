import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginEmpresa from './services/LoginEmpresa'
import { FormEmpresa } from './components/Empresa/FormEmpresa'
import { RegistroEmpresa } from './pages/RegistroEmpresa'
import { FormVacante } from './pages/FormVacante'
import LoginBdt from './pages/BDT/LoginBdt'
import InicioBdT from './pages/BDT/InicioBdT'
import LandingBdt from '../src/pages/LandingBdt'
import RegistroBdT from './pages/BDT/RegistroBdT'
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
import PerfilBdT from './pages/BDT/PerfilBdT'
import { LandingEmpresa } from './pages/LandingEmpresa'
import { SessionProvider } from './context/SessionContext'
import { Vacantes } from './pages/Vacantes/Vacantes'
import { VacanteDatos } from './pages/Vacantes/VacanteDatos'
import { DataVacanteProvider } from './context/DataVacanteContext'
import { FormVacanteEdit } from './pages/FormVacanteEdit'
import Loading2 from './components/Loading2'

Amplify.configure(awsExports)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  //Empresa
  {
    path: '/login-empresa',
    element: <LoginEmpresa />
  },
  {
    path: '/registro-empresa',
    element: <RegistroEmpresa />
  },
  {
    path: '/perfil-bdt',
    element: <PerfilBdT />
  },
  {
    path: '/form-empresa',
    element: <FormEmpresa />
  },
  {
    path: '/inicio-empresa',
    element: <LandingEmpresa />
  },
  //BDT
  {
    path: '/login-bdt',
    element: <LoginBdt />
  },
  {
    path: '/registro-bdt',
    element: <RegistroBdT />
  },
  {
    path: '/inicio-bdt',
    element: <LandingBdt />
  },
  //Vacante
  {
    path: '/registro-vacante',
    element: (
      <DataVacanteProvider>
        <FormVacante />
      </DataVacanteProvider>
    )
  },

  {
    path: '/vacantes',
    element: <Vacantes />
  },
  {
    path: '/vacantes/vacante/:id',
    element: <VacanteDatos />
  },
  {
    path: '/vacantes/vacante/editar-vacante/:id',
    element: (
      <DataVacanteProvider>
        <FormVacanteEdit />
      </DataVacanteProvider>
    )
  },
  {
    path: '/loading',
    element: <Loading2 />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  </ChakraProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
