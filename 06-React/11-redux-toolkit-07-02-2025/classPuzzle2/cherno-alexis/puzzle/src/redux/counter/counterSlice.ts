import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
  image: string
}

const initialState: ImageState = {
  image: "",
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    changeImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeImage } = imageSlice.actions

export default imageSlice.reducer