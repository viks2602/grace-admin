import { createSlice } from "@reduxjs/toolkit";


const initial ={
    test:'',
    student:{
        'name':'',
        'position':''
    },
}


export const testSlice = createSlice({
    name: 'slice',
    initialState: initial,
    reducers:{
        // tseting reacttoolkit works with testSlice
    setTest:(state,action)=>{
            state.test = action.payload
        },
        //student slice 
    setStudent:(state,action)=>{
       state.student = action.payload
    }
    }
})

export const {setTest,setStudent} = testSlice.actions;

export default testSlice.reducer