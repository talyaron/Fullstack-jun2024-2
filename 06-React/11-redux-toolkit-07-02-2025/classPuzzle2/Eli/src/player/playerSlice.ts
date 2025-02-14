import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayerState {
  name: string, 
  img: string
}

const initialState: PlayerState = {
  name: "",
  img: "",
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {

    setPlayer: (state, action: PayloadAction<{ name: string, img: string }>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlayer } = playerSlice.actions

export default playerSlice.reducer