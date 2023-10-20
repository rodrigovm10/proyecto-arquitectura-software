import { useState, useContext } from 'react'
import { DataEmpresaContext } from '../context/DataEmpresaContext'
import { DATOS_EMPRESA_STATE_INITIAL_ERRORS } from '../constants/EstadosIniciales'

export function useRegister() {
  const { datosEmpresa, setDatosEmpresa } = useContext(DataEmpresaContext)
  const [errors, setErrors] = useState(DATOS_EMPRESA_STATE_INITIAL_ERRORS)

  const handleInputChange = e => {
    const { value, name } = e.target
    let newValue
    name === 'rfc' ? (newValue = transformToUppercase({ value })) : (newValue = '')

    setDatosEmpresa(prevDatosEmpresa => ({
      ...prevDatosEmpresa,
      [name]: value,
      rfc: newValue
    }))
    console.log(datosEmpresa)
    inputValidation({ value, name })
  }

  const inputValidation = ({ value, name }) => {
    if (value === ' ') {
      setErrors(prevErrors => ({ ...prevErrors, [name]: true }))
      return
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: false }))
  }

  const transformToUppercase = ({ value }) => {
    const newValue = value.toUpperCase()
    return newValue
  }

  const selectValidation = () => {}

  return { datosEmpresa, errors, setDatosEmpresa, handleInputChange }
}
