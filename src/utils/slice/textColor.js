import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color: "black",
    bColor: "black",
    bgColor : "white",
    styleTheme : {}
}

export const textColorSlice = createSlice({
    name: 'textColor',
    initialState,
    reducers: {
        changTextColor: (state, action) => {
            state.color = action.payload
        },
        changBorderColor: (state, action) => {
            state.bColor = action.payload
        },
        changBackgroundColor: (state, action) => {
            state.bgColor = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { changTextColor , changBorderColor , changBackgroundColor } = textColorSlice.actions

export default textColorSlice.reducer