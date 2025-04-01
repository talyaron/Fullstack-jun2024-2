import { players } from "./model/players"
import PlayerComp from "./player/PlayerComp"
import ViewWindow from "./view/ViewWindow"
import "./App.css"

function App() {

  return (
   <div>
    
    <ViewWindow />
    <h2>choose your player:</h2>

    {players.map((player, index) => (
   <PlayerComp key={index+1} img={player.img} name={player.name}></PlayerComp>
  ))}
  
  </div>
  )
}

export default App
