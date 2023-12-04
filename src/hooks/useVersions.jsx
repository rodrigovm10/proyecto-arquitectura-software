import { DataStore } from '@aws-amplify/datastore'
import { VersionVacante, Vacante } from '../models'
import { useState } from 'react'

export function useVersions() {
	const [versiones, setVersiones] = useState()
	const [vacanteSelected, setVacanteSelected] = useState(null)

	const handleVacanteChange = e => {
		const { value } = e.target
		const newValue = JSON.parse(value)
		setVacanteSelected(newValue)
	}

	const parseVacante = vacante => {
		return JSON.parse(vacante)
	}

	const saveVersionOnDataStore = async vacante => {
		const { id, empresaID } = vacante
		const vacanteString = JSON.stringify(vacante)
		const versionVacante = new VersionVacante({
			empresaID,
			vacanteID: id,
			informacionVacante: [vacanteString]
		})

		try {
			await DataStore.save(versionVacante)
			console.log('save')
		} catch (error) {
			console.log(error)
		}
	}

	const getVersionesVacantes = async id => {
		try {
			const versionesDataStore = await DataStore.query(VersionVacante, c => c.vacanteID.eq(id))
			setVersiones(versionesDataStore)
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const restoreLastVersion = async id => {
		try {
			const versionesDataStore = await DataStore.query(VersionVacante, c => c.vacanteID.eq(id))
			const vacanteActual = await DataStore.query(Vacante, id)
			const lastVersion = versionesDataStore.pop()
			changeVacanteToLastVersion({ vacante: vacanteActual, version: lastVersion })
			const versionToDelete = await DataStore.query(VersionVacante, lastVersion.id)
			DataStore.delete(versionToDelete)
		} catch (error) {
			console.log(error)
		}
	}

	const changeVacanteToLastVersion = async ({ vacante, version }) => {
		try {
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
				idioma,
				nivelIdioma,
				prestaciones,
				habilidadesBlandas,
				habilidadesTecnicas,
				emailEmpresa,
				ubicacion,
				nombreEmpresa,
				salarioMin,
				salarioMax,
				idiomaConNivel,
				municipio,
				jornadaLaboral,
				periodoPago
			} = JSON.parse(version.informacionVacante)

			const nuevaVacante = Vacante.copyOf(vacante, updated => {
				Object.assign(updated, {
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
					idioma,
					nivelIdioma,
					prestaciones,
					habilidadesBlandas,
					habilidadesTecnicas,
					emailEmpresa,
					ubicacion,
					nombreEmpresa,
					salarioMin,
					salarioMax,
					idiomaConNivel,
					municipio,
					jornadaLaboral,
					periodoPago
				})
			})
			await DataStore.save(nuevaVacante)
		} catch (error) {
			console.log(error)
		}
	}

	return {
		saveVersionOnDataStore,
		getVersionesVacantes,
		versiones,
		handleVacanteChange,
		vacanteSelected,
		parseVacante,
		restoreLastVersion
	}
}
