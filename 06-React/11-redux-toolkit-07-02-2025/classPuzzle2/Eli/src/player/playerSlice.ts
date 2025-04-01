import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayerState {
  player:{name: string, 
  img: string}
}

const initialState: PlayerState = {
  player:{ name: "",
  img: "",}
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {

    setPlayer: (state, action: PayloadAction<{ name: string, img: string }>) => {
      state.player = action.payload;

    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlayer } = playerSlice.actions

export default playerSlice.reducer