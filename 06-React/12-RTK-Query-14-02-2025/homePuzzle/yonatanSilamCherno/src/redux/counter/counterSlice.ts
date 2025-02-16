import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { //reducers change data in the store in a very predictable way
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => { //action is data that is sent from the component to the store it is an object {payload: number, type: string}
            state.value += action.payload //payload is the data that is sent from the component to the store
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer