// reduces item
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';
//import { v4 as uuid } from 'uuid'; 

const initialState = {
    items: [
        // { id: uuid(), name: 'Eggs'},
        // { id: uuid(), name: 'Milk'},
        // { id: uuid(), name: 'Steak'},
        // { id: uuid(), name: 'Water'},
    ],
    loading: false
};

export default function itemReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
                // need to change loading state back to false as we have now gotten data
            };
        case DELETE_ITEM:
            return {
                // Note MongoDB uses _id
                ...state, items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state, items: [action.payload, ...state.items]
            };           
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}