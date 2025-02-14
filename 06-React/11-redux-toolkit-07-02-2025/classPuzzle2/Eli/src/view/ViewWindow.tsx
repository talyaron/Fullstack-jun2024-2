import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import styles from "./ViewWindow.module.scss"

const ViewWindow = () => {
    const player = useSelector((state:RootState)=>state.counter.value)
    if(player.img)
  return (
    <div className={styles.window}>
        <h1>{player.name}</h1>
      <img src={player.img} alt={player.name+ "image"} />
    </div>
  )
}

export default ViewWindow
