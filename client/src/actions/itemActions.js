import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => async dispatch => {
    // first we set to set loading as true, since we are fetching data
    dispatch(setItemsLoading());
    console.log('dispatched set Items Loading');
    // recall we set up route as /api/items, can perform GET, POST, and DELETE. See items.js file 
    const res = await fetch('/api/items');
    const data = await res.json();
    // need to use .json() to parse json into js object
    console.log('data fetched and dispatched');
    dispatch({
        type: GET_ITEMS,
        payload: data
    });
    
}

export const addItem = (item) => async dispatch => {
    const res = await fetch('/api/items', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(item)
    });
    // don't forget to await, otherwise data wont be there when dispatching
    const data = await res.json();
    dispatch({
        type: ADD_ITEM,
        payload: data
    });
}

export const deleteItem = (id) => async dispatch => {
    const res = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type':'application/json'
        },
    });
    const data = await res.json();
    // note the data returned is an object containing a boolean value indicating whether DELETE was successful, NOT the item that was deleted. need to return id as payload
    console.log('deleted item: '+data);
    dispatch({
        type: DELETE_ITEM,
        payload: id
    });
};

// test with our static state first
// export const getItems = () => {
//     return {
//         type: GET_ITEMS
//     };
// };

// export const addItem = (item) => {
//     return {
//         type: ADD_ITEM,
//         payload: item
//     };
// };

// export const deleteItem = (id) => {
//     console.log('deleting'+id);
//     return {
//         type: DELETE_ITEM,
//         payload: id
//     };
// };

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};