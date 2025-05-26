import { createReducer, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CATEGORY = 'GET_CATEGORY';
const ADD_CART = 'ADD_CART';
const DELETE_CART = 'DELETE_CART';
const DECREMENT_CART = 'DECREMENT_CART';

export const getCategory = () =>{
    let action = createAction(GET_CATEGORY);
    return (dispatch) =>{
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => dispatch(action(data)));
    }
}

export const addCart = createAction(ADD_CART);
export const deleteCart = createAction(DELETE_CART);
export const decrementCart = createAction(DECREMENT_CART);

const inititalState = {
    category: [],
    cart: [],
}


export default createReducer(inititalState, (builder) => {
    builder
        .addCase(GET_CATEGORY, (state, action) => {
                state.category = action.payload
        })
        .addCase(ADD_CART, (state, action)=>{
            const idx = state.cart.findIndex(item => item.id === action.payload.id);
            if(idx > -1){
                state.cart[idx].count++
            } else{
                state.cart = [
                    {
                        ...action.payload,
                        count: 1
                    },
                    ...state.cart
                ]
            }
        })
        .addCase(DECREMENT_CART, (state, action)=>{
             const idx = state.cart.findIndex(item => item.id === action.payload.id);
              if(state.cart[idx].count > 1) state.cart[idx].count--
        })
        .addCase(DELETE_CART, (state, action)=>{
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        })

})