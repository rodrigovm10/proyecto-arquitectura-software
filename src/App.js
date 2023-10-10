import { FormEmpresa } from './components/Empresa/FormEmpresa'
import { Landing } from './landing/screens/Landing'
import { DatosEmpresaProvider } from './context/DataEmpresaContext'

function App() {
  return (
    <>
      <DatosEmpresaProvider>
        <FormEmpresa />
      </DatosEmpresaProvider>
    </>
  )
}

export default App
