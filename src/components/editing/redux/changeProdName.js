import { CHANGE_PRODUCT_NAME } from "./actions";

const changeProdName = (prodName) => {
  return {
    type: CHANGE_PRODUCT_NAME,
    payload: prodName,
  }
}

export default changeProdName;
