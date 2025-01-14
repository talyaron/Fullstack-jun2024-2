import { useState } from "react";
import { Ballon } from "../../../model/ballon/ballon";

export function ballonGameMV(){
    const [ballons, setBallons] = useState<Ballon[]>([]);

    const createNewBallon = () => {
        const newBallon:Ballon = {
            id: "hey",
            imageUrl: "https://partysocial.ae/cdn/shop/files/premium-balloon-5in-13cm-15-per-pack-party-social-1_grande.webp?v=1720101498"
            };
            setBallons([...ballons, newBallon]);
        }

        

        function getBallonImageUrl(){
            return ballons[0].imageUrl;
        }


    return  {
        ballons,setBallons,createNewBallon,getBallonImageUrl
    }

}

