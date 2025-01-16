import { ballonGameMV } from "./BallonGameMV";
import { Ballon } from "../../../model/ballon/ballon";
import style from "./BallonGame.module.scss"

const StartPlay = () => {

    const { ballons , setBallons} = ballonGameMV();

    function createBallon(){
        const newBallon: Ballon = {
            id: "123",
            imageUrl: "https://partysocial.ae/cdn/shop/files/premium-balloon-5in-13cm-15-per-pack-party-social-1_grande.webp?v=1720101498"
            };
            setBallons([...ballons, newBallon]);
    
    }
            

    return (<div>
        <h1>hey, you create {ballons.length} ballons </h1>
        <button onClick={createBallon}>lets play</button>
        {ballons.map(ballon => 
        <div className={style.ballons} key={ballon.id}>
            <img src={ballon.imageUrl} alt={ballon.id} />
        </div>)}
        </div>
    );
}

export default StartPlay