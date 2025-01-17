import { useDogVM } from './DogVM'
import styles from './Dog.module.scss'

const Dog = () => {

    const { dog, getNewDog } = useDogVM(); 
    
    return (
      <div className={styles.container}>
        <h1>Dog</h1>
        <div className={styles.dog}>
          {dog && <img src={dog.message} alt="dog" />}
          <button onClick={getNewDog}>Get new dog</button>
        </div>
      </div>
    );
}

export default Dog