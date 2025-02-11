import  { FC } from 'react'
import { useDispatch } from 'react-redux';
import { setPlayer } from './playerSlice';

interface PlayerFC{
    img:string,
    name:string,
}

const PlayerComp:FC<PlayerFC> = ({img,name}) => {
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(setPlayer({img,name}))///action
    }
  return (
    <button onClick={handleClick}>
      <h3>{name}</h3>
      <img src={img} alt={name} width="100" />
    </button>
  )
}

export default PlayerComp
