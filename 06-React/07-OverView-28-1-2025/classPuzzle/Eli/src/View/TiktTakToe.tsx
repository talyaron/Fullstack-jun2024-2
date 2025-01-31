import style from "./TikTakToe.module.scss";
import UseTikTakVm from "./UseTikTakVm";

function TiktTakToe() {
  const { tikBoard, winner, turnPlayed } = UseTikTakVm();
  return (
    <div>
      {winner !== null ? (
        <button
          onClick={() => window.location.reload()}
          className={style.reset}
        >
          reset
        </button>
      ) : (
        ""
      )}
      {typeof winner == "string" ? (
        <h4 className={style.winner}>{winner} </h4>
      ) : (
        ""
      )}
      {winner && typeof winner != "string" ? (
        <h4 className={style.winner}>Winner is: {winner.symbol} </h4>
      ) : (
        ""
      )}
      <div
        className={style.boardContainer}
        style={{
          gridTemplateColumns: `repeat(${tikBoard.length}, auto)`,
        }}
      >
        {tikBoard.map((box, i) =>
          box.map((_, j) => (
            <button
              key={crypto.randomUUID()}
              className={style.box}
              onClick={() => turnPlayed(i, j)}
            >
              <div className={style.symbol}>{tikBoard[i][j]}</div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default TiktTakToe;
