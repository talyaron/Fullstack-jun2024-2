
import style from './ticTacToe.module.scss'
import { useTicTacToeVM } from './ticTacToeVM'
import Cell from '../../components/Cell/Cell';
const TicTacToe = () => {
  const {cells, play} = useTicTacToeVM();
  return (
    <div className={style.board}>
      {cells.map((cell)=>(
        <Cell key={cell._id} cell={cell} play={play}/>
      ) )}
    </div>
  );
}

export default TicTacToe
