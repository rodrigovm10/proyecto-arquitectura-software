import { Flex, Grid, GridItem } from '@chakra-ui/react'
import { VersionActual } from './VersionActual'
import { SelectVersiones } from './SelectVersiones'
import { ButtonVacante } from '../ButtonVacante'

export function Versiones({ versiones, vacante, nombreVacante }) {
	return (
		<>
			<Grid
				templateColumns={{ md: '1fr', xl: 'repeat(2, 1fr)' }}
				m='1rem 4rem 2rem'
				gap='2rem'
			>
				<GridItem>
					<Flex
						gap='2rem'
						flexDir='column'
					>
						<SelectVersiones
							versiones={versiones}
							nombreVacante={nombreVacante}
						/>
					</Flex>
				</GridItem>
				<GridItem alignSelf='start'>
					<VersionActual vacante={vacante} />
				</GridItem>
			</Grid>
			<Flex
				justifyContent='center'
				alignItems='start'
			>
				<ButtonVacante
					w='23rem'
					mb='2rem'
					to={`/vacantes/vacante/${vacante.id}`}
				>
					Volver a la descripción detallada de la vacante
				</ButtonVacante>
			</Flex>
		</>
	)
}
