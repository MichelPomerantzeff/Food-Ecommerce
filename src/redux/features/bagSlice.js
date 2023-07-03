import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
    name: "bag",
    initialState: [],
    totalItems:{},
    reducers: {
        add: (state, action) => {
            const isAddedItem = state.some(i => action.payload.id == i.id);
            const existingItem = state.find(i => action.payload.id == i.id);
            if(isAddedItem) {
                existingItem.units++
                state={...state, existingItem}
            } else {
                action.payload.units++
                state.push(action.payload);
            }
        },
        
        remove: (state, action) => {
            const existingItem = state.find(i => action.payload.id == i.id);
                
            if(existingItem.units > 1) {
                existingItem.units--
                state={...state, existingItem}
            } else {
                return state.filter(item => item.id !== action.payload.id);
            }
            
        },
        
    },
});

export const { add, remove } = bagSlice.actions;
export default bagSlice.reducer;