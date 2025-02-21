import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImgState {
  src: string
}

const initialState: ImgState = {
    src: ''
}

export const imgSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {

    changeImage: (state, action: PayloadAction<string>) => {
      state.src = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeImage} = imgSlice.actions



export interface CounterState {
  value: number
}

const initialState1: CounterState = {
  value: 0,
}

export default imgSlice.reducer