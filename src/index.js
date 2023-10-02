import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import LoginBdE from './pages/BDT/login-bdt'

import RegistroInfoPersonal from './components/BDT/RegistroBdt/RegistroSituacionActual'
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( 
  <ChakraProvider>
    <React.StrictMode>
      <RegistroInfoPersonal/>
    </React.StrictMode>
  </ChakraProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
