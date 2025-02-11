import { useState } from 'react'
import ButtonAddOne from './components/buttonAddOne/ButtonAddOne'
import ButtonRemoveOne from './components/buttonRemoveOne/ButtonRemoveOne'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<ButtonAddOne/>
			<ButtonRemoveOne/>
			
		</>
	)
}

export default App
