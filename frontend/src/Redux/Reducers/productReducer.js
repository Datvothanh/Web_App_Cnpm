import {
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
  } from "../Constants/ProductConstants";
  
  // PRODUCT LIST
  export const ProductReducers = (state, action) => {
      const {type , payload} =action
      switch (type) {
        case PRODUCT_LIST_SUCCESS:
          return {
            ...state,
            loading: false,
            products: payload,
          };
        case PRODUCT_LIST_FAIL:
          return { 
            ...state,
            loading: false, 
            products:[] };
        default:
          return state;
      }
    };
  
  