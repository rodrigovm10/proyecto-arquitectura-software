import { DataStore } from '@aws-amplify/datastore'
import { VersionVacante } from '../models'
import { useEffect, useState } from 'react'

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
			console.log(versionesDataStore)
			setVersiones(versionesDataStore)
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const restoreLastVersion = async id => {}

	return {
		saveVersionOnDataStore,
		getVersionesVacantes,
		versiones,
		handleVacanteChange,
		vacanteSelected,
		parseVacante
	}
}
