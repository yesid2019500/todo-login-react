
import { types } from "../types/types";


const inicitialState ={
    notes: [],
    note: {},
    load: true,
}

export const notesReducer = (state=inicitialState, action) => {
    switch (action.type) {
       
        case types.data :
            return {
                ...state,
                notes: action.payload,
                load:false
            }
           
        default:
            return state;
    }
}
