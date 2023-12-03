import { Box, Select } from '@chakra-ui/react'
import { VersionAntigua } from './VersionAntigua'
import { useVersions } from '../../hooks/useVersions'
import { SinVacantes } from '../Vacantes/SinVacantes'
import { useState, useEffect } from 'react'

export function SelectVersiones({ versiones, nombreVacante }) {
	const { handleVacanteChange, vacanteSelected } = useVersions()
	const [isLastVersion, setIsLastVersion] = useState(false)

	useEffect(() => {
		if (vacanteSelected) {
			const lastVersion = versiones[versiones.length - 1].informacionVacante
			const isSelectedLastVersion = JSON.stringify(lastVersion) === JSON.stringify(vacanteSelected)

			setIsLastVersion(isSelectedLastVersion)
		}
	}, [vacanteSelected, versiones])

	return (
		<Box>
			<Select
				placeholder='Versiones'
				mb='2rem'
				value={vacanteSelected ? JSON.stringify(vacanteSelected) : ''}
				onChange={handleVacanteChange}
			>
				{versiones?.map((version, i) => (
					<option
						key={version.id}
						value={JSON.stringify(version.informacionVacante)}
					>
						Versión {i + 1} - Fecha de creación {version.createdAt.slice(0, 10)}
					</option>
				))}
			</Select>
			{vacanteSelected ? (
				<VersionAntigua
					vacante={vacanteSelected}
					isLastVersion={isLastVersion}
				/>
			) : (
				<SinVacantes hasButton={false}>Selecciona una versión de la vacante {nombreVacante}</SinVacantes>
			)}
		</Box>
	)
}
