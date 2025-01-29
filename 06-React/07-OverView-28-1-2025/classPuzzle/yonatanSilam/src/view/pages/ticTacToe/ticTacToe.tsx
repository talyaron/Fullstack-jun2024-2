
import style from './ticTacToe.module.scss'
import { useTicTacToeVM } from './ticTacToeVM'
import Cell from '../../components/Cell/Cell';
const TicTacToe = () => {
  const {cells, setCells} = useTicTacToeVM();
  return (
    <div className={style.board}>
      {cells.map((cell)=>(
        <Cell key={cell._id} cell={cell} />
      ) )}
    </div>
  );
}

export default TicTacToe
