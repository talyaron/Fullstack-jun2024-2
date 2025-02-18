
import { Link } from 'react-router'
import './App.css'
import styles from "./view/Dog.module.scss"
function App() {

  return (
      <div>
       <h1>welcome to dog!</h1>
       <div className={styles.linkContainer}>
       <Link className={styles.link} to="/Dogs"><h1>- To Dogs! -</h1></Link>
       </div>
      </div>
  )
}

export default App
