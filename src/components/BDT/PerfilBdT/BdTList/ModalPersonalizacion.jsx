import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Select,
	Text
} from '@chakra-ui/react'
import { opcionesTipografias, opcionesColores } from '../../../../constants/DecoratorCard'
import { useState } from 'react'
import { estilosTarjetas } from '../../../../constants/DecoratorCard'
import { registrarStyle } from '../../../../hooks/RegistroBdt'
import { updatedStyle } from '../../../../hooks/EditarBdt'

export function PersonalizarPerfil({ isOpen, onClose, bde, styles }) {
	const [situacion, setSituacion] = useState('')
	const [bdeInfo, setBdeInfo] = useState('')
	const [hab, setHab] = useState('')

	const handleGuardar = async () => {
		try {
			await registrarStyle(situacion, bdeInfo, hab, bde)
			onClose()
			// Introduce un pequeño retraso (por ejemplo, 500 milisegundos) antes de recargar

			await window.location.reload()
		} catch (error) {
			console.error('Error al guardar el estilo:', error)
			// Puedes agregar aquí lógica adicional en caso de error, como mostrar un mensaje al usuario.
		}
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Personalizar Perfil</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>Situación actual</Text>
					<Select
						placeholder='Estilo para la tarjeta situación actual'
						value={situacion}
						onChange={e => setSituacion(e.target.value)}
						mb='2'
					>
						{estilosTarjetas.map(estilo => (
							<option
								key={estilo.id}
								value={estilo.id}
							>{`${estilo.name}`}</option>
						))}
					</Select>

					<Text>Información del perfil</Text>
					<Select
						placeholder='Estilo para la tarjeta información del perfil'
						value={bdeInfo}
						onChange={e => setBdeInfo(e.target.value)}
						mb='2'
					>
						{estilosTarjetas.map(estilo => (
							<option
								key={estilo.id}
								value={estilo.id}
							>{`${estilo.name}`}</option>
						))}
					</Select>

					<Text>Idiomas y habilidades</Text>
					<Select
						placeholder='Estilo para la tarjeta de idiomas y habilidades'
						value={hab}
						onChange={e => setHab(e.target.value)}
						mb='2'
					>
						{estilosTarjetas.map(estilo => (
							<option
								key={estilo.id}
								value={estilo.id}
							>{`${estilo.name}`}</option>
						))}
					</Select>
				</ModalBody>
				<ModalFooter>
					<Button
						colorScheme='blue'
						onClick={handleGuardar}
						mr='2'
					>
						Guardar
					</Button>
					<Button
						colorScheme='blue'
						onClick={onClose}
					>
						Cerrar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export const PersonalizarPerfilEdicion = ({ isOpen, onClose, bde, styles }) => {
	const [situacion, setSituacion] = useState(styles.cardSit)
	const [bdeInfo, setBdeInfo] = useState(styles.cardInfo)
	const [hab, setHab] = useState(styles.cardHab)

	const handleGuardar = async () => {
		try {
			await updatedStyle(situacion, bdeInfo, hab, bde, styles)
			onClose()

			// Introduce un pequeño retraso (por ejemplo, 500 milisegundos) antes de recargar
			setTimeout(() => {
				window.location.reload()
			}, 1000)
		} catch (error) {
			console.error('Error al guardar el estilo:', error)
			// Puedes agregar aquí lógica adicional en caso de error, como mostrar un mensaje al usuario.
		}
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Personalizar Perfil</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>Situación actual</Text>
					<Select
						placeholder='Estilo para la tarjeta situación actual'
						value={situacion}
						onChange={e => setSituacion(e.target.value)}
						mb='2'
					>
						{estilosTarjetas.map(estilo => (
							<option
								key={estilo.id}
								value={estilo.id}
							>{`${estilo.name}`}</option>
						))}
					</Select>

					<Text>Información del perfil</Text>
					<Select
						placeholder='Estilo para la tarjeta información del perfil'
						value={bdeInfo}
						onChange={e => setBdeInfo(e.target.value)}
						mb='2'
					>
						{estilosTarjetas.map(estilo => (
							<option
								key={estilo.id}
								value={estilo.id}
							>{`${estilo.name}`}</option>
						))}
					</Select>

					<Text>Idiomas y habilidades</Text>
					<Select
						placeholder='Estilo para la tarjeta de idiomas y habilidades'
						value={hab}
						onChange={e => setHab(e.target.value)}
						mb='2'
					>
						{estilosTarjetas.map(estilo => (
							<option
								key={estilo.id}
								value={estilo.id}
							>{`${estilo.name}`}</option>
						))}
					</Select>
				</ModalBody>
				<ModalFooter>
					<Button
						colorScheme='blue'
						onClick={handleGuardar}
						mr='2'
					>
						Guardar
					</Button>
					<Button
						colorScheme='blue'
						onClick={onClose}
					>
						Cerrar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
