export const tiktakBoard = [
    ["","",""],
    ["","",""],
    ["","",""],
    //2d array 3 rows of arrays that have 3 columns(3 elements in each array)
]

export interface Player{
  symbol:string
}
export const allPlayers:Player[]=[
  {symbol:"❌"},
  {symbol:"⭕"},
//   {symbol:"🎈"},
//   {symbol:"🟥"},

  //can add more players by uncommenting but also make the "tiktakBoard" bigger
]
export const stalemate = "stalemate";
