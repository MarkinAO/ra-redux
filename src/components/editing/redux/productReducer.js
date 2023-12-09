import { CHANGE_PRICE, CHANGE_PRODUCT_NAME, SAVE_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, CHANGE_ID } from "./actions";

const initialState = {
  prodName: '',
  price: '',
  products: [],
  id: ''
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT_NAME:
      return {
        ...state,
        prodName: action.payload
      }
    case CHANGE_PRICE:
      return {
        ...state,
        price: action.payload,
      }
    case SAVE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case EDIT_PRODUCT:
      {const {id} = action.payload;
      const index = state.products.findIndex(el => el.id === id)      
      const newProducts = [...state.products]
      newProducts[index] = action.payload
      return {
        ...state,
        products: [...newProducts]
      }}
    case CHANGE_ID:
      return {
        ...state,
        id: action.payload
      }
    case DELETE_PRODUCT:
      {const id = action.payload;
      const newProducts = state.products.filter(el => el.id !== id)
      return {
        ...state,
        products: [...newProducts]
      }}

    default:
      return state;
  }
};

export default productReducer;
