import {
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Grid,
	Heading,
	Stack,
	StackDivider,
	Text
} from '@chakra-ui/react'
import { TagsDatosVacante } from '../Vacantes/TagsDatosVacante'
import { useVersions } from '../../hooks/useVersions'
import { useAlerts } from '../../hooks/useAlerts'

export function VersionAntigua({ vacante, isLastVersion }) {
	const { parseVacante } = useVersions()
	const { restoreVersion } = useAlerts()
	vacante = parseVacante(vacante)
	return (
		<Box>
			<Flex
				mx={{ base: '2rem', sm: '4rem', md: '0rem' }}
				mb='2rem'
				justifyContent='center'
			>
				<Card boxShadow='2xl'>
					<CardHeader>
						<Flex justifyContent='space-between'>
							<Flex justifyContent='space-between'>
								<Box>
									<Heading
										as='h2'
										size='lg'
									>
										{vacante.nombre}
									</Heading>
									<Text>{vacante.descripcion}</Text>
								</Box>
							</Flex>
							{isLastVersion ? (
								<Button
									onClick={() => restoreVersion(vacante.id)}
									color='white'
									bg='#ea754b'
									_hover={{ bg: '#ff964f' }}
								>
									Recuperar versión de la vacante
								</Button>
							) : (
								<Button
									isDisabled
									color='white'
									bg='#ea754b'
									_hover={{ bg: '#ff964f' }}
								>
									Recuperar versión de la vacante
								</Button>
							)}
						</Flex>
					</CardHeader>
					<CardBody>
						<Stack
							divider={<StackDivider />}
							spacing='4'
						>
							<Box>
								<Heading
									color='#ea754b'
									as='h3'
									size='md'
								>
									Detalles de la vacante
								</Heading>
								<Grid
									templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
									columnGap='4rem'
									rowGap='1rem'
								>
									<Text>
										<strong>Dirección de la vacante:</strong> {vacante.ubicacion}
									</Text>
									<Text>
										<strong>Número de plazas:</strong> {vacante.numeroPlazas}
									</Text>
									<Text>
										<strong>Tipo de contrato:</strong> {vacante.tipoContrato}
									</Text>
									<Text>
										<strong>Modalidad:</strong> {vacante.modalidad}
									</Text>
									<Text>
										<strong>Días laborales:</strong> {vacante.diasLaborales}
									</Text>
									<Text>
										<strong>Área:</strong> {vacante.area}
									</Text>
									<Text>
										<strong>Salario:</strong> ${vacante.salarioMin} - ${vacante.salarioMax} - {vacante.periodoPago}
									</Text>
									<Text>
										<strong>Jornada laboral:</strong> {vacante.jornadaLaboral}
									</Text>
								</Grid>
							</Box>
							<Box>
								<Heading
									color='#ea754b'
									as='h3'
									size='md'
								>
									Requisitos
								</Heading>
								<Grid
									templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
									columnGap='4rem'
									rowGap='1rem'
								>
									<Text>
										<strong>Experiencia laboral:</strong> {vacante.experienciaLaboral}
									</Text>
									<Text>
										<strong>Género:</strong> {vacante.genero}
									</Text>

									<Text>
										<strong>Escolaridad:</strong> {vacante.escolaridad}
									</Text>
									<Text>
										<strong>Edad:</strong> {vacante.edadMin} años a {vacante.edadMax} años
									</Text>
								</Grid>
							</Box>
							<TagsDatosVacante
								titulo={'Idiomas'}
								tags={vacante.idioma}
							/>
							<TagsDatosVacante
								titulo={'Prestaciones'}
								tags={vacante.prestaciones}
							/>
							<TagsDatosVacante
								titulo={'Habilidades blandas'}
								tags={vacante.habilidadesBlandas}
							/>
							<TagsDatosVacante
								titulo={'Habilidades técnicas'}
								tags={vacante.habilidadesTecnicas}
							/>
						</Stack>
					</CardBody>
				</Card>
			</Flex>
		</Box>
	)
}
