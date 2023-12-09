import { DELETE_PRODUCT } from "./actions";

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  }
}

export default deleteProduct;
