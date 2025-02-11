import { players } from "./model/players"
import PlayerComp from "./player/PlayerComp"
import ViewWindow from "./view/viewWindow"


function App() {

  return (
   <div>
    
    <ViewWindow />
    {players.map((player, index) => (
   <PlayerComp key={index+1} img={player.img} name={player.name}></PlayerComp>
  ))}
  
  </div>
  )
}

export default App
