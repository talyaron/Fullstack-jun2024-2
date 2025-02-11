import { increment } from "../../../redux/counter/CounterSlice"
import { useDispatch } from 'react-redux'
import styles from "./Picture.module.scss"
const SmallPic = () =>{
    const dispatch = useDispatch()

    function handelAdd(){
        dispatch(increment())
    }


  return (
<div className={styles.picture}>
    <img src="https://i.ytimg.com/vi/iB8lK5IKxqI/maxresdefault.jpg" alt="" />
</div>
  )
}


export default SmallPic
