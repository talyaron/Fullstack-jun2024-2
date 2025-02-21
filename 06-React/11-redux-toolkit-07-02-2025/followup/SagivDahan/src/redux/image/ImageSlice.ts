import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface imageState {
  imgUrl: string
}

const initialState: imageState = {
  imgUrl: "",
}

export const ImageSlice = createSlice({
  name: 'Image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.imgUrl += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setImage } = ImageSlice.actions

export default ImageSlice.reducer