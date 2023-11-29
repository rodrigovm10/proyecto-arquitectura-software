import React, { useState, useRef } from 'react'

// Función para crear un nuevo memento
const createMemento = state => ({ state })

// Hook para gestionar el estado y el historial
const useMemento = initialState => {
	const [state, setState] = useState(initialState)
	const historyRef = useRef([])

	const saveState = () => {
		const memento = createMemento({ ...state })
		historyRef.current = [...historyRef.current, memento]
	}

	const undo = () => {
		if (historyRef.current.length > 0) {
			const lastMemento = historyRef.current[historyRef.current.length - 1]
			setState(lastMemento.state)
			historyRef.current = historyRef.current.slice(0, -1)
		}
	}

	return [state, setState, saveState, undo]
}

// Componente funcional que utiliza el hook de Memento
const MementoExample = () => {
	const [state, setState, saveState, undo] = useMemento({ data: {} })

	const handleInputChange = (key, value) => {
		setState(prevState => ({
			...prevState,
			data: {
				...prevState.data,
				[key]: value
			}
		}))
	}

	return (
		<div>
			<h2>Memento Pattern Example</h2>
			<div>
				<label>
					Data:
					<input
						type='text'
						value={state.data.text || ''}
						onChange={e => handleInputChange('text', e.target.value)}
					/>
				</label>
			</div>
			<button onClick={saveState}>Save State</button>
			<button onClick={undo}>Undo</button>
			<div>
				<h3>Current State</h3>
				<pre>{JSON.stringify(state, null, 2)}</pre>
			</div>
		</div>
	)
}

export default MementoExample
