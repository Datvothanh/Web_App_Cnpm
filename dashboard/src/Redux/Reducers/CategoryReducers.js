import {
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
} from "../Constants/CategoryConstants";

// PRODUCT LIST
export const CategoryReducers = (state, action) => {
    const {type , payload} =action
    switch (type) {
      case CATEGORY_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: payload,
        };
      case CATEGORY_LIST_FAIL:
        return { 
          ...state,
          loading: false, 
          categories:[] };
      default:
        return state;
    }
  };

