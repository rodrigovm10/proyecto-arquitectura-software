import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export function ButtonVacante({ children, to, mb = '0', w = '10rem' }) {
	const navigate = useNavigate()

	return (
		<Button
			w={w}
			color='white'
			onClick={() => navigate(to)}
			mb={mb}
			bg='#ea754b'
			_hover={{ bg: '#ff964f' }}
		>
			{children}
		</Button>
	)
}
