import { useState, useContext } from 'react'
import { DataVacanteContext } from '../context/DataVacanteContext'
import { DATOS_VACANTE_STATE_INITIAL_ERRORS } from '../constants/EstadosIniciales'

export function useRegisterVacante() {
  const { datosVacante, setDatosVacante } = useContext(DataVacanteContext)
  const [errors, setErrors] = useState(DATOS_VACANTE_STATE_INITIAL_ERRORS)
  const [stringToSave, setStringToSave] = useState('')

  const handleInputChange = e => {
    const { value, name } = e.target
    if (name === 'prestaciones' || name === 'habilidadesTecnicas' || name === 'habilidadesBlandas') {
      setStringToSave(value)
      return
    }

    setDatosVacante(prevDatosVacante => ({
      ...prevDatosVacante,
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

  const handleClickSave = ({ name, value }) => {
    if (datosVacante.prestaciones.includes(value)) return

    setDatosVacante(prevDatosVacante => ({
      ...prevDatosVacante,
      [name]: [...prevDatosVacante[name], value]
    }))
    setStringToSave('')
  }

  const handleClickDelete = ({ name, value }) => {
    const newArr = datosVacante[name].filter(valueArr => valueArr !== value)
    setDatosVacante(prevDatosVacante => ({
      ...prevDatosVacante,
      [name]: newArr
    }))
  }

  return { datosVacante, errors, setDatosVacante, handleInputChange, handleClickSave, stringToSave, handleClickDelete }
}
