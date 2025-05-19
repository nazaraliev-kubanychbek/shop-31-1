import { createReducer, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CATEGORY = 'GET_CATEGORY';


export const getCategory = () =>{
    let action = createAction(GET_CATEGORY);
    return (dispatch) =>{
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => dispatch(action(data)));
    }
}


const inititalState = {
    category: [],
}


export default createReducer(inititalState, (builder) => {
    builder
        .addCase(GET_CATEGORY, (state, action) => {
                state.category = action.payload
        })

})