import { DataStore, SortDirection } from 'aws-amplify'
import { Empresa, Vacante } from '../models'
import { useState } from 'react'
import { basicAlert } from '../utilities/Alerts'
import { useNavigate } from 'react-router-dom'
import { DATOS_VACANTE_STATE_INITIAL } from '../constants/EstadosIniciales'
import { useSession } from './useSession'

export function useManageVacantes() {
  const { dataSession } = useSession('Empresa')
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

  async function saveVacanteOnDataStore(datosVacante, setDatosVacante) {
    const empresa = await getEmpresa({ emailEmpresa: dataSession.email })
    const {
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
      experienciaLaboral,
      escolaridad,
      idiomaConNivel,
      prestaciones,
      habilidadesBlandas,
      habilidadesTecnicas,
      salarioMin,
      salarioMax,
      isCheck,
      municipio,
      colonia,
      calle,
      numero,
      periodoPago,
      jornadaLaboral
    } = datosVacante
    let ubicacion = ''
    let newMunicipio = ''
    !isCheck ? (ubicacion = `${empresa.municipio} ${empresa.colonia} ${empresa.calle} ${empresa.numero}`) : (ubicacion = `${municipio} ${colonia} ${calle} ${numero}`)
    !isCheck ? (newMunicipio = empresa.municipio) : (newMunicipio = municipio)
    const vacante = new Vacante({
      nombre,
      descripcion,
      numeroPlazas: parseInt(numeroPlazas),
      area,
      tipoContrato,
      modalidad,
      diasLaborales,
      edadMin: parseInt(edadMin),
      edadMax: parseInt(edadMax),
      genero,
      salarioMin: parseFloat(salarioMin),
      salarioMax: parseFloat(salarioMax),
      periodoPago,
      jornadaLaboral,
      experienciaLaboral,
      escolaridad,
      idioma: idiomaConNivel,
      nivelIdioma: idiomaConNivel,
      idiomaConNivel,
      prestaciones,
      habilidadesBlandas,
      habilidadesTecnicas,
      visible: true,
      ubicacion,
      municipio: newMunicipio,
      emailEmpresa: dataSession.email,
      nombreEmpresa: empresa.nombreComercial,
      empresaID: empresa.id
    })
    try {
      await DataStore.save(vacante)
      basicAlert({ title: 'Vacante guardada con exito', icon: 'success', text: 'La vacante ha sido creada con exito, podrá visualizarla en su apartado de vacantes.' })
      setDatosVacante(DATOS_VACANTE_STATE_INITIAL)
      navigate('/vacantes')
    } catch (e) {
      console.log(e)
    }
  }

  async function getEmpresa({ emailEmpresa }) {
    const newEmpresa = await DataStore.query(Empresa, c => c.email.eq(emailEmpresa))
    return newEmpresa[0]
  }

  async function listVacantes({ emailEmpresa = '' }) {
    try {
      let newVacantes
      if (emailEmpresa) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.emailEmpresa.eq(emailEmpresa)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
      }
      newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0)]), {
        sort: s => s.createdAt(SortDirection.DESCENDING)
      })

      setVacantesVisibles(newVacantes)
    } catch (err) {
      throw new Error('Error al obtener vacantes', err)
    }
  }

  async function listVacantesFiltros({ filtros }) {
    const { municipio, area, salarioMin, salarioMax } = filtros
    let newVacantes
    try {
      //NO FILTROS
      if (municipio === 'Todos' && area === 'Todas' && salarioMin === 0 && salarioMax === 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR MUNICIPIO
      if (municipio !== 'Todos' && area === 'Todas' && salarioMin === 0 && salarioMax === 100000) {
        let newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.municipio.eq(municipio)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR ÁREAS
      if (area !== 'Todas' && municipio === 'Todos' && salarioMin === 0 && salarioMax === 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.area.eq(area)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR SALARIO MÍNIMO
      if (salarioMin !== 0 && area === 'Todas' && municipio === 'Todos' && salarioMax === 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.salarioMin.ge(salarioMin)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR SALARIO MÁXIMO
      if (salarioMax !== 100000 && area === 'Todas' && municipio === 'Todos' && salarioMin === 0) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.salarioMax.le(salarioMax)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR SALARIO MÍNIMO Y SALARIO MÁXIMO
      if (salarioMax !== 100000 && salarioMin !== 0 && area === 'Todas' && municipio === 'Todos') {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.salarioMin.ge(salarioMin), c.salarioMax.le(salarioMax)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR MUNICIPIO Y ÁREAS
      if (municipio !== 'Todos' && area !== 'Todas' && salarioMin === 0 && salarioMax === 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.municipio.eq(municipio), c.area.eq(area)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR MUNICIPIO Y SALARIO MÍNIMO
      if (municipio !== 'Todos' && area === 'Todas' && salarioMin !== 0 && salarioMax === 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.municipio.eq(municipio), c.salarioMin.ge(salarioMin)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR MUNICIPIO Y SALARIO MÁXMIO
      if (municipio !== 'Todos' && area === 'Todas' && salarioMin === 0 && salarioMax !== 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.municipio.eq(municipio), c.salarioMax.ge(salarioMax)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR MUNICIPIO Y SALARIO MÍNIMO Y SALARIO MÁXIMO
      if (municipio !== 'Todos' && area === 'Todas' && salarioMin !== 0 && salarioMax !== 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.municipio.eq(municipio), c.salarioMin.ge(salarioMin), c.salarioMax.le(salarioMax)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      //FILTRO POR TODO
      if (municipio !== 'Todos' && area !== 'Todas' && salarioMin !== 0 && salarioMax !== 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.municipio.eq(municipio), c.salarioMin.ge(salarioMin), c.salarioMax.le(salarioMax), c.area.eq(area)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      // FILTRO POR ÁREA Y SALARIO MÍNIMO
      if (municipio === 'Todos' && area !== 'Todas' && salarioMin !== 0 && salarioMax === 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.area.eq(area), c.salarioMin.ge(salarioMin)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      // FILTRO POR ÁREA Y SALARIO MÁXIMO
      if (municipio === 'Todos' && area !== 'Todas' && salarioMin === 0 && salarioMax !== 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.area.eq(area), c.salarioMax.le(salarioMax)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
      // FILTRO POR ÁREA Y SALARIO MÁXIMO Y SALARIO MÍNOIMO
      if (municipio === 'Todos' && area !== 'Todas' && salarioMin !== 0 && salarioMax !== 100000) {
        newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(true), c.numeroPlazas.gt(0), c.area.eq(area), c.salarioMin.ge(salarioMin), c.salarioMax.le(salarioMax)]), {
          sort: s => s.createdAt(SortDirection.DESCENDING)
        })
        setVacantesVisibles(newVacantes)
        return
      }
    } catch (e) {
      throw new Error('Error al obtener vacantes', e)
    }
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
      throw new Error('Error al eliminar la vacante', error)
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
      throw new Error('Error al actualizar la vacante', error)
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
      }
    } catch (error) {
      throw new Error('Error al actualizar la vacante', error)
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

  async function listVacantesNoVisibles({ emailEmpresa }) {
    try {
      const newVacantes = await DataStore.query(Vacante, c => c.and(c => [c.visible.eq(false), c.numeroPlazas.gt(0), c.emailEmpresa.eq(emailEmpresa)]), {
        sort: s => s.createdAt(SortDirection.DESCENDING)
      })

      setVacantesNoVisibles(newVacantes)
    } catch (error) {
      throw new Error('Error al listar las vacantes no visibles', error)
    }
  }

  return {
    saveVacanteOnDataStore,
    listVacantes,
    vacantesNoVisibles,
    vacantesVisibles,
    listVacantesNoVisibles,
    handleChangeVacanteStatus,
    isVacanteVisible,
    listVacante,
    vacante,
    deleteVacante,
    updateStatusVacante,
    isVacanteLoaded,
    updateVacante,
    listVacantesFiltros
  }
}
