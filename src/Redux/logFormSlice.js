import {createSlice} from '@reduxjs/toolkit'

const logFormSlice = createSlice({
    name:'form',
    initialState:{
        currentState:"signin"
    },
    reducers:{
        onBtnClick:(state, action)=>{
            state.currentState = action.payload
        }
    }
})


export const {onBtnClick} = logFormSlice.actions
export default logFormSlice.reducer