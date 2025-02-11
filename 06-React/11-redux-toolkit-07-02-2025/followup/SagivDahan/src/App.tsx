import ButtonAddOne from './components/buttonAddOne/ButtonAddOne'
import ButtonRemoveOne from './components/buttonRemoveOne/ButtonRemoveOne'
import AddPayload from './components/addPayload/AddPayload'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

function App() {
	const counter = useSelector ((state:RootState) => state.counter.value)
	return (
		<div>
			<h1>{counter}</h1>
			<ButtonAddOne/>
			<ButtonRemoveOne/>
			<AddPayload/>
		</div>
	)
}

export default App
