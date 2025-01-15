import { useState } from "react"
import { Ballon } from "../../../model/ballons/ballonModel"


export function useBallonMV(){
  const [ballon, setBallon] = useState<Ballon[]>([
    
    {
      id: crypto.randomUUID(),
      imgURL: "https://t3.ftcdn.net/jpg/04/22/29/14/240_F_422291475_PvIsYRLsI14jE1uokCKpUEAJwL4YbEAq.jpg",
      x: Math.floor(Math.random()* 600),
      y: Math.floor(Math.random()* 600), 
    },
    {
      id: crypto.randomUUID(),
      imgURL: "https://t3.ftcdn.net/jpg/04/22/29/14/240_F_422291475_PvIsYRLsI14jE1uokCKpUEAJwL4YbEAq.jpg",
      x: Math.floor(Math.random()* 700),
      y: Math.floor(Math.random()* 700), 
    },

])

  return{
    ballon, setBallon
  }
}