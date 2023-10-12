import { useState, useContext } from 'react'
import { DataEmpresaContext } from '../context/DataEmpresaContext'
import { DATOS_EMPRESA_STATE_INITIAL_ERRORS } from '../constants/FormEmpresa'

export function useRegister() {
  const { datosEmpresa, setDatosEmpresa } = useContext(DataEmpresaContext)
  const [errors, setErrors] = useState(DATOS_EMPRESA_STATE_INITIAL_ERRORS)

  const inputValidation = ({ value, name }) => {
    if (value === ' ') {
      setErrors({
        ...errors,
        [name]: true
      })
      return
    }

    setErrors({
      ...errors,
      [name]: false
    })
  }

  const selectValidation = () => {}

  return { datosEmpresa, errors, setDatosEmpresa, inputValidation }
}
