import { EDIT_PRODUCT } from "./actions";

const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    payload: product,
  }
}

export default editProduct;
