import { useParams } from 'react-router-dom'
import { useManageVacantes } from '../../hooks/useManageVacantes'
import { useVersions } from '../../hooks/useVersions'
import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Box, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import { Versiones } from '../../components/Versiones/Versiones'
import { Footer } from '../../landing/Footer'

export function VacanteVersiones() {
	const { id } = useParams()
	const { getVersionesVacantes, versiones } = useVersions()
	const { listVacante, vacante, isVacanteLoaded } = useManageVacantes()

	useEffect(() => {
		listVacante(id)
		getVersionesVacantes(id)
		console.log(versiones)
	}, [])

	useEffect(() => {
		if (!isVacanteLoaded) return
		console.log(vacante)
	}, [isVacanteLoaded, vacante])

	return (
		<>
			<Header nombreDelGrupo='Empresa' />
			<Box>
				<Stack
					mt='2rem'
					ml='2rem'
				>
					<Heading
						as='h2'
						size='2xl'
					>
						Versiones
					</Heading>
					<Text
						fontSize='xl'
						mb='2rem'
					>
						En esta sección podrás visualizar las versiones de la vacante {vacante.nombre}
					</Text>
				</Stack>
				<Versiones
					nombreVacante={vacante.nombre}
					versiones={versiones}
					vacante={vacante}
				/>
			</Box>
			<Footer />
		</>
	)
}
