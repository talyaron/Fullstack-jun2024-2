import { useBallonMV } from "./BallonMV";
import styles from './Ballon.module.scss'
import ballon from '..../assets/ballon.png'
const Ballon = () => {
    const { ballons, setBallon } = useBallonMV()
    
    function addNewBallon(event:any){
        try {
            event.preventDefault();
            const text = new FormData(event.target).get("text") as string
            console.log(text)
            const randomTop = Math.floor(Math.random() * 80);
            const randomLeft = Math.floor(Math.random() * 80);
            setBallon([...ballons, {
                id: crypto.randomUUID(),
                isExplode: false,
                position: { top: `${randomTop}%`, left: `${randomLeft}%` }
            }])
            event.target.reset()
    
        } catch (error) {
            console.error(error)
        }
    }

    function removeBallon(id: string) {
        try {
            setBallon(ballons.filter(ballon => ballon.id !== id))
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        <h1 className={styles.header}>Ballons Game</h1>
        <form onSubmit={addNewBallon}>
            <button className={styles.btn}>Add Ballon</button>
        </form>

        <div className={styles.ballonContainer}>
            {ballons.map((ballon) => (
            <img
            key={ballon.id}
            src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Balloons-PNG/Red_Single_Balloon_PNG_Clipart.png?m=1629829952"
            alt="Balloon"
            className={styles.ballon}
            style={{
              position: "absolute",
              top: ballon.position.top,
              left: ballon.position.left,
            }}
            onClick={() => removeBallon(ballon.id)}/>
            ))}
      </div>
    </div>
  )
}

export default Ballon