import { useState, useContext } from 'react'
import { DataVacanteContext } from '../context/DataVacanteContext'
import { DATOS_VACANTE_STATE_INITIAL_ERRORS } from '../constants/EstadosIniciales'

export function useRegisterVacante() {
  const { datosVacante, setDatosVacante } = useContext(DataVacanteContext)
  const [errors, setErrors] = useState(DATOS_VACANTE_STATE_INITIAL_ERRORS)

  const handleInputChange = e => {
    const { value, name } = e.target
    let newValue
    name === 'rfc' ? (newValue = transformToUppercase({ value })) : (newValue = '')

    setDatosVacante(prevDatosEmpresa => ({
      ...prevDatosEmpresa,
      [name]: value,
      rfc: newValue
    }))
    console.log(datosVacante)
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

  return { datosVacante, errors, setDatosVacante, handleInputChange }
}
