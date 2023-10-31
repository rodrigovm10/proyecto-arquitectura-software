import { useState, useContext } from 'react'
import { DataEmpresaContext } from '../context/DataEmpresaContext'
import { DATOS_EMPRESA_STATE_INITIAL_ERRORS } from '../constants/EstadosIniciales'

export function useRegister() {
  const { datosEmpresa, setDatosEmpresa } = useContext(DataEmpresaContext)
  const [errors, setErrors] = useState(DATOS_EMPRESA_STATE_INITIAL_ERRORS)

  const handleInputChange = e => {
    const { value, name } = e.target
    if (name === 'rfc') {
      let newValue
      newValue = transformToUppercase({ value })
      setDatosEmpresa(prevDatosEmpresa => ({
        ...prevDatosEmpresa,
        rfc: newValue
      }))
    }
    setDatosEmpresa(prevDatosEmpresa => ({
      ...prevDatosEmpresa,
      [name]: value
    }))
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

  const somePropertyIsNull = object => {
    for (const property in object) {
      if (property === 'emailEmpresa' || property === 'idioma' || property === 'nombreEmpresa' || property === 'ubicacion') return false
      if (object.hasOwnProperty(property)) {
        const valor = object[property]
        if (valor === null || valor === undefined || valor === '' || property.length === 0) {
          return true
        }
      }
    }
    return false
  }
  return { datosEmpresa, errors, setDatosEmpresa, somePropertyIsNull, handleInputChange }
}
