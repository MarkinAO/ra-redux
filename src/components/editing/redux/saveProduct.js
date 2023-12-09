import { SAVE_PRODUCT } from "./actions";

const saveProduct = (newProduct) => {
    return {
        type: SAVE_PRODUCT,
        payload: newProduct
    }
}

export default saveProduct;