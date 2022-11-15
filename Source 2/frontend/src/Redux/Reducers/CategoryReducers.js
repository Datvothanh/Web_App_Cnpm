import {
    CATEGORY_LOADED_SUCCESS,
    CATEGORY_LOADED_FAIL,
    CATEGORY_LIST_REQUEST,
} from "../Constants/CategoryContants";

// PRODUCT LIST
export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case CATEGORY_LIST_REQUEST:
        return { loading: true, categories: [] };
      case CATEGORY_LOADED_SUCCESS:
        return {
          loading: false,
          pages: action.payload.pages,
          page: action.payload.page,
          categoriess: action.payload.categories,
        };
      case CATEGORY_LOADED_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };