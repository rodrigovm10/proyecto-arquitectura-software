import { DataStore, SortDirection } from 'aws-amplify'
import { Empresa, Vacante } from '../models'
import { useState } from 'react'
import { basicAlert } from '../utilities/Alerts'
import { useNavigate } from 'react-router-dom'

export function useManageVacantes() {
  const [empresa, setEmpresa] = useState()
  const [vacantesVisibles, setVacantesVisibles] = useState([])
  const [vacantesNoVisibles, setVacantesNoVisibles] = useState([])
  const [vacante, setVacante] = useState({})
  const [isVacanteVisible, setIsVacanteVisible] = useState(true)
  const [isVacanteLoaded, setIsVacanteLoaded] = useState(false)

  const navigate = useNavigate()

  const handleChangeVacanteStatus = e => {
    const { value } = e.target

    setIsVacanteVisible(value === 'activas')
  }

  async function saveVacanteOnDataStore({ datosVacante, email, idOwner }) {
    getEmpresa({ emailEmpresa: email })
    console.log(datosVacante)
    console.log(email)
    console.log(idOwner)
    const { nombre, descripcion, numeroPlazas, area, tipoContrato, modalidad, diasLaborales, edadMin, edadMax, genero, experienciaLaboral, escolaridad, idiomaConNivel, prestaciones, habilidadesBlandas, habilidadesTecnicas, salarioMin, salarioMax } =
      datosVacante

    const vacante = new Vacante({
      nombre,
      descripcion,
      numeroPlazas,
      area,
      tipoContrato,
      modalidad,
      diasLaborales,
      edadMin,
      edadMax,
      genero,
      salarioMin,
      salarioMax,
      experienciaLaboral,
      escolaridad,
      idioma: idiomaConNivel,
      nivelIdioma: idiomaConNivel,
      idiomaConNivel,
      prestaciones,
      habilidadesBlandas,
      habilidadesTecnicas,
      visible: true,
      ubicacion: empresa.municipio + empresa.colonia + empresa.calle + empresa.numero,
      emailEmpresa: empresa.email,
      nombreEmpresa: empresa.nombreComercial,
      empresaID: empresa.id
    })
    try {
      await DataStore.save(vacante)
      console.log(vacante)
      basicAlert({ title: 'Vacante guardada con exito', icon: 'success', text: 'La vacante ha sido creada con exito, podrá visualizarla en su apartado de vacantes.' })
      navigate('/vacantes')
      console.log(vacante)
      console.log('guardo')
    } catch (e) {
      console.log(e)
    }
  }

  async function getEmpresa({ emailEmpresa }) {
    const empresa = await DataStore.query(Empresa, c => c.email.eq(emailEmpresa))
    setEmpresa(empresa[0])
  }

  async function listVacantes() {
    try {
      const newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0)]), {
        sort: s => s.createdAt(SortDirection.DESCENDING)
      })
      setVacantesVisibles(newVacantes) // Establece el estado con el nuevo array directamente
    } catch (err) {}
  }

  async function listVacante(id) {
    try {
      const newVacante = await DataStore.query(Vacante, c => c.id.eq(id))
      setVacante(newVacante[0])
      setIsVacanteLoaded(true)
    } catch (err) {
      setIsVacanteLoaded(true)
    }
  }

  async function deleteVacante(id) {
    try {
      await DataStore.delete(Vacante, id)
    } catch (error) {
      console.error('Error al eliminar el registro:', error)
    }
  }

  async function updateStatusVacante({ id, visible: newVisibility }) {
    try {
      const vacante = await DataStore.query(Vacante, id)

      const updatedVacante = Vacante.copyOf(vacante, updatedItem => {
        updatedItem.visible = newVisibility
      })

      await DataStore.save(updatedVacante)
    } catch (error) {
      console.error('Error al actualizar el registro:', error)
    }
  }

  async function updateVacante({ id, newVacante }) {
    try {
      const vacante = await DataStore.query(Vacante, id)

      const actualizaciones = {}

      for (const key in newVacante) {
        if (Array.isArray(newVacante[key]) && Array.isArray(vacante[key])) {
          if (!arraysAreEqual(newVacante[key], vacante[key])) {
            actualizaciones[key] = newVacante[key]
          }
        } else {
          if (newVacante[key] !== vacante[key]) {
            actualizaciones[key] = newVacante[key]
          }
        }
      }

      if (Object.keys(actualizaciones).length > 0) {
        await DataStore.save(
          Vacante.copyOf(vacante, updatedItem => {
            Object.assign(updatedItem, actualizaciones)
          })
        )

        console.log('Registro actualizado con éxito.')
      } else {
        console.log('No se realizaron cambios en el registro.')
      }
    } catch (error) {
      console.error('Error al actualizar el registro:', error)
    }
  }

  function arraysAreEqual(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return false
    }
    if (arr1.length !== arr2.length) {
      return false
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
    return true
  }

  async function listVacantesNoVisibles() {
    try {
      const newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(false), c.numeroPlazas.gt(0)]), {
        sort: s => s.createdAt(SortDirection.DESCENDING)
      })

      setVacantesNoVisibles(newVacantes)
    } catch (error) {}
  }

  return { saveVacanteOnDataStore, listVacantes, vacantesNoVisibles, vacantesVisibles, listVacantesNoVisibles, handleChangeVacanteStatus, isVacanteVisible, listVacante, vacante, deleteVacante, updateStatusVacante, isVacanteLoaded, updateVacante }
}
