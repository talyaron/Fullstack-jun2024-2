import { useContext } from 'react'
import './App.css'
import ThemeContext from './contexts/themeContext';
import ThemedButton from './view/component/themedButton/ThemedButton';

function App() {

  const { theme } = useContext(ThemeContext);

  return (

    <div className={`app ${theme}`}>
      <div className="text-xl font-bold mb-2">Current Theme:</div>
      <div className="text-xl font-bold mb-2">{theme}</div>
      <ThemedButton />
    </div>

  )
}

export default App
