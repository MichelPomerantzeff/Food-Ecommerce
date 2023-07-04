import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    totalItems:{},
    reducers: {
        add: (state, action) => {
            const existingItem = state.find(i => action.payload.id == i.id);
            if(existingItem) {
                existingItem.units++
                state={...state, existingItem}
            } else {
                const xxx = action.payload.units = 1
                state.push({...action.payload, xxx});
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

        reset: (state, action) => {
            return [];
        }
        
    },
});

export const { add, remove, reset } = cartSlice.actions;
export default cartSlice.reducer;